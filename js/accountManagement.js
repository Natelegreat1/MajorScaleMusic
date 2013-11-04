function displayAccount(){
	var current = document.getElementById('display_username');
	current.innerText = 'Natelegreat';

	current = document.getElementById('display_firstname');
	current.innerText = 'Nathaniel';

	current = document.getElementById('display_lastname');
	current.innerText = 'Blumer';

	current = document.getElementById('display_country');
	current.innerText = 'Canada';

	current = document.getElementById('display_postalcode');
	current.innerText = 'H3G1X9';

	current = document.getElementById('display_email');
	current.innerText = 'Nathanielblumer@gmail.com';

	current = document.getElementById('display_gender');
	current.innerText = 'Male';

	current = document.getElementById('display_dob');
	current.innerText = 'August 11, 1990';

	current = document.getElementById('display_phone');
	current.innerText = '514.975.6283';

	addPreferences();
}

function addPreferences(){
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

	genres.sort();

	var genreList = document.getElementById('display_genres');
	
	for (i=0; i<genres.length; i++){

		var checkbox = document.createElement('input');
		checkbox.value = genres[i];
		checkbox.className = 'profile_info';
		checkbox.type='checkbox';
		checkbox.checked='checked';

		genreList.appendChild(checkbox);
		genreList.appendChild(document.createTextNode(checkbox.value));
		if (i%2 == 0){
			checkbox.style.textIndent="15px";
		}else{
			genreList.appendChild(document.createElement('br'));
		}
	}
}