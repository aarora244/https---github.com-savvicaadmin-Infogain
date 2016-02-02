angular.module('scomodule').controller('actioncontroller', function($scope, $routeParams, $http)
{
	$scope.feature_id = $routeParams.feature_id;
	$scope.school_id=$routeParams.school_id;
	$scope.flag=false;
	
	/*Method take feature_id and school id as parameter and bind the data and resData with rightPanel page
	 * 
	 */
	$scope.getActionData = function()
	{
		if ($routeParams.feature_id)
		{
			$http.get("http://localhost:3000/rules/action/"
				+$routeParams.school_id+"/"+$routeParams.feature_id).then(function(response) //API method consumed
			{
				$scope.data = response.data;
					for(var i=0;i<$scope.data.action.length;i++){
						if($scope.data.action[i].Action_Type=='1 Way'){
						 $scope.flag=true;
						 break;
						}
					}
				if ($scope.data != null)
				{
					$http.get("http://localhost:3000/rules/mongo/"
						+$routeParams.school_id+"/" + $routeParams.feature_id).then(function(res) //Another API method consumed on success of first method
					{
						$scope.resData = res.data;
						if ($scope.data != null)
						{
							var text = JSON.stringify(res.data)
							var obj = JSON.parse(text);
							for (var i = 0; i <= obj.forOneWay.length - 1; i++)
							{
								$('input:checkbox[value="' + obj.forOneWay[i] + '"]').prop('checked', true);
							}
							for (var i = 0; i <= obj.forTwoWay.length - 1; i++)
							{
								$('input:checkbox[value="' + obj.forTwoWay[i] + '"]').prop('checked', true);
							}
						}
					})
				}
			}, function()
			{
				alert("Error in receiving data");
			});

		}
	}
});
