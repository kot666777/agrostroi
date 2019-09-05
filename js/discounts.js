$(document).ready(function(){

	//обертка каждые 3 блока
	context = $('.wrapper_discounts');
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
	$(".wrapper_discounts").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});
	$('.discounts_item').hover(function(){
		hoverH3 = $('.discounts_item').index(this);
		$('.discounts_item:eq('+hoverH3+') h3').html(function(){
			var text= $(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? "<span>"+ first + "</span> " : first) + text.join(" ");
		});
	},function(){
		$('.discounts_item h3').html(function(){
			var text= $(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? " "+ first + " " : first) + text.join(" ");
		});
	});
	
});	