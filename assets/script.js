// //hiding the text at the start
// $("body").removeClass('bg-light').addClass('bg-dark');
$("#unmuted").hide();

// Time
setInterval(function () {
	var hours = new Date().getHours();
	if (hours >= 12) {
		var ampm = "PM";
	} else {
		var ampm = "AM";
	}
	hours = hours % 12;
	if (hours == 0) {
		hours = 12;
	}
	var minutes = new Date().getMinutes();
	var seconds = new Date();
	if (minutes < 10) {
		minutes = "" + "0" + minutes;
	}
	var time = hours + ":" + minutes + " " + ampm;
	document.getElementById("time").innerHTML = time;
}, 1000);

//Show resume on hovering

//Microphone Animation

$("#unmuted").click(function () {
	$(this).hide();
	$("#muted").show();
});
$("#muted").click(function () {
	$(this).hide();
	$("#unmuted").show();
});

//tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});
