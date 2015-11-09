photosGallery.controller('HomeController', ['$scope', '$state',
			function($scope, $state){
				this.message = 'Welcome to the Photo Gallery';
			}
]);

photosGallery.controller('PhotoController', ['$scope', '$state', 
			function($scope, $state){
			
				this.photos = [
					{ id: 0, title: 'Photo 1', description: 'description for photo 1', imageName: 'image1.JPG', comments:[
						{name: 'user1', comment: 'Nice'},
						{ name:'User2', comment:'Very good'}
					]},
					{ id: 1, title: 'Photo 2', description: 'description for photo 2', imageName: 'image2.JPG', comments:[
						{ name: 'user2', comment: 'Nice'},
						{ name:'User1', comment:'Very good'}
					]},
					{ id: 2, title: 'Photo 3', description: 'description for photo 3', imageName: 'image3.JPG', comments:[ 
						{name: 'user1', comment: 'Nice'}
					]},
					{ id: 3, title: 'Photo 4', description: 'description for photo 4', imageName: 'image4.JPG', comments:[
						{name: 'user1', comment: 'Nice'},
						{ name:'User2', comment:'Very good'},
						{ name:'User3', comment:'So so'}
					]}
				];
				
				this.pullData = function(){
					$scope.$$childTail.ctrPhotoList.photos = this.photos;
				}
			
			}
]);

photosGallery.controller('PhotoListController', ['$scope', '$state', 
			function($scope, $state){
				
				this.reading = false;
				this.photos = new Array();
				
				this.init = function(){
					this.reading = true;
					setTimeout(function(){
						$scope.$apply(function(){
							$scope.ctrPhotoList.getData();
						});
					}, 1500);
				}
				
				this.getData = function(){
					
					$scope.$parent.ctrPhoto.pullData();
				
					/*this.photos = $scope.$parent.ctrPhoto.photos;*/
					this.reading = false;
					
				}
			
			}
]);

photosGallery.controller('PhotoDetailController', ['$scope', '$state', '$stateParams', 
			function($scope, $state, $stateParams){
			
				var id = null;
				this.photo = null;
				this.init = function(){
					id = parseInt($stateParams.id);
					this.photo = $scope.ctrPhoto.photos[id];
				}
				
			}
]);