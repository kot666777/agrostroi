$(document).ready(function(){

	// скрыть/показать карту
	clickMap = 0;
	$('.grid_cont .left_grid .names button').click(function(){
		if(clickMap == 0){
			clickMap = 1;
			$('.grid_cont .left_grid .maps').slideUp(300);
			$('.grid_cont .left_grid .names button img').css({
				transform: 'rotate(180deg)'
			});
		}else{
			clickMap = 0;
			$('.grid_cont .left_grid .maps').slideDown(300);
			$('.grid_cont .left_grid .names button img').css({
				transform: 'rotate(0deg)'
			});
		}
	});

	// слайдеры часы работы
	$('.slider_top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		asNavFor: '.slider_down'
	});
	$('.slider_down').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.slider_top'
	});

	// клик по кнопкам под картой
	$('.grid_cont .left_grid .buttons button').click(function(){
		click = $(this).index();
		$('.grid_cont .left_grid .buttons button').removeClass('active_btn').eq(click).addClass('active_btn');
		$('.grid_cont .left_grid .buttons_info .info_b').slideUp(300);
		$('.grid_cont .left_grid .buttons_info .info_b').eq(click).slideDown(300);
		$('.bg_contacts img').css({'opacity':'0','right':'-50%'}).eq(click).css({'opacity':'1','right':'0'});		
		$('.slider_top').slick('refresh');
		$('.slider_down').slick('refresh');
	});$('.grid_cont .left_grid .buttons button:eq(0)').click();
	

	// смена внешнего вида формы заявки
	$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input').focus(function(){
		var focusInp = $('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input').index(this);
		$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input:eq('+focusInp+')').val('')
		$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input:eq('+focusInp+')').css({
			background: '#eaeaea',
			borderBottomColor: 'transparent'
		});
	});	
	$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input[type="tel"]').focus(function(){
		$('.grid_cont .left_grid .buttons_info input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});
	});	
	$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input').blur(function(){
		$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input input[name="name"]').val('Имя');
		$('.grid_cont .left_grid .buttons_info input[type="tel"]').inputmask('remove');
		$('.grid_cont .left_grid .buttons_info input[type="tel"]').val('Номер телефона');
		$('.grid_cont .left_grid .buttons_info .info_b form .wrap_input').css({
			background: 'transparent',
			borderBottomColor: ''
		});
	});

	// клик по кнопкам под картой
	$('.grid_cont .left_grid .buttons_info .info_b .info_b_btn button').click(function(){
		click = $(this).index();
		$('.grid_cont .left_grid .buttons_info .info_b .info_b_btn button').removeClass('active_inf_btn').eq(click).addClass('active_inf_btn');
		$('.grid_cont .left_grid .buttons_info .info_b .info_b_text').slideUp(300);
		$('.grid_cont .left_grid .buttons_info .info_b .info_b_text').eq(click).slideDown(300);
	});$('.grid_cont .left_grid .buttons_info .info_b .info_b_btn button:eq(0)').click();
	
	// паралакс на зеленый круг
	$('.grid_cont .right_grid .circle_r .circle_r_green').parallax({
		mouseport: '.grid_cont .right_grid .circle_r',
		xparallax: '25',
		yparallax: '25'
	});

	//scroll
	$(".contacts").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});
});	