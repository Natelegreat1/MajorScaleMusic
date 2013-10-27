function go()
{
	var title = document.getElementById("song_title");
	var artist = document.getElementById("song_artist");
	var album = document.getElementById("song_album");

	var state=document.getElementById("song_status");
	state.innerHTML="NOW PLAYING";

	title.innerHTML="It's Always Sunny (theme)";
	artist.innerHTML="Heinz Kiessling";
	album.innerHTML="Temptation Sensation";
}

function stop()
{
	var state=document.getElementById("song_status");
	state.innerHTML="PAUSED";
}

function timeToRegister(){
	window.location.href= 'register.html';
}

function copyToClipboard()
{
	var name = document.getElementById("song_title").textContent || document.getElementById("song_title").innerText;
	var artist = document.getElementById("song_artist").textContent || document.getElementById("song_artist").innerText;
	var album = document.getElementById("song_album").textContent || document.getElementById("song_album").innerText;

	var popup = document.getElementById('dialog-message');
	popup.id = 'dialog-message';
	popup.title = 'Copy to Clipboard';

	popup.innerText = "Copy to clipboard: ⌘ + C";
	popup.width = "50%";
	var textbox = document.createElement('input');
	textbox.type = "text";
	textbox.value = name + " by " + artist + " ( " + album + " )";
	textbox.focus();
	popup.appendChild(textbox);
	textbox.select();

	$( '#dialog-message' ).dialog({
        modal: true,
        buttons: {
        	Google: function() {
        		var url = "http://www.google.com/search?q=" + name + "+" + artist + "+" + album;
        		var google = window.open(url, '_blank',"menubar=0, status=0", "false");
  				google.focus();

        		$( this ).dialog( "close" );
          	},
          	Ok: function() {
            	$( this ).dialog( "close" );
          	}
        }
    });

}
	// var OSName="Unknown OS";
	// 	if (navigator.appVersion.indexOf("Mac")!=-1){
	// 			window.prompt ("Copy to clipboard: ⌘ + C, Enter", name + " by " + artist_album);
	// 			OSName="MacOS";
	// 	}else{ 
	// 		window.prompt ("Copy to clipboard: Ctrl + C, Enter", name + " by " + artist_album);
	// 		// if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	// 		// if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	// 		// if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	// 	}

   	// var mydiv = document.createElement('div'); 
   	
   	// mydiv.zindex = 1000; 
   	// mydiv.position = 'absolute'; 
   	// mydiv.top = 0; 

   	// var mydiv = document.getElementById("song_title");
    // mydiv.appendChild(document.createTextNode("ARTIST - ALBUM"));

function insertDay()
{
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	var n = weekday[d.getDay()];

    var cur_week = document.getElementById("current_week");
    cur_week.innerText = n;
}

function emptyCheck(username, first, last, email, email_conf, postal, terms, dob)
{
	//EMPTY FIELDS//
	if (username.value.length == 0){
		console.log(">>>Missing username");
		username.focus();
		return false;
	}
	if (first_name.value.length == 0){
		console.log(">>>Missing first name");
		first_name.focus();
		return false;
	}
	if (last_name.value.length == 0){
		console.log(">>>Missing last name");
		last_name.focus();
		return false;
	}
	if (email.value.length == 0){
		console.log(">>>Missing email");
		email.focus();
		return false;
	}
	if (email_conf.value.length == 0){
		console.log(">>>Duplicate email missing");
		email_conf.focus();
		return false;
	}

	if (!terms.checked){
		console.log(">>>Please accept terms");
		return false;
	}

	return true;
}

function validateInfo(email, email_conf, phone, postal)
{
	//TEXT VALIDATIONS//
	var emailExpression = /^[\w\.]{1,}[@]{1}[\w]{1,}\.[\w]{1,}$/	
	if(!emailExpression.test(email.value)){
		console.log(">>>Invalid email!");
		email.focus();
		return false;
	}

	if(!emailExpression.test(email_conf.value)){
		console.log(">>>Invalid email confirmation!");
		email_conf.focus();
		return false;
	}

	if (email.value !== email_conf.value){
		console.log(">>>Emails don't match!");
		return false;
	} 
	
	var phoneExpression = /^\d{3}\-\d{3}\-\d{4}$/;	
	if(phone.value.length >= 8 && !phoneExpression.test(phone.value)){
		console.log(">>>Invalid phone!");
		phone.focus();
		return false;
	}
		
	var postalExpression = /^[A-Z]{1}\d{1}[A-Z]{1}[ ]\d{1}[A-Z]{1}\d{1}$/;	
	if(postal.value.length != 0 && !postalExpression.test(postal.value)){
		console.log(">>>Invalid postal code!");
		postal.focus();
		return false;
	}

	return true;
}

function register()
{
	var username = document.getElementById('username');
	var first_name = document.getElementById('first_name');
	var middle_name = document.getElementById('middle_name');
	var last_name = document.getElementById('last_name');
	var email = document.getElementById('email');
	var email_conf = document.getElementById('confirm_email');
	var country = document.getElementById('countries');
	var postalCode = document.getElementById('postal');
	var phone = document.getElementById('phone'); 
	var gender = document.getElementById('gender');
	var dob = document.getElementById('datepicker');
	var terms = document.getElementById('terms');
	var news = document.getElementById('news');
	
	if (!emptyCheck(username, first_name, last_name, email, email_conf, postal, terms, dob)){
		console.log(">>>Empty check(s) failed");
		return false;
	}
	console.log(">Important fields are entered");


 	if(!validateInfo(email, email_conf, phone, postalCode)){
 		console.log(">>>Important fields are invalid");
 		return false;
 	}
 	console.log(">Important fields are valid");
	
	

	//FORM COMPILATION//
 // 	var head = document.createElement("p");
	// var headText = document.createTextNode("Dear " + name.value + ",");
	// head.appendChild(headText);		
 // 	form.appendChild(head);
	
	// var thankYou = document.createElement("p");
	// var thankYouText = document.createTextNode("Thank you for registering to this website. A copy of this email has been sent to:")
	// thankYou.appendChild(thankYouText);
 // 	form.appendChild(thankYou);

	// var em = document.createElement("a");
	// var emText = document.createTextNode(email.value + ".");
	// em.href =  "mailto:" + email.value;
	// em.appendChild(emText);
	// form.appendChild(em);
	 
	// var callMail = document.createElement("p");
	// var callText = document.createTextNode("We will also try to call you on your cellphone (" + phone.value + ") and send mail to your mailbox (" + postalCode.value + ")." );
	// callMail.appendChild(callText);
 // 	form.appendChild(callMail);
	
	
	// form.style.fontStyle='italic'; //make the form italics

	return true;
}