var photosGallery = angular.module('photosGallery', ['ui.router']);

photosGallery.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
	.state('content',{
		url:'/',
		views:{
			"":{templateUrl: 'partials/content.html'},
			"header@content":{templateUrl: 'partials/header.html'}
		}
		
	})
	.state('content.home',{
		url:'home',
		views:{
			"body@content" :{templateUrl: 'partials/home.html'}
		}
		
	})
	.state('content.photos',{
		url:'photos',
		views: {
			"body@content": {templateUrl: 'partials/photos.html'}
		}
		
	})
	.state('content.about',{
		url:'about',
		views: {
			"body@content": {templateUrl: 'partials/about.html'}	
		}		
	})
	
});