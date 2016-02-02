var fs = require('fs');
var router = require('express').Router();
var mongoose = require('mongoose');
var mysql = require('mysql');
var pool = mysql.createPool({ // MySQL Connection
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'eol_prod'
});
var School_Access_Rules = mongoose.model('School_Access_Rules');
var remarks;

/* Rights Management Module Development
 * 
 * Abhishek Arora - Infogain - 31/01/2016
 * 
 * Method to fetch Modules and Features for the requested School 
 * Request: contains school_id
 * Response: has the corresponding modules and features
 */
router.get('/:id',
		function(req, res)
		{
			var variable = [];
			var id = req.params.id;
			pool
				.getConnection(function(err, connection)
				{
					if (err)
						res.json(err);
					else
					{
						var fetchmodule = 'Select feature_id,parent_feature_id,feature_name from feature_master where Type_id IN(select category_type_id from category_master where school_id='
							+ id + ' and category_type_id=1)';
						connection
							.query(
								fetchmodule,
								function(err, modules)
								{
									if (err)
										res.json(err);
									else
									{
										var fetchfeature = 'Select feature_id,parent_feature_id,feature_name from feature_master where Type_id IN(select category_type_id from category_master where school_id='
											+ id + ' and category_type_id=2)';
										connection.query(fetchfeature, function(err, features)
										{
											if (err)
												res.json(err);
											else
											{
												res.json({
													"modules" : modules,
													"features" : features
												});
											}
										});
									}
								});
					}
					connection.release();
				});

		});
module.exports = router;

/* Rights Management Module Development
 * 
 * Abhishek Arora - Infogain - 31/01/2016
 * 
 * Method to return feature_name of the selected feature, corresponding actions and
 * all the roles.
 * Request: contains feature_id
 * Response: will contain feature name, all roles and actions under the feature
 */
router.get('/action/:school_id/:feature_id',
		function(req, res)
		{
			var variable = [];
			pool
				.getConnection(function(err, connection)
				{
					if (err)
						res.json(err);
					else
					{
						var feature_id = req.params.feature_id;
						var school_id=req.params.school_id;
						var fetchroles = 'Select role_id,role_name from role_master where role_name IN("Teacher","Student","Parent","Principal","Subject Teacher")';
						connection.query(fetchroles, function(err, roles)
						{
							if (err)
								res.json(err);
							else
							{
								var fetchclickedfeature = 'Select feature_name from feature_master where feature_id=' + feature_id;
								connection.query(fetchclickedfeature, function(err, feature1)
								{
									if (err)
										res.json(err);
									else
									{
										var fetchactions = 'Select Action_id,Title,Action_Type from feature_actions where feature_id=' + feature_id;
										connection.query(fetchactions, function(err, action)
										{
											if (err)
												res.json(err);
											else
											{
												res.json({
													"roles" : roles,
													"action" : action,
													"feature1" : feature1,
													"feature_id" : feature_id,
													"school_id":school_id
												});
											}
										});
									}
								});
							}
						});
					}
					connection.release();
				});
		});

/* Rights Management Module Development
 * 
 * Payal Vishwakarma  - Infogain - 31/01/2016
 * 
 * Method to insert data submitted in School_Access_Rule table.
 * Request: Contains feature id, Array of checked values and unchecked values
 * Response: returns the success message
 */
router.post('/save/:school_id/:id/:finalCheckValueArr/:finalCheckValueArr2', function(req, res)
{
	var id = req.params.id;
	var school_id=req.params.school_id;
	var array = [];
	array = req.params.finalCheckValueArr;
	var array2 = [];
	array2 = req.params.finalCheckValueArr2; // array of checked checkboxes
	School_Access_Rules.remove({
		'S_GroupID' : school_id,
		'Feature_id' : id
	}, function(err, removed)
	{
		// if no error, your models are removed
		if (err)
			console.log(err);
		else
			console.log(removed);
	});
	var RoleArray = array.split(',');
	for (var i = 0; i <= RoleArray.length - 1; i++)
	{
		var value = RoleArray[i];
		if (value)
		{
			var no = value.split('~');
			new School_Access_Rules({
				S_GroupID : school_id,
				Feature_id : id,
				Action_ID : no[0],
				S_Role_ID : no[1],
				Access : no[2],
				T_Role_ID : null,
				Remarks : "For 1 way "
			}).save(function(err)
			{
				if (err)
					console.log(err);
			});
			
		}
	}
	if(array2!=null){
		var RoleArray2 = array2.split(',');
		for (var i = 0; i <= RoleArray2.length - 1; i++)
		{
			var value2 = RoleArray2[i];
			if (value2)
			{
				var data = value2.split('~');
				new School_Access_Rules({
					S_GroupID : school_id,
					Feature_id : id,
					Action_ID : data[0],
					S_Role_ID : data[1],
					Access : data[3],
					T_Role_ID : data[2],
					Remarks : "For 2 way "
				}).save(function(err)
				{
					if (err)
						console.log(err);
					
				});
			}
		}
	}
	res.json("Data Inserted");
});


/* Rights Management Module Development
 * 
 * Abhishek Arora - Infogain - 31/01/2016
 * 
 * Method to render all data from School_Access_Rule table in JSON format ONLY.
 * Request: Contains role id
 * Response: returns array of features and corresponding actions
 */
router.get('/roles/:school_id/:role_id', function(req, res)
{
	pool.getConnection(function(err, connection)
	{
		if (err)
			res.json(err);
		else
		{
			var role_id = req.params.role_id;
			var school_id=req.params.school_id;
			var fetchroles = 'Select role_id,role_name from role_master where role_id=' + role_id;
			connection.query(fetchroles, function(err, prole)
			{
				if (err)
					res.json(err);
				else
				{
					School_Access_Rules.find({
						S_GroupID :school_id ,
						S_Role_ID : role_id,
						Access : "Yes"
					}, function(err, srule)
					{
						if (err)
							res.json(err);
						else
						{
							pool.getConnection(function(err, connection)
							{
								if (err)
									res.json(err);
								else
								{
									if (srule.length == 0)
									{
										res.json(err);
									}
									else
									{
										function bean()
										{
											var featureList;
											var actionList;
											var targetroleList;
											var typeList;
											var countType;
											var countFeat;
											var countAct;
											var countType;
											var countTrole;
											var addFeature;
											var addAction;
											var addTrole;
											var renderEJS123;
										}
										;
										var data = new bean();
										data.featureList = [];
										data.actionList = [];
										data.targetroleList = [];
										data.typeList = [];
										data.countFeat = 0;
										data.countAct = 0;
										data.countTrole = 0;
										data.countType = 0;
										data.addTrole = function(trole)
										{
											data.targetroleList[data.countTrole] = trole;
											if (data.countTrole === srule.length - 1)
											{
												isTroleComplete = true;
												data.renderEJS123();
											}
											data.countTrole++;
										};
										data.addFeature = function(feature)
										{
											data.featureList[data.countFeat] = feature;
											if (data.countFeat === srule.length - 1)
											{
												isFeatureComplete = true;
												data.renderEJS123();
											}
											data.countFeat++;
										};
										data.addAction = function(action, type)
										{
											data.typeList[data.countType] = type;
											data.actionList[data.countAct] = action;
											if (data.countAct === srule.length - 1)
											{
												isActionComplete = true;
												data.renderEJS123();
											}
											data.countAct++;
											data.countType++;
										};
										data.renderEJS123 = function()
										{
											var farr = [];
											var aarr = [];
											var srr = [];
											var trr = [];
											var j = 0;
											var i = 0;
											var k = 0;
											var l = 0;
											if (isFeatureComplete && isActionComplete)
											{
												data.featureList.forEach(function(flist)
												{
													farr[i] = flist;
													i++;
												});
												data.actionList.forEach(function(alist)
												{
													aarr[j] = alist;
													j++
												});
												data.targetroleList.forEach(function(rlist)
												{
													srr[k] = rlist;
													k++;
												});
												data.typeList.forEach(function(tlist)
												{
													trr[l] = tlist;
													l++;
												});
												srule.forEach(function(sr)
												{
													srr[k] = sr;
													k++
												});
												res.json({
													"prole" : prole,
													"featureList" : farr,
													"actionList" : aarr,
													"targetroleList" : srr
												});
											}
										};
										var isFeatureComplete = false;
										var isActionComplete = false;
										var isTroleComplete = false;
										if (srule.length)
										{
											for (var i = 0; i < srule.length; i++)
											{
												var feature_id = srule[i].Feature_id;
												var action_id = srule[i].Action_ID;
												var trole_id = srule[i].T_Role_ID;
												var way = srule[i].Remarks;
												var fetchfeatures = 'Select feature_id,feature_name from feature_master where feature_id='
													+ feature_id;
												connection.query(fetchfeatures, function(err, features)
												{
													if (err)
														res.json(err);
													else
													{
														features.forEach(function(feature)
														{
															data.addFeature(feature.feature_name);
														});
													}
												});
												if (trole_id === null)
												{
													data.addTrole("Null");
												}
												else
												{
													var fetchtargetrole = 'Select role_id,role_name from role_master where role_id=' + trole_id;
													connection.query(fetchtargetrole, function(err, troles)
													{
														if (err)
															res.json(err);
														else
														{
															troles.forEach(function(trole)
															{
																data.addTrole(trole.role_name);
															});
														}
													});
												}
												var fetchactions = 'Select Action_id,Title from feature_actions where feature_id=' + feature_id
													+ ' And Action_id=' + action_id;
												connection.query(fetchactions, function(err, actions)
												{
													if (err)
													{
														res.render('Error', {
															title : 'Error occurred while fetching roles'
														});
													}
													else
													{
														actions.forEach(function(action)
														{
															data.addAction(action.Title, action.Action_Type);
														});
													}
												});
											}
										}
									}
								}
								connection.release();
							});
						}
					});
				}
			});
		}
		connection.release();
	});
});

/* Rights Management Module Development
 * 
 * Payal Vishwakaram - Infogain - 31/01/2016
 * 
 * Method to fetch the already exixting data from School_Access_rules table and show the checked values
 * Request: Contains school id, feature id
 * Response: returns array checked values for 1 way and 2 way table
 */
router.get('/mongo/:school_id/:feature_id', function(req, res)
{
	var variable = [];
	var featureId = req.params.feature_id;
	var schoolId= req.params.school_id;
	School_Access_Rules.find({
		Feature_id : featureId,
		S_GroupID : schoolId
	}, function(err, doc)
	{
		if (err)
			res.json(err);
		else
		{
			var obj = JSON.stringify(doc);
			var arry = [];
			var exjson = doc;
			var i = 0;
			var k = 0;
			var arry = [];
			var arry1 = [];
			doc.forEach(function(feature11)
			{
				if (feature11.Remarks == "For 1 way " && feature11.Access == "Yes")
				{
					arry[i] = feature11.Action_ID + "~" + feature11.S_Role_ID;
					i++;
				}
				else if (feature11.Remarks == "For 2 way " && feature11.Access == "Yes")
				{
					arry1[k] = feature11.Action_ID + "~" + feature11.S_Role_ID + "~" + feature11.T_Role_ID;
					k++;
				}
			});
			res.json({
				"forOneWay" : arry,
				"forTwoWay" : arry1
			});
		}
	});

});

