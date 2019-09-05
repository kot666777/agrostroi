$(document).ready(function(){

	//обертка каждые 3 блока
	context = $('.wrapper_articles');
	while(context.children('div:not(.wrap_grid)' ).length){
		if(document.body.clientWidth > 1440){
			context.children('div:not(.wrap_grid):lt(3)').wrapAll('<div class="wrap_grid">');
		}
		if(document.body.clientWidth <= 1440){
			context.children('div:not(.wrap_grid):lt(2)').wrapAll('<div class="wrap_grid">');
		}
		if(document.body.clientWidth <= 991){
			context.children('div:not(.wrap_grid):lt(2)').wrapAll('<div class="wrap_grid">');
		}
	}
	//scroll
	$(".wrapper_articles").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});

});	