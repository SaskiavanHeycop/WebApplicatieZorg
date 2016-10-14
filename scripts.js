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
			var dictionary = {	"Aankleden":"ontbijten.html",
								"Ontbijten":"tandenpoetsenochtend.html",
								"Tanden poetsen ochtend":"haardoen.html",
								"Haar doen":"tasinpakken.html",
								"Tas inpakken":"naarschool.html",
								"Naar school":"eindochtend.html",
								"Eind ochtend":"index.html",
								"Pyjama aantrekken":"tandenpoetsenavond.html",
								"Tanden poetsen avond":"naarbed.html",
								"Naar bed":"eindavond.html",
								"Eind avond":"index.html",
							};
			var next_page = dictionary[document.title];
			window.open(next_page,"_self")
		},1000);
});
	
});