angular.module('appModule',['ngRoute', 'ui.bootstrap'])
.config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
			template : '<home></home>'
		})
		.when ('/about', {
			template : '<about></about>'
		})
		.when ('/projects', {
			template : '<projects></projects>'
		})
//		.when ('/contact', {
//			template : '<contact></contact>'
//		})
		.when ('/resume', {
			template : '<resume></resume>'
		})
		.when('/error', {
			template: '<error></error>'
		})
		.otherwise ({
			template : '<error></error>'
		})
})
