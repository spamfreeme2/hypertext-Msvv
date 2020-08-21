$('.changeio').click(function(){
	let mainStateIMg={
		elem:$("#1"),
		imgsrc:$("#1img").attr("src"),
		txt:$(".maintxt").html(),
		trailer:$(".trailerplace").attr('src')
	}
	var clickedImg=$(this).find('img').attr('src');
	var textElem=$(this).find("h4");
	var clickedImgId=$(this).find('img').attr('id');
	var clickedImgtext=$(this).find('h4').text();
	var Trailersrc=$(this).find('h2').text();
	
	$(this).find('img').attr('src',mainStateIMg.imgsrc )
	$(this).find('h4').text(mainStateIMg.txt)
	console.log(mainStateIMg.img);
	$("#1").find('img').attr("src",clickedImg);
	$(".maintxt").html(clickedImgtext)
	
	//trailers
	$(this).find('h2').html(mainStateIMg.trailer)
	
	$(".trailerplace").attr('src',Trailersrc)

	
})
