'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll()
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope,Post,users,$stateParams, $state) {

	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	$scope.findPost = function(){
		console.log("searching for post: "+$stateParams.postId);
		Post.find($stateParams.postId).then(function(data){
			console.log(data);
			$scope.post = data;
			return data;
		});
	};
	$scope.findPost();
	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/
	$scope.deletePost = function(){
			console.log("deleting post: "+$stateParams.postId);
			Post.destroy($stateParams.postId).then(function(data){
				console.log(data);
				$state.go('main');
				return data;

			});
		};
	/*
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/
	$scope.editPost = function() {
		console.log("updating post: "+$stateParams.postId);
		Post.update($stateParams.postId, {}).then(function(data){
			console.log(data);
			return data;
		});
	};

})