var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });  
  
  $routeProvider.when('/transaction', {
	    templateUrl: 'transaction.html',
	    controller: 'TransactionController'
	  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});

app.factory("AuthenticationService", function($location,$http) {
  return {
    login: function(credentials,http) {
    	
    	/*$http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            alert(data.id);
        });*/
    	
    	// Simple POST request example (passing data) :
    	$http.post('http://localhost:8080/Spring4-1/login.request', 
    			{
	    		"username":credentials.username,
	    		"password":credentials.password
	    		}
    	  ).
    	  success(function(data, status, headers, config) {
    	    // this callback will be called asynchronously
    	    // when the response is available
    		  alert(data);
    		  if(data === false)
			  {
    			  alert("email must be 'rohit.lohiya@globallogic.com', password must be 'lohiya@1988'");
    			  $location.path('/login');
			  }
    		  else
			  {
    			  $location.path('/transaction');
			  }
    		  
    	  }).
    	  error(function(data, status, headers, config) {
    	    // called asynchronously if an error occurs
    	    // or server returns response with an error status.
    	  });
    	
    	
      /*if (credentials.username !== "rohit.lohiya@globallogic.com" || credentials.password !== "lohiya@1988") {
        alert("email must be 'rohit.lohiya@globallogic.com', password must be 'lohiya@1988'");
      } else {
        //$location.path('/home');
    	  $location.path('/transaction');
      }*/
    },
    logout: function() {
      $location.path('/login');
    }
  };
});

app.controller("LoginController", function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "rohit.lohiya@globallogic.com", password: "lohiya@1988" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  }
});

app.controller("TransactionController", function($scope, AuthenticationService) {

  $scope.loggedInUser = "rohit.lohiya@globallogic.com";
  
  $scope.logout = function() {
    AuthenticationService.logout();
  };
});

app.directive("showsMessageWhenHovered", function() {
  return {
    restrict: "A", // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseleave", function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
});
