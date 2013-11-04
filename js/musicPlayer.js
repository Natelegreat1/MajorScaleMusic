function go()
{
	var title = document.getElementById("song_title");
	var artist = document.getElementById("song_artist");
	var album = document.getElementById("song_album");

	var state=document.getElementById("song_status");
	var playButton = document.createElement('img');
	playButton.src = 'media/play.svg';
	playButton.height = 15;

	state.innerHTML = "";
	state.appendChild(playButton);
	state.appendChild(document.createTextNode(" NOW PLAYING"));

	title.innerHTML="It's Always Sunny (theme)";
	artist.innerHTML="Heinz Kiessling";
	album.innerHTML="Temptation Sensation (1969)";
}

function stop()
{
	var state=document.getElementById("song_status");
	var pauseButton = document.createElement('img');
	pauseButton.src = 'media/pause.png';
	pauseButton.height = 15;
	
	state.innerHTML = "";
	state.appendChild(pauseButton);
	state.appendChild(document.createTextNode(" PAUSED"));
}

function playSong(song)
{
	window.location.href= 'song.html';

	var title=document.getElementById("song_title");
	title.appendChild(document.createTextNode(song.innerText));
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
        		stop();
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
