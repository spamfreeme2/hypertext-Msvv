const dict = [
	{
		id: "1",
		src: "utilities/games/last_of_us_2.png",
		txt: "Last of us 2",
		trailer:"https://www.youtube.com/watch?v=TXl9GI1p_Os&t=15s",
	},
	{
		id: "2",
		src: "utilities/games/cooking-sim.jpg",
		txt: "Cooking Simulator",
		trailer:"https://www.youtube.com/embed/umjU1LpbkZ0",
	},
	{
		id: "3",
		src: "utilities/games/Cyberpunk-2077.jpg",
		txt: "Cyberpunk",
		trailer:"https://www.youtube.com/embed/umjU1LpbkZ0",
	},
	{
		id: "4",
		src: "utilities/games/uncharted-4.jpg",
		txt: "Uncharted 4",
		trailer:"https://www.youtube.com/embed/9ewiJJe_nYI",
	},
	
	{
		id: "5",
		src: "utilities/games/NFS-Heat.jpg",
		txt: "NFS-heat",
		trailer:""
	},
	{
		id: "6",
		src: "utilities/games/rdr2-img.jpg",
		txt: "RDR2",
		trailer:"https://www.youtube.com/embed/eaW0tYpxyp0",
	},
	{
		id: "7",
		src: "utilities/games/spiderman.jpg",
		txt: "Spiderman",
		trailer:""
	},
];


$('.changeio').click(function(){
	let mainStateIMg={
		elem:$("#1"),
		imgsrc:$("#1img").attr("src"),
		txt:$(".maintxt").html()
	}
	var clickedImg=$(this).find('img').attr('src');
	var textElem=$(this).find("h4");
	var clickedImgId=$(this).find('img').attr('id');
	var clickedImgtext=$(this).find('h4').text();
	//alert(clickedImgtext);
	$(this).find('img').attr('src',mainStateIMg.imgsrc )
	$(this).find('h4').text(mainStateIMg.txt)
	console.log(mainStateIMg.img);
	$("#1").find('img').attr("src",clickedImg);
	$(".maintxt").html(clickedImgtext)
	
												
})
