const playAudio = function(divElement){
	if(divElement !=null)
	{	
		divElement.addEventListener('playAudio', function (e) {
	    	$("#soundtrack").attr("src", e.detail);
			document.getElementById('soundtrack').play();
		});
	}
}
