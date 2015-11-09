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
	.state('content.photos.list',{
		url:'/list',
		templateUrl: 'partials/photos-list.html'				
	})
	.state('content.photos.detail',{
		url:'/detail',
		templateUrl: 'partials/photos-detail.html'				
	})
	.state('content.photos.detail.comment',{
		url:'/comment',
		templateUrl: 'partials/photos-detail-comment.html'		
	})
	.state('content.about',{
		url:'about',
		views: {
			"body@content": {templateUrl: 'partials/about.html'}	
		}		
	})
	
});