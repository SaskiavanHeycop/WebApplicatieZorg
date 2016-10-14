$(document).ready(function () {
	var obj = document.createElement("audio");
        obj.src="https://kahimyang.com/resources/sound/click.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;
		
	$("#vink").click(function() {
		$('#overlay').show();
		$('#olimg').show();
		obj.play();
		setTimeout(function(){
			$('#overlay').hide();
			window.open("ontbijten.html","_self")
		},3000);
});
	
});