var photosGallery = angular.module('photosGallery', ['ui.router']);

photosGallery.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
	.state('content',{
		url:'/',
		abstract: true,
		data:{
			user: "user",
			password: "1234"
		},
		views:{
			"":{templateUrl: 'partials/content.html'},
			"header@content":{
				templateUrl: 'partials/header.html',
				controller: function($scope, $rootScope, $state){
					$scope.logoff = function(){
						$rootScope.user = null;
					}
				}
			}
		}
		
	})
	.state('content.login',{
		url:'login',
		data:{
			loginError: 'User or password incorrect.'
		},
		views:{
			"body@content" :{
				templateUrl: 'partials/login.html',
				controller: function($scope, $rootScope, $state){
					$scope.login = function(user, password, valid){
						if(!valid){
							return;
						}
						
						if($state.current.data.user === user && $state.current.data.password === password){
							$rootScope.user = {
								name: $state.current.data.user
							}
							
							// Or Inherited
							
							/*$rootScope.user = {
								name: $state.$current.parent.data.user
							};*/
							
							$state.go('content.home');							
						}else{
							$scope.message = $state.current.data.loginError;
						}
						
					}
				}
			}
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