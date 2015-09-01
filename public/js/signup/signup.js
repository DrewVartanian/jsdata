'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	});
});

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {
  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

  $scope.signup = {
    username: null,
    password: null
  };

  $scope.sendSignup = function(){
    console.log($scope.signup);
    User.create($scope.signup)
    .then(function(){
      console.log('created user');
      $state.go('main')
    });
  };

});