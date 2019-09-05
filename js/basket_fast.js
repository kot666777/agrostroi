$(document).ready(function(){

	$(window).on('load', maxHeight);
	$(window).on('resize', maxHeight);
	function maxHeight(){
		maxHeightCont = parseInt($('.container_basket_fast').css('height'));
		if(document.body.clientHeight > 700 && document.body.clientWidth > 991){
			$('.container_c_a').css({maxHeight: maxHeightCont + 'px'});
		}
		if(document.body.clientHeight > 700 && document.body.clientWidth > 1100){
			$('.step_basket .step_left, .step_r_r').css({maxHeight: maxHeightCont + 'px'});
		}
		if(document.body.clientHeight > 700 && document.body.clientWidth > 991){
			$('.step_basket .step_right').css({maxHeight: maxHeightCont + 'px'});
		}
		/*if(document.body.clientWidth <= 1100 && document.body.clientWidth > 768){
			$(".step_basket").css({maxHeight: maxHeightCont - 50 + 'px'});
		}*/
	}

	// открытие блоков оформления
	$('.result_basket .result_registration button').click(function(){
		$('.grid_c_a').slideUp(0);
		$('.result_basket').slideUp(0);
		$('.step_basket').slideDown(500).css('display','grid');
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
		$('.grid_c_a').slideDown(500);
		$('.result_basket').slideDown(500);
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

	//scroll по центру
	if(document.body.clientHeight > 700 && document.body.clientWidth > 991){
		$(".container_c_a").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}

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


	//открытие правого блока в корзине
	if(document.body.clientWidth > 991){
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
		$(".step_basket .step_left").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}

	if(document.body.clientHeight <= 700 && document.body.clientWidth > 991){
		$(".container_basket_fast").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}
	if(document.body.clientWidth <= 991){
		$(".container_basket_fast").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"inside",
			scrollEasing: "linear"
		});
	}

	// при фокусе очистить инпут курьер/самовывоз
	$('.step_basket .step_left .step_l_registration .courier_inp_b input').focus(function(){
		$('.step_basket .step_left .step_l_registration .courier_inp_b input').val('');
	})

	//удалить товар из корзины
	$('.item_purchase .delete_purchase span').click(function(){
		clickDelete = $('.item_purchase .delete_purchase span').index(this);
		$('.item_purchase .delete_purchase span').removeClass('cbutton--click').eq(clickDelete).addClass('cbutton--click');
	});

	// убрать перезагрузку страницы при клике по кресту, лайку, изменению количества
	$('.item_purchase .delete_purchase, .item_purchase .like_purchase, .item_purchase .image_purchase .increase, .down_purchase .number_p_basket button').click(function(e){
		e.preventDefault();
	});
});