$(document).ready(function(){

	if(document.body.clientHeight <= 650){
		$('.bottom_menu_item .image').each(function(){
			summ = $(this).width();
			$(this).css({
				width: summ - 20,
			})
		});
	}
	if(document.body.clientWidth <= 1280){
		$('.bottom_menu_item .image').each(function(){
			summ = parseInt($(this).css('margin-top'));
			$(this).css({
				marginTop: summ + 20,
			})
		});
	}
	
	$('.bottom_menu_item').hover(function(){
		var hoverItem = $('.bottom_menu_item').index(this);
		var widthItem = $('.bottom_menu_item:eq('+hoverItem+') .image').width();
		$('.hover__bg').css({
			backgroundColor: 'rgba(76,76,78,0.6)',
			zIndex: '6'
		});
		$('footer').css({
			zIndex: '7'
		});
		$('.bottom_menu_item:eq('+hoverItem+') .image').css({
			width: widthItem + 155
		});
		if(document.body.clientHeight <= 650){
			$('.bottom_menu_item:eq('+hoverItem+') .image').css({
				width: widthItem + 100
			});
		}
		if(document.body.clientWidth <= 1440){
			$('.bottom_menu_item:eq('+hoverItem+') .image').css({
				width: widthItem + 100
			});
		}
	},function(){
		$('.hover__bg').css({
			backgroundColor: 'rgba(76,76,78,0)',
			zIndex: '4'
		});
		$('footer').css({
			zIndex: '5'
		});
		$('.bottom_menu_item .image').css({
			width: ''
		});
	});

	$('.ip-main ul li').click(function(){
		var clickChoice = $('.ip-main ul li').index(this);
		$('.left_menu_choice li').removeClass('active').eq(clickChoice).addClass('active');
		$('.bg_left_nav').removeClass('bg_left_nav_act').eq(clickChoice).addClass('bg_left_nav_act');
		$('.left_navigation .nav__link').removeClass('active__navList').eq(clickChoice).addClass('active__navList');
		$('.video_items .video__item').removeClass('active').eq(clickChoice).addClass('active');
		$('.bottom_menu_items').css({
			opacity: '0',
			zIndex: '-1'
		});
		$('.bottom_menu_items:eq('+clickChoice+')').css({
			opacity: '1',
			zIndex: '1'
		});
	});
	
});