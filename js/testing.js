function addMedia(){
 	var element = document.getElementById("now_playing");

 	if (element){
		element.src = 'media/sunny.mp3';
		element.type="audio/mp3";
		element.parentNode.load();
	}

 	element = document.getElementById("test_video");
 	 if (element){
		element.src = 'media/Lazy Sunday.mp4';
		element.type="video/mp4";
		element.parentNode.load();
	}

	element = document.getElementById("promoVid");
 	 if (element){
		element.src = 'media/MSM.MOV';
		element.type="video/mov";
		element.parentNode.load();
	}
	element = document.getElementById("promoVidHD");
 	 if (element){
		element.src = 'media/msm.mp4';
		element.type="video/mp4";
		element.parentNode.load();
	}
}