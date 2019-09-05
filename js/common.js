$(document).ready(function(){

	// открытие поиска в шапке
	var searchHead = 0;
	$('header .search_header form div').click(function(){
		if(searchHead == 0){
			searchHead = 1;
			$('header .search_header form').css('width','250px');
			$('header .search_header form input').css({
				width: '250px',
				borderBottom: '1px solid #a6ce38'
			});
			$('header .search_header').css('margin-left','20px');
		}else{
			searchHead = 0;
			$('header .search_header form').css('width','0');
			$('header .search_header form input').css({
				width: '0',
				borderBottom: '0px'
			});
			$('header .search_header').css('margin-left','');
		}
	});

	//открытие поиска в левом меню и футере
	var searchLeft = 0;
	$('.left_navigation .down_l_nav form div,.footer__open .search_foot form div').click(function(){
		if(searchLeft == 0){
			searchLeft = 1;
			$('.left_navigation .down_l_nav form,.footer__open .search_foot form').css('width','100%');
			$('.left_navigation .down_l_nav form input,.footer__open .search_foot form input').css({
				width: 'calc(100% - 30px)',
			});
		}else{
			searchLeft = 0;
			$('.left_navigation .down_l_nav form,.footer__open .search_foot form').css('width','0');
			$('.left_navigation .down_l_nav form input,.footer__open .search_foot form input').css({
				width: '0',
			});
		}
	});

	//при наведении показать подпункты в левом появляющемся меню
	$('.left_navigation .nav__link .top_li').hover(function(){
		var hoverNav = $('.left_navigation .nav__link .top_li').index(this);
		$('.left_navigation .nav__link .sub_ul:eq('+hoverNav+')').slideDown(500);
	},function(){
		$('.left_navigation .nav__link .sub_ul').slideUp(500);
	});

	$('.ip-main ul li').click(function(){
		var click = $(this).index();
		$('.ip-container').css('animation','choiceAnim 1s linear forwards');
	});

	// открытие бокового меню
	var openMenuLeft = 0;
	$('.left_menu, .open_menu__left').click(function(e){
		var leftMchoice = $(".left_menu_choice");
		if (!leftMchoice.is(e.target) && leftMchoice.has(e.target).length === 0) { 
		$('.open_menu__left img').css('animation','none');
		if(openMenuLeft == 0){
			openMenuLeft = 1;
			$('.open_menu__left img').css('animation','rollOutRight 0.5s linear forwards');
			$('.open_menu__left img:first-child').css('display','none');
			$('.open_menu__left img:last-child').css('display','block');
			$('.left_navigation').css({
				left: '0'
			});
			$('.container-z').css({
				zIndex: '1',
				transition: '0ms linear 0s'
			});
			$('.left_menu').css({
				zIndex: '5',
				transition: '0ms linear 0ms'
			});
			if(document.body.clientWidth < 500){
				$('.open_menu__left').css({
					left: 'calc(100% - 43px'
				});
				$('.footer_visible').css('padding-left','0');
				$('.arrow__f').css('left','0');
			}else{
				$('.open_menu__left').css('left','452.5px');
			}
			$('.bg_left_nav_act').css({
				zIndex: '5',
				opacity: '1',
				transition: '750ms linear 350ms'
			});
			$('header').css({
				backgroundColor: '#fff'
			});
			$('.bottom_menu').css({
				bottom: '-500px'
			});
		}else{
			openMenuLeft = 0;
			if(document.body.clientWidth < 500){
				$('.footer_visible').css('padding-left','75px');
				$('.arrow__f').css('left','75px');
			}
			$('.open_menu__left img').css('animation','rollOutLeft 0.5s linear forwards');
			$('.open_menu__left img:last-child').css('display','none');
			$('.open_menu__left img:first-child').css('display','block')
			$('.left_navigation').css({
				left: '-403px'
			});
			$('.container-z').css({
				zIndex: '6',
				transition: '0ms linear 750ms'
			});
			$('.left_menu').css({
				zIndex: '7',
				transition: '0ms linear 750ms'
			});
			$('.open_menu__left').css('left','49.5px');
			$('.bg_left_nav_act').css({
				zIndex: '1',
				opacity: '0',
				transition: '350ms linear 0ms'
			});
			$('header').css({
				backgroundColor: 'transparent'
			});
			$('.bottom_menu').css({
				bottom: '32px'
			});
			if(document.body.clientHeight < 500){
				$('.bottom_menu').css({
					bottom: '-50px'
				});
			}
		}
		}
	});

	//смена иконок вниз вверх в левом меню которое выезжает
	/*setInterval(function(){
		$('.left_navigation .nav__link').scroll(function() {
		  if(this.scrollTop==this.scrollHeight-this.clientHeight) {
		    $('.wrapper_nav_link .line_nav_link.arrow_down img').css({
	   			filter: 'brightness(100%) invert(0)',
	   			opacity: '0'
	   		});
	   		$('.wrapper_nav_link .line_nav_link.arrow_top img').css({
	   			filter: 'brightness(0%) invert(1)',
	   			opacity: '1'
	   		});
		  }else{
		  	$('.wrapper_nav_link .line_nav_link.arrow_down img').css({
	   			filter: 'brightness(0%) invert(1)',
	   			opacity: '1'
	   		});
	   		$('.wrapper_nav_link .line_nav_link.arrow_top img').css({
	   			filter: 'brightness(100%) invert(0)',
	   			opacity: '0'
	   		});
		  }
		});
	},100);*/

	// скрулл в левом меню которое выезжает
	$(".left_navigation .nav__link").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"outside",
		scrollEasing: "linear",
		callbacks:{
		    onTotalScroll:function(){
		      	$('.wrapper_nav_link .line_nav_link.arrow_down img').css({
		   			filter: 'brightness(100%) invert(0)',
		   			opacity: '0'
		   		});
		   		$('.wrapper_nav_link .line_nav_link.arrow_top img').css({
		   			filter: 'brightness(0%) invert(1)',
		   			opacity: '1'
		   		});
		    },
		    onScroll:function(){
		   		$('.wrapper_nav_link .line_nav_link.arrow_down img').css({
	   				filter: 'brightness(0%) invert(1)',
	   				opacity: '1'
		   		});
		   		$('.wrapper_nav_link .line_nav_link.arrow_top img').css({
		   			filter: 'brightness(100%) invert(0)',
		   			opacity: '0'
		   		});
		    }
		}
	});

	// открытие футера
	var clickFoot = 0;
	$(' .arrow__f').click(function(){
		if(clickFoot == 0){
			clickFoot = 1;
			$('.footer__menu').fadeIn(500).css('display','flex')
			$('.container-z').css({
				zIndex: '1',
				transition: '0ms linear 0s'
			});
			$('.logo_footer').css({
				opacity: '1',
				zIndex: '1',
				transition: '500ms linear 1s'
			});
			$('.logo_footer img').css({
				transform: 'translate(0, 0px)',
				transition: '350ms linear 1.1s'
			});
			$('.wrapper_footer').css({
				bottom: '0'
			});
			if(document.body.clientHeight <=801){
				$('.wrapper_footer').css({
					top: '0'
				});
			}
			if(document.body.clientWidth <=1100){
				$('.wrapper_footer').css({
					bottom: '0',
				});
			}
			if(document.body.clientWidth <=769){
				$('.wrapper_footer').css({
					bottom: 'auto',
					top: '0'
				});
				$('.footer_visible .social_footer').fadeOut();
				$('.footer_visible').css('padding-left','0');
				$('.footer__open').css('padding-left','15px');
				$('.arrow__f').css('left','0');
			}
			$('.footer_visible .social_footer').css({
				opacity: '0'
			});
			$('.footer_visible').css({
				background: '#5d751d'
			});
			$('.wrapper_footer .arrow__f').css({
				boxShadow: 'none',
				transform: 'rotate(180deg)',
				top: '0',
				height: '40px',
				paddingBottom: '11px'
			});
			$('.footer__open .questions_f .social_footer').css({
				opacity: '1'
			});
			$('.footer__open .family_img').css({
				bottom: '-5px'
			});
		}else{
			backFooter()
		}
	});
	function backFooter(){
		clickFoot = 0;
		$('.container-z').css({
			zIndex: '1',
			transition: '0ms linear 750ms'
		});
		$('.logo_footer').css({
			opacity: '0',
			zIndex: '-1',
			transition: '500ms linear 350ms'
		});
		$('.logo_footer img').css({
			transform: 'translate(0, -10px)',
			transition: '350ms linear 0s'
		});
		$('.wrapper_footer').css({
			bottom: '-562px'
		});
		if(document.body.clientWidth <=1600){
			$('.wrapper_footer').css({
				bottom: '-505px'
			});
		}
		if(document.body.clientHeight <=801){
			$('.wrapper_footer').css({
				bottom: 'auto',
				top: 'calc(100% - 32px)'
			});
		}
		if(document.body.clientWidth <=1100){
			$('.wrapper_footer').css({
				bottom: 'calc(-100% + 32px)'
			});
		}
		if(document.body.clientWidth <=769){
			$('.wrapper_footer').css({
				bottom: 'auto',
				top: 'calc(100% - 120px)'
			});
			$('.footer_visible .social_footer').fadeIn();
			$('.footer_visible').css('padding-left','75px');
			$('.footer__open').css('padding-left','75px');
			$('.arrow__f').css('left','75px');
		}
		$('.footer_visible .social_footer').css({
			opacity: '1'
		});
		$('.footer_visible').css({
			background: '#83a429'
		});
		$('.wrapper_footer .arrow__f').css({
			boxShadow: '0 -3px 7px 0 rgba(0,0,0,0.23)',
			transform: 'rotate(0deg)',
			top: '-11px',
			height: '29px',
			paddingBottom: '0'
		});
		$('.footer__menu').delay(1000).fadeOut(500);
		$('.footer__open .questions_f .social_footer').css({
			opacity: '0'
		});
		$('.footer__open .family_img').css({
			bottom: '-200px'
		});
	}
	$('.footer__menu').swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if (direction == 'down') {
            backFooter()
        }
		},
 		threshold:50
	});

	// смена внешнего вида формы заявки в футере
	$('.footer__open .questions_f form .wrap_input input').focus(function(){
		var focusInp = $(this).index();
		$('.footer__open .questions_f form .wrap_input input:eq('+focusInp+')').val();
		//alert('focus сработал по '+ focusInp +' элементу')
		$('.footer__open .questions_f form .wrap_input:eq('+focusInp+')').css({
			background: '#fff'
		});
		$('.footer__open .questions_f form .wrap_input input:eq('+focusInp+')').css({
			borderLeftColor: '#83a429',
			color: '#4c4c4e'
		});
		$('.footer__open .questions_f form .wrap_input div:eq('+focusInp+') img').css({
			filter: 'brightness(100%) invert(0)'
		});
	});		
	$('.footer__open .questions_f form .wrap_input input').blur(function(){
		$('.footer__open .questions_f form .wrap_input input[name="name"]').val('Имя');
		$('.footer__open .questions_f form .wrap_input input[name="phone"]').val('Номер телефона');
		$('.footer__open .questions_f form .wrap_input').css({
			background: 'transparent'
		});
		$('.footer__open .questions_f form .wrap_input input').css({
			borderLeftColor: '#fff',
			color: '#fff'
		});
		$('.footer__open .questions_f form .wrap_input div img').css({
			filter: 'brightness(0%) invert(1)'
		});
	});

	// смена продовольствия
	$('.left_menu_choice li').click(function(){
		var clickRazdel = $('.left_menu_choice li').index(this);
		$('.left_menu_choice li').removeClass('active').eq(clickRazdel).addClass('active');
		$('.bg_left_nav').removeClass('bg_left_nav_act').eq(clickRazdel).addClass('bg_left_nav_act');
		$('.left_navigation .nav__link').removeClass('active__navList').eq(clickRazdel).addClass('active__navList');
		$('.video_items .video__item').removeClass('active').eq(clickRazdel).addClass('active');
		$('.bottom_menu_items').css({
			opacity: '0',
			zIndex: '-1'
		});
		$('.bottom_menu_items:eq('+clickRazdel+')').css({
			opacity: '1',
			zIndex: '1'
		});
	});
	if(document.body.clientWidth <= 1100 || document.body.clientHeight <= 801){
		$(".footer__open").mCustomScrollbar({
			axis:"y",
			theme:"3d",
			scrollbarPosition:"outside",
			scrollEasing: "linear"
		});
	}
	// гамбургер меню
	setInterval(function() {
		if(document.body.clientWidth <= 991){
			if($('header #gamburger').length == 0){
				$('header').append('<img src="icon/gamburger.png" id="gamburger">');
				var gamburger = 0;
				$('header #gamburger').on('click',function(){
					if(gamburger == 0){
						gamburger = 1;
						$('header #gamburger').attr('src','icon/gamburger-clear.png');
						$('header').css('z-index','99');
						$('header .nav_header').slideDown(300);
					}else{
						gamburger = 0;
						$('header #gamburger').attr('src','icon/gamburger.png');
						$('header').css('z-index','6');
						$('header .nav_header').slideUp(300);
					}
				});
			}
		}else{
			$('header #gamburger').remove(); 
		}
	});
	

	// смена внешнего вида всплвающих форм
	$('.dialog_box .dialog_box_bg .wrap_input input').focus(function(){
		var focusInp = $('.dialog_box .dialog_box_bg .wrap_input input').index(this);
		$('.dialog_box .dialog_box_bg .wrap_input:eq('+focusInp+')').css({
			background: '#eaeaea',
			borderBottomColor: 'transparent'
		});
	});		
	$('.dialog_box .dialog_box_bg input').blur(function(){
		$('.dialog_box .dialog_box_bg .wrap_input').css({
			background: '',
			borderBottomColor: '#83a429'
		});
	});
	/*************************
	открытие всплывающей формы
	**************************/
	// функция закрытия
	function closeDialogBox(){
		setTimeout( function(){
	        $('.dialog_box .dialog_box_bg').fadeOut(0);
	    }, 350);
		$('.dialog_box .dialog_box_bg .block_center').css({
			opacity: '0',
			transform: 'translate(0, -10px)'
		});
	}
	// открытие формы регистрации
	$('header .personal_account').click(function(e){
		e.preventDefault();
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#registration_account').fadeIn(350);
			setTimeout( function(){
				$('#registration_account .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
	});
	// открытие формы входа
	$('#registration_account .open_login, #password_recovery .open_registration').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#login_account').fadeIn(350);
			setTimeout( function(){
				$('#login_account .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
	});
	// открытие формы регистрации
	$('#login_account .open_registration').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#registration_account').fadeIn(350);
			setTimeout( function(){
				$('#registration_account .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
	});
	// открытие формы успешного оформления заказа
	$('.btn_step_registration .step_formalize').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#order_issued').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#order_issued .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы успешной регистрации
	$('#registration_account .btn_registration').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#thank_you_registering').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#thank_you_registering .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы восстановленияпароля
	$('.dialog_box .dialog_box_bg .btn_remember_pass').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#password_recovery').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#password_recovery .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы удалить аккаунт
	$('.left_account .delete_profile').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#delete_profile').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#delete_profile .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы связаться с нами
	$('.open_callback').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#callback').fadeIn(350);
			setTimeout( function(){
				$('#callback .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы спасибо
	$('#callback .callback_btn').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#thank_you_callback').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#thank_you_callback .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// открытие формы новый пароль отправлен
	$('#password_recovery .btn_send_password').click(function(e){
		closeDialogBox();
		setTimeout( function(){
			$('.dialog_box').fadeIn(350).css('display','flex');
			$('#password_recovery_email').fadeIn(350).css('display','flex');
			setTimeout( function(){
				$('#password_recovery_email .block_center').css({
					opacity: '1',
					transform: 'translate(0, 0px)'
				});
			}, 350);
		}, 350);
		return false;
	});
	// закрытие всплывающей формы по нажатию на крест
	$('.dialog_box .dialog_box_bg .close, #delete_profile .cancellation').click(function(){
		$('.dialog_box').delay(350).fadeOut(350);
		closeDialogBox();
		return false;
	});

	// анимация на поиск при клике
	$('.sanja_click_r').click(function(){
		clickSanjaS = $('.sanja_click_r').index(this);
		$('.sanja_click').css('animation','none');
		$('.sanja_click:eq('+clickSanjaS+')').css('animation','anim-effect-sanja 1s ease-out forwards');
		setTimeout(function(){
			$('.sanja_click').css('animation','none');
		},350);
	});

	// открытие картинки в попап
	$('.popup__open').click(function(){
		poputImg = $('.popup__open').index(this);
		$('body').append('<div class="big-image-popup"><div><i class="close"><img src="icon/gamburger-clear.png" alt=""></i><img src="" alt="" class="popup_big_img"></div></div>');
		srcBig = $('.popup__open:eq('+poputImg+') .img_product').attr('src');
		$('.big-image-popup .popup_big_img').attr('src',srcBig);
		//alert(poputImg)
		return false;
	});
	$(document).mouseup(function (e){
		var div = $('.big-image-popup .popup_big_img');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			$('.big-image-popup').hide();
			$('.big-image-popup').remove();
		}
	});
	$('.big-image-popup .close').click(function(){
		$('.big-image-popup').fadeOut(300);
		$('.big-image-popup').delay(300).remove();
	});
});