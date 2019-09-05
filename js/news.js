$(document).ready(function(){

	//обертка каждые 3 блока
	context = $('.wrapper_news');
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
	$(".wrapper_news").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});

	// обертка первого слова в span 
	$('.news_item').hover(function(){
		hoverH3 = $('.news_item').index(this);
		$('.news_item:eq('+hoverH3+') h3').html(function(){
			var text= $(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? "<span>"+ first + "</span> " : first) + text.join(" ");
		});
	},function(){
		$('.news_item h3').html(function(){
			var text= $(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? " "+ first + " " : first) + text.join(" ");
		});
	});
	//открытие поиска
	openSearch = 0;
	$('.news .search form div').click(function(){
		if(openSearch == 0){
			openSearch = 1;
			$('.news .search form').css('width','320px');
			if(document.body.clientWidth <= 768){
				$('.news .search form').css('width','calc(100% - 25px)');
			}
			$('.news .search form input').css('width','100%');
		}else{
			openSearch = 0;
			$('.news .search form').css('width','23px');
			$('.news .search form input').css('width','0');
		}
	});
	
});	