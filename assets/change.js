const dict = [
	{
		id: "1",
		src: "utilities/del.png",
		txt: "Last of us 2",
	},
	{
		id: "2",
		src: "utilities/games/cooking-sim.jpg",
		txt: "Cooking Simulator",
	},
	{
		id: "3",
		src: "utilities/games/Cyberpunk-2077.jpg",
		txt: "Cyberpunk:2077",
	},
	{
		id: "4",
		src: "utilities/games/uncharted-4.jpg",
		txt: "Uncharted 4",
	},
	{
		id: "5",
		src: "utilities/games/NFS-Heat.jpg",
		txt: "NFS-heat",
	},
	{
		id: "6",
		src: "utilities/games/rdr2-img.jpg",
		txt: "RDR2",
	},
	{
		id: "7",
		src: "utilities/games/spiderman.jpg",
		txt: "Spiderman",
	},
];
let prevState = dict[0];
let mainImg = dict[0];

$(".changeio").click(function () {
	mainImg = dict[$(this).attr("id") - 1];
	//alert(mainImg.txt);
	$("#" + prevState.id)
		.find("img")
		.attr("src", mainImg.src);
	$(".maintxt").html(mainImg.txt);
});
