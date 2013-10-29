function pageLoaded()
{
	var accountMessage = document.getElementById("account_message");
	if (typeof(Storage)!=="undefined")
	{
	    if (sessionStorage.login){
	    	var la = document.getElementById("newUserAccount");

			var logoutButton = document.createElement('button');
			logoutButton.appendChild(document.createTextNode("Logout"));
			logoutButton.type = 'button';
			logoutButton.id = 'logout'; 
			logoutButton.onclick = logout;

			toggleVisibility(la);

	      	accountMessage.innerHTML="Welcome back, " + sessionStorage.login + "<br/";
	      	document.getElementById("account").appendChild(logoutButton);

	    }
	}else
	{
		accountMessage.innerHTML="Sorry, your browser does not support web storage...";
	}

	insertDay(); //update the featured songs date to today
}

function logout()
{
	var la = document.getElementById("newUserAccount");
	var message = document.getElementById("account_message");

	sessionStorage.clear();
	localStorage.clear();
	
	location.reload(true);

	toggleVisibility(la);

	message.innerHTML= "";

}

function loginClick()
{
	var message = document.getElementById("account_message");
	var nua = document.getElementById("newUserAccount");
	var la = document.getElementById("loginAccount");

	toggleVisibility(nua);
	toggleVisibility(la);

	message.innerHTML= "";
}

function loginCancelClick()
{
	var message = document.getElementById("account_message");
	var nua = document.getElementById("newUserAccount");
	var a = document.getElementById("loginAccount");
	var u = document.getElementById("username_login").value;
	var p = document.getElementById("password_login").value;
	
	toggleVisibility(a);
	toggleVisibility(nua);

	u.value = "";
	p.value = "";

	message.innerHTML= "";
}

function toggleVisibility(element){
	element.classList.toggle("show");
	element.classList.toggle("hide");
}

function login()
{
	var username = "abc";
	var password = "123";

	var u = document.getElementById("username_login").value;
	var p = document.getElementById("password_login").value;
	var message = document.getElementById("account_message");
	
	if (username == u && password == p){
		console.log("login info match!")
	    message.innerHTML= "Welcome " + username;

		var a = document.getElementById("loginAccount");
		var nua = document.getElementById("newUserAccount");
		toggleVisibility(nua);

		toggleVisibility(a);

	    if(typeof(Storage)!=="undefined"){
		    if (!sessionStorage.login){
		      sessionStorage.login="Nathaniel Blumer";
	        }
		}  
	}else{
		message.innerHTML = "Invalid. Try again";
	}

    
}


function registerClick()
{
	window.location.href= 'register.html';
}


function insertDay()
{
	var date = new Date();
	var weekday = new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	var month = new Array(12);
	month[0]="January";
	month[1]="February";
	month[2]="March";
	month[3]="April";
	month[4]="May";
	month[5]="June";
	month[6]="July";
	month[7]="August";
	month[8]="September";
	month[9]="October";
	month[10]="November";
	month[11]="December";

	var day = weekday[date.getDay()];
	var month = month[date.getMonth()];

    var cur_week = document.getElementById("current_week");
    cur_week.innerText = day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
    cur_week.style.fontStyle = 'italic';
}