var app = angular.module("scomodule", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/action/:school_id/:feature_id", {		//Route defined for ngview content on the click of feature 
                templateUrl: "views/rightPanel.html",
                controller: "actioncontroller"
            })
            .otherwise({redirectTo:"/"});
    });