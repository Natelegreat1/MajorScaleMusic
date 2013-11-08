function playPromo(){
	var promo = document.getElementById('promoVid');
		promo.src = 'media/MSM.MOV';
		promo.controls=true;
		promo.autoplay=true;
}

function preregForm(){
	var promo = document.getElementById('promoVid');
	promo.parentNode.removeChild(promo);
}

function buildForm()
{
	var months = new Array(12);
		months[0]="January";
		months[1]="February";
		months[2]="March";
		months[3]="April";
		months[4]="May";
		months[5]="June";
		months[6]="July";
		months[7]="August";
		months[8]="September";
		months[9]="October";
		months[10]="November";
		months[11]="December";

	var day = document.getElementById("dob_day");
	var month = document.getElementById("dob_month");
	var year = document.getElementById("dob_year");

	var i;
	var date = new Date();
	for (i=1; i <= 31;i++){
		var opt = document.createElement("option");
		opt.value = i;
		opt.appendChild(document.createTextNode(String(i)));

		day.appendChild(opt);
	}

	for (i=0; i < months.length;i++){
		var opt = document.createElement("option");
		opt.value = months[i];
		opt.appendChild(document.createTextNode(months[i]));

		month.appendChild(opt);
	}

	for (i=1900; i <= date.getFullYear();i++){
		var opt = document.createElement("option");
		opt.value = i;
		opt.appendChild(document.createTextNode(String(i)));

		if (i==1990){
			opt.selected = "selected";
		}
		year.appendChild(opt);
	}

	var questions = new Array(3);
		questions[0]="What is your mother's maiden name?";
		questions[1]="What is your postal code?";
		questions[2]="What is your favourite color?";

	var sec_questions = document.getElementById("security_questions");
	for (i=0; i < questions.length; i++){
		var opt = document.createElement("option");
		opt.value = questions[i];
		opt.appendChild(document.createTextNode(questions[i]));

		sec_questions.appendChild(opt);
	}
}

function mobileToQuestion(){
	var phone = document.getElementById("securityNumber");
	var questions = document.getElementById("securityQuestion");

	toggleVisibility(phone);
	toggleVisibility(questions);
}

function switchAccountChoice(){
	var u = document.getElementById("userChoice");
	var a = document.getElementById("artistChoice");

	toggleRegistrationForm(u);
	toggleRegistrationForm(a);
}

function toggleRegistrationForm(element){
	element.classList.toggle("selected");
	element.classList.toggle("unselected");
}

function emptyCheck()
{
	var username = document.getElementById('reg_username');
	var first_name = document.getElementById('reg_first_name');
	var middle_name = document.getElementById('reg_middle_name');
	var last_name = document.getElementById('reg_last_name');
	var email = document.getElementById('reg_email');
	var email_conf = document.getElementById('reg_email_confirm');
	var country = document.getElementById('countries');
	var postalCode = document.getElementById('reg_postal');
	var phone = document.getElementById('reg_phone'); 
	var gender = document.getElementById('greg_ender');
	var dob = document.getElementById('datepicker');
	var terms = document.getElementById('reg_terms');

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

function validateInfo()
{
	var username = document.getElementById('reg_username');
	var first_name = document.getElementById('reg_first_name');
	var middle_name = document.getElementById('reg_middle_name');
	var last_name = document.getElementById('reg_last_name');
	var email = document.getElementById('reg_email');
	var email_conf = document.getElementById('reg_email_confirm');
	var country = document.getElementById('countries');
	var postalCode = document.getElementById('reg_postal');
	var phone = document.getElementById('reg_phone'); 
	var gender = document.getElementById('greg_ender');
	var dob = document.getElementById('datepicker');
	var terms = document.getElementById('reg_terms');

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
	if (!emptyCheck())
	{
		console.log(">>>Empty check(s) failed");
		return false;
	}
	console.log(">Important fields are entered");


 	if(!validateInfo())
 	{
 		console.log(">>>Important fields are invalid");
 		return false;
 	}
 	console.log(">Important fields are valid");
	
	
	return true;
}