$(window).scroll(function(){
	var wScrool = $(this).scrollTop();

	$('h1').css({
		'transform' : 'translate(0px, '+ wScrool/2 +'%)'
	});

	$('.cube').css({
		'transform' : 'translate(0px, '+ wScrool/10 +'%)'
	});
});
