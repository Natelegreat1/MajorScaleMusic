function homepageLoaded()
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

			//console.log(sessionStorage.login);
			var profileLink = document.createElement("a");
			profileLink.id = 'userID';
			profileLink.href = 'profile.html';
			profileLink.appendChild(document.createTextNode(sessionStorage.login));
	   	 	accountMessage.appendChild(document.createTextNode("Welcome back, "));
	    	accountMessage.appendChild(profileLink);

	      	document.getElementById("account").appendChild(logoutButton);
	    }
	}else{
		accountMessage.innerHTML="Sorry, your browser does not support web storage...";
	}

	//window.addEventListener('resize', resizeWindow, false);

	insertDay(); //update the featured songs date to today
	displayFeaturedSongs();
	addGenres();
	//startMarquee();
}

function displayFeaturedSongs(){

	var vids = new Array();	
	var v1 = document.getElementById('feat_video1');
	var v2 = document.getElementById('feat_video2');
	var v3 = document.getElementById('feat_video3');
	var v4 = document.getElementById('feat_video4');
	var v5 = document.getElementById('feat_video5');

	vids.push(v1);
	vids.push(v2);
	vids.push(v3);
	vids.push(v4);
	vids.push(v5);

	var sources = new Array();
	var sr1 = document.createElement('source');
	var sr2 = document.createElement('source');
	var sr3 = document.createElement('source');
	var sr4 = document.createElement('source');
	var sr5 = document.createElement('source');

	sources.push(sr1);
	sources.push(sr2);
	sources.push(sr3);
	sources.push(sr4);
	sources.push(sr5);

	var i;
	for(i=0; i< vids.length; i++){
		var v = vids[i];
		var s = sources[i];
		v.innerText = 'Your browser does not support this audio format.';
		v.height = 150;
		v.poster="media/abstract_triangles.jpg";
		v.onclick = function() { 	playSong(this);		};

		s.id = String(i);
		s.src = 'media/Lazy Sunday.mp4';
		s.type= "video/mp4";

		v.appendChild(s);
		s.parentNode.load();
	}
}

function resizeWindow()
{
   var gameArea = document.getElementById('body');
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }
    
    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';
    
    var gameCanvas = document.getElementById('body');
    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;
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
		console.log("login info match!");

		var profileLink = document.createElement("a");
		profileLink.href = 'profile.html';
		profileLink.appendChild(document.createTextNode(username));
	    message.appendChild(document.createTextNode("Welcome "));
	    message.appendChild(profileLink);

		var a = document.getElementById("loginAccount");
		var nua = document.getElementById("newUserAccount");
		var lb = document.getElementById("loginButton");
		var cb = document.getElementById("cancelButton");
		var ls = document.getElementById("loginStart");
		var r = document.getElementById("register");

		toggleVisibility(nua);
		toggleVisibility(a);
		toggleVisibility(lb);
		toggleVisibility(cb);
		toggleVisibility(ls);
		toggleVisibility(r);

	    if(typeof(Storage)!=="undefined"){
		    if (!sessionStorage.login){
		      sessionStorage.login="Nathaniel Blumer";
	        }
		}  
	}else{
		message.innerHTML = "Invalid. Try again";
		u.value = "";
		p.value = "";
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
    cur_week.innerText =  "FEATURED SONGS : " + day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
    cur_week.style.fontStyle = 'italic';
}

function addGenres(){
	var i;
	var genres = new Array("Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge",
 "Hip-Hop","Jazz","Metal","New Age","Oldies","Other","Pop","R&B",
 "Rap","Reggae","Rock","Techno","Industrial","Alternative","Ska",
 "Death Metal","Soundtrack","Euro-Techno","Ambient",
 "Trip-Hop","Vocal","Jazz+Funk","Fusion","Trance","Classical",
 "Instrumental","Acid","House","Game","Sound Clip","Gospel",
 "Noise","AlternRock","Bass","Soul","Punk","Space","Meditative",
 "Instrumental Pop","Instrumental Rock","Ethnic","Gothic",
 "Darkwave","Techno-Industrial","Electronic","Pop-Folk",
 "Eurodance","Dream","Southern Rock","Comedy","Cult","Gangsta",
 "Top 40","Christian Rap","Pop/Funk","Jungle","Native American",
 "Cabaret","New Wave","Psychadelic","Rave","Showtunes","Trailer",
 "Lo-Fi","Tribal","Acid Punk","Acid Jazz","Polka","Retro",
 "Musical","Rock & Roll","Hard Rock","Folk","Folk-Rock",
 "National Folk","Swing","Fast Fusion","Latin","Revival",
 "Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock",
 "Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band",
 "Chorus","Easy Listening","Acoustic","Humour","Chanson",
 "Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus", "Satire","Slow Jam","Club","Tango","Samba",
 "Folklore","Ballad","Power Ballad","Rhythmic Soul","Freestyle",
 "Duet","Punk Rock","Drum Solo","Acapella","Euro-House","Dance Hall");


	var genreAreas = document.getElementsByClassName('genres');

	for (i=0; i< genreAreas.length; i++){
		genreAreas[i].appendChild(document.createTextNode(genres[i]));
	}

}

function startExtras(){
alert('called'); var m_title = document.getElementsByClassName('marq_title');
	var m_extras = document.getElementsByClassName('marq_extras');

	toggleVisibility(m_extras);
	m_extras.start();
}