var myApp = angular.module('myApp', ['ui.router'])
//var portfolioCtrl = myApp.controller('portfolioCtrl', function($scope, $http) {


myApp.config(function($stateProvider) {
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'pages/home.html',
			controller: 'HomeController',
		})
		.state('projects',{
			url:'/projects/',
			templateUrl:'pages/projects.html',
			controller: 'ProjectsController',
		})
		.state('about', {
			url: '/about/',
			templateUrl: 'pages/about.html',
			controller: 'AboutController',
		})
})
.controller('HomeController', function($scope) {
	$scope.about="Randi Mendel";
})
.controller('ProjectsController',function($scope){

})
.controller('AboutController',function($scope){

})