//created my module for the view
var devApp = angular.module('devApp',['ngRoute']);
//configure routes
devApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

devApp.config(function($routeProvider){
    $routeProvider
    //route for home page
        .when('/home',{
            templateUrl:'pages/home.html',
            controller:'homecontroller'
        })
    //route for about page
        .when('/about',{
            templateUrl:'pages/about.html',
            controller:'aboutController'
        })
    //route for contact page
        .when('/contact',{
            templateUrl:'pages/contact.html',
            controller:'contactController'
        })
});

//created controller and injecting scope for the module
devApp.controller('maincontroller',function($scope){
    // message to display in the view
    $scope.message = "message for bhavana";
})
devApp.controller('homecontroller',function($scope){
    // message to display in the view
    $scope.message = "message for bhavana for home page swthrt";
})
devApp.controller('aboutController',function($scope){
    $scope.message="this is the about message in about page";
})

devApp.controller('contactController',function($scope){
    $scope.message="This is the contact message";
})