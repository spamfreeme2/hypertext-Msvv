//For navbar 
$('.nav-item:not(.Theme)').click(function(){
	$('.active').removeClass('active')
	$(this).addClass('active')
	return false
	
})

