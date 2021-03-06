var photosGallery = angular.module('photosGallery', ['ui.router']);

photosGallery.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
	.state('content',{
		url:'/',
		abstract: true,
		views:{
			"":{templateUrl: 'partials/content.html'},
			"header@content":{templateUrl: 'partials/header.html'}
		}
		
	})
	.state('content.home',{
		url:'home',
		views:{
			"body@content" :{
				templateUrl: 'partials/home.html',
				controller: 'HomeController',
				controllerAs: 'ctrHome'
			}
		}
		
	})
	.state('content.photos',{
		url:'photos',
		abstract: true,
		views: {
			"body@content": {
				templateUrl: 'partials/photos.html',
				controller: 'PhotoController',
				controllerAs: 'ctrPhoto'
			}
		}
		
	})
	.state('content.photos.list',{
		url:'/list',
		templateUrl: 'partials/photos-list.html',
		controller: 'PhotoListController',
		controllerAs: 'ctrPhotoList'
	})
	.state('content.photos.detail',{
		url:'/detail/:id',
		templateUrl: 'partials/photos-detail.html',
		controller: 'PhotoDetailController',
		controllerAs: 'ctrPhotoDetail'
	})
	.state('content.photos.detail.comment',{
		url:'/comment?skip&limit',
		templateUrl: 'partials/photos-detail-comment.html',
		controller: 'PhotoCommentController',
		controllerAs: 'ctrPhotoComment'
	})
	.state('content.about',{
		url:'about',
		views: {
			"body@content": {templateUrl: 'partials/about.html'}	
		}		
	})
	
});