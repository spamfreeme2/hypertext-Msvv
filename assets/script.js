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

var Themevar = false;

$("#Theme").click(function () {
	Themevar = !Themevar;
	if (Themevar) {
		$(this).text("Light Mode");
		$("body").addClass("bg-dark").removeClass("bg-white");
		$("#bg").addClass("backdrop2").removeClass("backdrop1");
		$("nav").addClass("bg-dark").removeClass("bg-light");
		$(".nav-item:not(.active)").find("a").addClass("text-secondary");
		$("#time,#Vbox,#game-dark,#sto,#res-dark").addClass("text-white");
		$(".Backg").addClass("bg-dark");
		$(".Tabd").addClass("table-dark");
		$(".active").find("a").addClass("text-white");
		$("#logo-black").attr(
			"src",
			"utilities/featured/Youtube-Logo-dark.svg"
		);
		$("svg").addClass("text-white");
		$("svg").addClass("text-white");
	} else {
		$(this).text("Dark mode");
		$("body").addClass("bg-white").removeClass("bg-dark");
		$(".Backg").removeClass("bg-dark");
		$(".Tabd").removeClass("table-dark");
		$("#bg").removeClass("backdrop2").addClass("backdrop1");
		$("nav").addClass("bg-light").removeClass("bg-dark");
		$(".nav-item:not(.active)").find("a").removeClass("text-secondary");
		$("#logo-black").attr(
			"src",
			"utilities/featured/Youtube-Logo-white.svg"
		);
		$(".active").find("a").removeClass("text-white");

		$("#time,#Vbox,#sto,#game-dark,#res-dark").removeClass("text-white");

		$("svg").removeClass("text-white");
		$(".time").css("color", "black");
	}
});

//Popovers
$(function () {
	$('[data-toggle="popover"]').popover();
});
