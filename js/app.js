$( document ).ready(function() {
  		// reference to my data at firebase 
	      var fbRef = new Firebase("https://road-tripper.firebaseio.com/");
	      // set up of authentication
	      var auth = new FirebaseSimpleLogin(fbRef, function(error, user) {
			  if (error) {
			    // an error occurred while attempting login
			    console.log(error);
			  } else if (user) {
			    // user authenticated with Firebase
			    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
			  } else {
			    
			  }
			});

	     
      });

auth.login('password', {
						  email: '<email@domain.com>',
						  password: '<password>',
						  rememberMe: true
						});

auth.changePassword(email, oldPassword, newPassword, function(error, success) {
			  if (!error) {
			    console.log('Password change successfully');
			  }
			});