$(document).ready(function(){

	$(window).on('load', maxHeight);
	$(window).on('resize', maxHeight);
	function maxHeight(){
		maxHeightCont = parseInt($('.container_account').css('height')); 
		maxHeightCont2 = parseInt($('.account').css('height'));
		if(document.body.clientHeight > 700 && document.body.clientWidth > 1100){
			$('.container_c_a, .history_product,  .step_basket .step_left, .step_r_r').css({maxHeight: maxHeightCont + 'px'});
		}
		if(document.body.clientWidth <= 1100 && document.body.clientWidth > 768){
			$(".scroll_w_11").css({maxHeight: maxHeightCont + 'px'});
		}
		if(document.body.clientWidth <= 768){
			$(".container_account").css({maxHeight: maxHeightCont2 - 50 + 'px'});
		}
		if(document.body.clientWidth > 1100 && document.body.clientWidth <= 1550 && document.body.clientHeight > 700){
			$(".step_basket .step_right").css({maxHeight: maxHeightCont - 50 + 'px'});
		}
		if(document.body.clientWidth <= 1100 && document.body.clientWidth > 768){
			$(".step_basket").css({maxHeight: maxHeightCont - 50 + 'px'});
		}
	}

	//открытие правого блока
	allItems = 0;
	maxHeight = parseInt($('.container_account').css('height'));
	$('.history_product .all_items_h_r').click(function(){
		if(allItems == 0){
			allItems = 1;
			$('.history_product .all_items_h_r').text('Скрыть все');
			$('.items_h_r').css({height: maxHeight - 139});
			//scroll справа в истории покупок
			$(".items_h_r").mCustomScrollbar({
				axis:"y",
				theme:"3d",
				scrollbarPosition:"inside",
				scrollEasing: "linear"
			});
		}else{
			allItems = 0;
			$('.history_product .all_items_h_r').text('посмотреть все');
			$('.items_h_r').css({
				height: 200 + 'px'
			});
			// удалить scroll справа в истории покупок
			$(".items_h_r").mCustomScrollbar('destroy');
		}
		return false;
	});

	//scroll по центру
	//if(document.body.clientHeight > 600 && document.body.clientWidth > 991){
		$(".container_c_a").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	//}

	//клики по левым кнопкам
	$('.left_account .open_r_b').click(function(){
		clickBtn = $('.left_account .open_r_b').index(this);
		$('.left_account .open_r_b').removeClass('active_btn').eq(clickBtn).addClass('active_btn');
		$('.right_account').slideUp(0).eq(clickBtn).slideDown(500).css('display','grid');
		if(document.body.clientWidth <= 768){
			$('.right_account').slideUp(0).eq(clickBtn).slideDown(500).css('display','block');
		}
		if($('.left_account .open_r_b:eq(4)').hasClass('active_btn')){
			$('.left_account .delete_profile').fadeIn(0);
		}else{
			$('.left_account .delete_profile').fadeOut(100);
		}
	});

	//пересчет количества лайкнутых статей и вывод цифры к левую кнопку
	lengthItemArticles = $('#items_articles .articles_item').length;
	$('.left_account button:nth-child(2) span').text('('+lengthItemArticles+')');

	//пересчет количества сохраненных товаров и вывод цифры к левую кнопку
	lengthItemConserved = $('#items_conserved .item_purchase').length;
	$('.left_account button:nth-child(3) span').text('('+lengthItemConserved+')');

	//пересчет количества товаров в корзине и вывод цифры к левую кнопку
	lengthItembasket = $('#items_basket .item_purchase').length;
	$('.left_account button:nth-child(4) span').text('('+lengthItembasket+')');

	//клик по выбору оплаты
	$('.step_l_registration .payment_check').click(function(){
		clickInput = $('.step_l_registration .payment_check').index(this);

		$('.step_l_registration .payment .label_inp img').css({
			filter: 'grayscale(100%) opacity(0.1)'
		});
		$('.step_l_registration .payment_check').prop('checked',false);

		$('.step_l_registration .payment .label_inp img:eq('+clickInput+')').css({
			filter: 'grayscale(0%) opacity(1)'
		});
		$('.step_l_registration .payment_check:eq('+clickInput+')').prop('checked',true);

		if($('.step_l_registration .payment_check:eq(2)').prop("checked")){
			$('.step_l_registration .payment_card').slideDown(500);
		}else{
			$('.step_l_registration .payment_card').slideUp(500);
		}
	});

	//клик по выбору привязаная карта или нет
	$('.step_l_registration .payment_с_check').click(function(){
		clickInput = $('.step_l_registration .payment_с_check').index(this);

		$('.step_l_registration .payment_card_l .label_inp img ').css({
			filter: 'grayscale(100%) opacity(0.1)'
		});
		$('.step_l_registration .payment_с_check').prop('checked',false);

		$('.step_l_registration .payment_card_l .label_inp img:eq('+clickInput+')').css({
			filter: 'grayscale(0%) opacity(1)'
		});
		$('.step_l_registration .payment_с_check:eq('+clickInput+')').prop('checked',true);
	});

	// открытие блоков оформления
	$('#items_basket .result_basket .result_registration button').click(function(){
		$('#items_basket .grid_c_a').slideUp(0);
		$('#items_basket .result_basket').slideUp(0);
		$('.step_basket').slideDown(500).css('display','grid');
		if(document.body.clientWidth <= 768){
			$('.step_basket').slideDown(500).css('display','block');
		}
		$('#step__one').slideDown(500);
		$('.step_basket .step_r_left div').removeClass('active_step').eq(0).addClass('active_step');
		$('.step_left_name div').removeClass('active_step').eq(0).addClass('active_step');
		return false;
	});
	$('.step_basket .step_left .step_l_registration .next_step .next_step_btn').click(function(){
		$('#step__one').slideUp(0);
		$('#step__two').slideDown(500);
		$('.step_basket .step_r_left div').removeClass('active_step').eq(1).addClass('active_step');
		$('.step_left_name div').removeClass('active_step').eq(1).addClass('active_step');
		return false;
	});
	$('.step_l_registration .back_basket').click(function(){
		$('#items_basket .grid_c_a').slideDown(500);
		$('#items_basket .result_basket').slideDown(500);
		$('.step_basket').slideUp(0);
		$('#step__two').slideUp(0);
		$('#step__one').slideUp(0);
		return false;
	});
	
	// смена внешнего вида формы оформления
	$('.step_basket .step_left .step_l_registration .wrap_input input').focus(function(){
		var focusInp = $('.step_basket .step_left .step_l_registration .wrap_input input').index(this);
		$('.step_basket .step_left .step_l_registration .wrap_input:eq('+focusInp+')').css({
			background: '#eaeaea',
			borderBottomColor: 'transparent'
		});
	});		
	$('.step_basket .step_left .step_l_registration .wrap_input input').blur(function(){
		$('.step_basket .step_left .step_l_registration .wrap_input').css({
			background: '',
			borderBottomColor: '#83a429'
		});
	});

	// смена внешнего вида формы личного кабинета
	$('#personal_data .left_p_d .top_l_p_d .wrap_input input').focus(function(){
		var focusInp = $('#personal_data .left_p_d .top_l_p_d .wrap_input input').index(this);
		$('#personal_data .left_p_d .top_l_p_d .wrap_input:eq('+focusInp+')').css({
			background: '#eaeaea',
			borderBottomColor: 'transparent'
		});
	});		
	$('#personal_data .left_p_d .top_l_p_d .wrap_input input').blur(function(){
		$('#personal_data .left_p_d .top_l_p_d .wrap_input').css({
			background: '',
			borderBottomColor: '#83a429'
		});
	});

	//открытие правого блока в корзине
	allItems = 0;
	maxHeight2 = parseInt($('.step_r_r .items_s_b').css('height'));
	
	$('.step_r_r .all_items_s_b').click(function(){
		maxHeightCont = parseInt($('.container_account').css('height'));
		if(allItems == 0){
			allItems = 1;
			$('.step_r_r .all_items_s_b').text('Скрыть все');
			$('.step_r_r .items_s_b').css({'height':'calc(100% - 50px)'});
			if(document.body.clientHeight > 700){
				$('.step_r_r .scroll_x').css({'height':'calc(100% - 174px)'});
				$('.step_r_r .items_s_b').css({'height':'calc(100% - 50px)'});
				//scroll справа в корзине
				$(".step_r_r .items_s_b").mCustomScrollbar({
					axis:"y",
					theme:"3d",
					scrollbarPosition:"inside",
					scrollEasing: "linear"
				});
			}
			$('.step_basket .step_right').animate({
				height: '100%'
			});
			
		}else{
			allItems = 0;
			$('.step_r_r .all_items_s_b').text('посмотреть все');
			$('.step_basket .step_right').animate({
				height: '409px'
			});
			$('.step_r_r .scroll_x').animate({'height':'250px'});
			$('.step_r_r .items_s_b').css({
				height: maxHeight2 + 'px'
			});
			// удалить scroll справа
			$(".step_r_r .items_s_b").mCustomScrollbar('destroy');
		}
		return false;
	});
	if(document.body.clientWidth > 1100){
		$(".step_basket .step_left").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	if(document.body.clientWidth <= 1100  && document.body.clientWidth > 768){
		$(".step_basket").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	if(document.body.clientHeight <= 700 && document.body.clientWidth > 991){
		$(".container_account").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	if(document.body.clientWidth <= 1100 && document.body.clientWidth > 768){
		$(".scroll_w_11").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	if(document.body.clientWidth <= 768){
		$(".container_account").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	/*if(document.body.clientWidth > 1100 && document.body.clientWidth <= 1550){
		$(".step_basket .step_right").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}*/

	//вытащить имя с личного кабинета и вставить в кнопку
	nameLk = $('#personal_data .left_p_d .wrap_input input[name="name"]').val();
	$('.left_account .account_btn span').text(nameLk);

	// при фокусе очистить инпут курьер/самовывоз
	$('.step_basket .step_left .step_l_registration .courier_inp_b input').focus(function(){
		$('.step_basket .step_left .step_l_registration .courier_inp_b input').val('');
	});

	//удалить товар из корзины
	$('.item_purchase .delete_purchase span').click(function(){
		clickDelete = $('.item_purchase .delete_purchase span').index(this);
		$('.item_purchase .delete_purchase span').removeClass('cbutton--click').eq(clickDelete).addClass('cbutton--click');
	});

	// убрать перезагрузку страницы при клике по кресту, лайку, изменению количества
	$('.item_purchase .delete_purchase, .item_purchase .like_purchase, .item_purchase .image_purchase .increase, .down_purchase .number_p_basket button').click(function(e){
		e.preventDefault();
	});

	// увеличение поля комменатрия автоматически
	autosize($('textarea'))
});