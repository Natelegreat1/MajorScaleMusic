<?php 
	session_start(); //start or resume the sessions

	if(isset($_SESSION['login_user'])){ //if the session was never logged out... 
		if(isset($_REQUEST['ch']) && $_REQUEST['ch'] == 'logout'){ //...check if there was a logout request...
			logout(); 
		}else{
			header('Location:msm.php');	///...otherwise return to log page immediately!
		}
	}else{ //no session existed & not known to have ever logged in
		login(); //try logging in       
	
	}
	
	function login(){
    alert();
		$validUsername = "admin"; //this is the valid username
		$validPassword = "admin"; //this is the valid password
		$loginError = "Invalid username/password combination!"; //login error message

		if(isset($_REQUEST['ch']) && $_REQUEST['ch'] == 'login'){ //check if there was a login request						
			if((strcmp($_REQUEST['user'], $validUsername) == 0) && (strcmp($_REQUEST['pw'], $validPassword) == 0)){ //check if login info was correct
				$_SESSION['login_user'] = 1; //start a new session with id 1
		
				if(isset($_SESSION['login_user'])){ //if the session was set properly...
					header('Location:msm.php'); 	//...go to index/log page
				}
			}else{ //invalid login info entered
				unset($_POST); //clear the POST array
				$_SESSION['login_error'] = $loginError; //set the error message		
			}
		}
	}
			
	function logout(){
		unset($_SESSION['login_user']); //unset the user session
		header('Location:login.php'); //go back to the login screen
	}
?>