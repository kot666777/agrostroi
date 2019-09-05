$(document).ready(function(){
	//scroll
	$('.scroll_page').mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});
	//parallax
	$('.internal_page .image img').parallax({
		mouseport: '.internal_page .image',
		xparallax: '25%'
	});
	//открытие поиска
	openSearch = 0;
	$('.search form div').click(function(){
		if(openSearch == 0){
			openSearch = 1;
			$('.search form').css('width','320px');
			if(document.body.clientWidth <= 768){
				$('.search form').css('width','calc(100% - 25px)');
			}
			$('.search form input').css('width','100%');
		}else{
			openSearch = 0;
			$('.search form').css('width','23px');
			$('.search form input').css('width','0');
		}
	});
});