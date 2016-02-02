angular.module('scomodule').controller('fetchModule', function($scope, $http)
{
	
	//This method exceute on the leftPanel page load and bind data with leftPanel page
	$scope.getModules = function()			
	{
		$scope.school_id=1;
		$http.get("http://localhost:3000/rules/"+$scope.school_id).then(function(response) //Api consumed 
		{
			$scope.data = response.data;
		}, function()
		{
			alert("Error in receiving data");
		});
	}

});