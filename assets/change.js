//To hide and show games- functions defined
var hidd = true;
function hider() {
	for (var i = 6; i <= 20; i++) {
		$("#" + i)
			.find("img,h4")
			.hide();
	}
}

function shower() {
	for (var i = 5; i < 20; i++) {
		$("#" + i)
			.find("img,h4")
			.show();
	}
}

//Games hidden at the starting
hider();

//Change games by clicking
$(".changeio").click(function () {
	let mainStateIMg = {
		elem: $("#1"),
		imgsrc: $("#1img").attr("src"),
		txt: $(".maintxt").html(),
		trailer: $(".trailerplace").attr("src"),
	};
	var clickedImg = $(this).find("img").attr("src");
	var textElem = $(this).find("h4");
	var clickedImgId = $(this).find("img").attr("id");
	var clickedImgtext = $(this).find("h4").text();
	var Trailersrc = $(this).find("h2").text();

	$(this).find("img").attr("src", mainStateIMg.imgsrc);
	$(this).find("h4").text(mainStateIMg.txt);
	console.log(mainStateIMg.img);
	$("#1").find("img").attr("src", clickedImg);
	$(".maintxt").html(clickedImgtext);

	//for trailers
	$(this).find("h2").html(mainStateIMg.trailer);

	$(".trailerplace").attr("src", Trailersrc);
});

//hide and show images
$("#hideandseek").click(function () {
	if (hidd) {
		shower();
		$(this).html("Hide games");
	} else {
		hider();
		$(this).html("Load more games");
	}
	hidd = !hidd;
});
