var myApp = angular.module('myApp', ['ui.router'])
//var portfolioCtrl = myApp.controller('portfolioCtrl', function($scope, $http) {

.config(function($stateProvider) {
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController',
		})
		.state('projects',{
			url:'/projects/',
			templateUrl:'templates/projects.html',
			controller: 'ProjectsController',
		})
		.state('about', {
			url: '/about/',
			templateUrl: 'templates/about.html',
			controller: 'AboutController',
		})
		.state('contactme', {
			url:'/contactme/',
			templateUrl: 'templates/contactme.html',
			controller: 'ContactmeController',
		})
})
.controller('HomeController', function($scope) {
	$scope.course="Info 343"
	$scope.blogTopic="Technology Design"
	$scope.blogDescription="Here's a blog I've been working on with some articles and responses about design and technology!"
	$scope.blogURL="https://randimendel.wordpress.com/";
})
.controller('ProjectsController',function($scope){
	$scope.projectsIntro="These are the projects I have created for my info 343 course! I can't wait to continue adding to my experience and my portfolio as I continue any work in web programming!";
	$scope.course = "Info 343A: Client-Side Web Development"
	$scope.projects = [];
	$.getJSON('data/projectInfo.json',function(data){
		console.log(data);
		$scope.projects.push(data);
	});

	console.log($scope.projects[0]);
	
})
.controller('AboutController',function($scope){
	$scope.myphotoURL="data:image/jpeg;base64,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";
	$scope.myname="Randi Mendel";
	$scope.about="I am in informatics major at the University of Washington, and this page is my portfolio for my very first web programming class.  I had no previous experience in HTML, Javascript, or really any other languages besides the java I learned in the CSE series, so this class has been and amazingly enlightening experience for me.  I have truly enjoyed the practicality of this course, even dispite the many challenges it has proposed, and the struggle I have had with aspects of each project"
})
.controller('ContactmeController',function($scope){
	$scope.myname="Randi Mendel";
	$scope.phonenumber="(425)372-6066";
	$scope.email="randi.mendel@yahoo.com";
	$scope.uwemail="rlmendel@uw.edu";

})