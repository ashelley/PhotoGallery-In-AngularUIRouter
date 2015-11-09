var photosGallery = angular.module('photosGallery', ['ui.router']);

photosGallery.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl: 'partials/home.html'
	})
	.state('photos',{
		url:'/photos',
		templateUrl: 'partials/photos.html'
	})
	.state('about',{
		url:'/about',
		templateUrl: 'partials/about.html'
	})
	
});