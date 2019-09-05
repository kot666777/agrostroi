$(document).ready(function(){

	// скрулл
	$(".catalog_right").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});
	/*$(".characteristics_i_c .scroll_char").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear"
	});*/
	$(".elements_scroll").mCustomScrollbar({
		axis:"y",
		theme:"3d",
		scrollbarPosition:"inside",
		scrollEasing: "linear",
	});
	// смена картинок в правом блоке в статье
	positionOpacity = 0;
	lengthOpacity = $('.articles_item .image_art_sl img').length;
	setInterval(function(){
		sliderOpacity();
	},2000);
	sliderOpacity();
	function sliderOpacity(){
		$('.articles_item .image_art_sl img').css({
			opacity:'0',
			zIndex: '1'
		});
		$('.articles_item .image_art_sl img:eq('+positionOpacity+')').css({
			opacity:'1',
			zIndex: '5'
		});
		if(positionOpacity<lengthOpacity-1){
	    	positionOpacity++
	    }else{
	    	positionOpacity=0;
	    }
	}
	//открытие и скрытие правого блока
	arrow_click = 0;

    //слайдер сертификатов товара
	slickSert = $('.slider_certificates').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<button class="arrow_left_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		nextArrow: '<button class="arrow_right_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		responsive: [
        {
          breakpoint: 1660,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
     	]
	});
	//слайдер отзывов
	$('.viewport_comments').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button class="arrow_left_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		nextArrow: '<button class="arrow_right_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
     	]
	});
	//слайдер похожих товаров
	slickSimilar = $('.slider_similar_products').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<button class="arrow_left_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		nextArrow: '<button class="arrow_right_slick"><img src="icon/arrow_footer.png" alt=""></button>',
		responsive: [
        {
          breakpoint: 1660,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
     	]
	});
	//скрыть боковое меню
	$('.arrow_click').click(function(){
		//switchOptions();
		if(arrow_click == 0){
			arrow_click = 1;
			$('.m_w_460').css('right','-430px');
			if(document.body.clientWidth <= 525){
				$('.m_w_460').css('right','-290px');
			}
			$('.arrow_click').css({
				left:'0',
				transform: 'rotate(180deg)',
				boxShadow: 'none'
			});
			$('.elements_scroll').css({
				zIndex:'2'
			});
			if(document.body.clientWidth > 991){
				$('.catalog_elements').addClass('window_100');
			}
			$('.slider_similar_products').slick('slickSetOption', {
			    slidesToShow: 3
			}, refresh);
		}else{
			arrow_click = 0;
			$('.m_w_460').css('right','0');
			$('.arrow_click').css({
				left:'30px',
				transform: 'rotate(0deg)',
				boxShadow: '4px 0 4px 0 rgba(151,151,151,0.34)'
			});
			$('.elements_scroll').css({
				zIndex:'2'
			});
			$('.catalog_elements').removeClass('window_100');
		}
		
	});
	if(document.body.clientWidth <= 991){
		$('.arrow_click').click();
	}
	function switchOptions() {
		slickSert.slick('refresh');
		slickSimilar.slick('refresh');
	}

	// развернуть и скрыть часть описания
	open_vitamins = 0;
	$('.catalog_right .open_vitamins').click(function(){
		if(open_vitamins == 0){
			open_vitamins = 1;
			$('.catalog_right .vitamins ul li:not(:lt(4))').slideDown(300).css('display','flex');
			$('.catalog_right .open_vitamins').text('свернуть');
		}else{
			open_vitamins = 0;
			$('.catalog_right .vitamins ul li:not(:lt(4))').slideUp(300);
			$('.catalog_right .open_vitamins').text('развернуть');
		}
	});
	// появление подпунктов в хлебным крошках по нажатию по треугольнику
	clickBCarrow = 0;
	$('.bread_crumb .arrow_hover').click(function(){
		if(open_vitamins == 0){
			open_vitamins = 1;
			$('.bread_crumb .sub_ul_bc').slideDown(300);
			$('.bread_crumb .arrow_hover').css('transform','rotate(0deg)');
		}else{
			open_vitamins = 0;
			$('.bread_crumb .sub_ul_bc').slideUp(300);
			$('.bread_crumb .arrow_hover').css('transform','rotate(180deg)');
		}
	});
	// клик по сортироровке
	sortingClick = 0;
	$('.sorting span').click(function(){
		sortingEQ = $('.sorting span').index(this);
		$('.elements_scroll').css('height','calc(100% - 56px)');
		if(document.body.clientWidth <= 768){
				$('.elements_scroll').css('height','calc(100% - 226px)');
			}
		$('.characteristics_items').fadeOut(300);
		$('.top_c_e').css('border-bottom','1px solid transparent');
		$('.sorting span').removeClass('active_sort').eq(sortingEQ).addClass('active_sort');
	});

	$('.sorting .characteristics').click(function(){
		if(sortingClick == 0){
			sortingClick = 1;
			setTimeout(function(){
				height1 = $('.top_c_e').height();//высота блока сортировки
				height2 = $('.characteristics_items .features_choice').height();//высота блока выбора характеристики
				height3 = height2+16+height1+32;//результат сложения
				height4 = $('.elements_scroll').css('height', '100%').css('height', '-='+height3+'px');
			},300);
			$('.characteristics_items').fadeIn(500).css('display','grid');
			$('.characteristics_items').css('border-bottom','1px solid #59595a');
			$('.top_c_e').css('border-bottom','1px solid #e8e8e8');
		}else{
			sortingClick = 0;
			$('.elements_scroll').css('height','calc(100% - 56px)');
			if(document.body.clientWidth <= 768){
				$('.elements_scroll').css('height','calc(100% - 226px)');
			}
			$('.characteristics_items').fadeOut(0);
			$('.characteristics_items').css('border-bottom','1px solid transparent');
			$('.top_c_e').css('border-bottom','1px solid transparent');
			$('.sorting span').removeClass('active_sort');
		}
	});
	// выбор характеристики и открытие подпунктов характеристики
	$('.features_choice span').click(function(){
		clickFCeq = $('.features_choice span').index(this);
		setTimeout(function(){
			height1 = $('.top_c_e').height();//высота блока сортировки
			height2 = $('.characteristics_items .f_c_items').height();//высота блока выбора характеристики
			height3 = height2+16+height1+32;//результат сложения
			height4 = $('.elements_scroll').css('height', '100%').css('height', '-='+height3+'px');
		},300);
		$('.characteristics_items .f_c_items').fadeOut(300);
		$('.characteristics_items .f_c_items:eq('+clickFCeq+')').fadeIn(500).css('display','grid');
		$('.features_choice span').removeClass('active_f_c').eq(clickFCeq).addClass('active_f_c');	
	});
	// выбор подпунктов характеристики
	clickFCdiv = 0;
	$('.characteristics_items .f_c_items div').click(function(){
		clickFCI = $('.characteristics_items .f_c_items div').index(this);
		if($('.characteristics_items .f_c_items div:eq('+clickFCI+')').hasClass('active_checked')){
			$('.characteristics_items .f_c_items div:eq('+clickFCI+')').removeClass('active_checked');
		}else{
			$('.characteristics_items .f_c_items div:eq('+clickFCI+')').addClass('active_checked');
		}
	});
	//скрыть меню сортировки после нажатия на найти
	$('.characteristics_items .search_c_i').click(function(){
		sortingClick = 0;
		$('.characteristics_items').fadeOut(0);
		$('.sorting span').removeClass('active_sort');
		$('.characteristics_items .f_c_items').fadeOut(300);
		$('.characteristics_items .f_c_items div').removeClass('active_checked');
		$('.features_choice span').removeClass('active_f_c');
		$('.characteristics_items').css('border-bottom','1px solid transparent');
		$('.top_c_e').css('border-bottom','1px solid transparent');
	});

	// убрать перезагрузку страницы при клике по кресту, лайку, изменению количества
	$('.item_product .add_product, .item_product .like_product, .item_product .image_product .increase, .down_product .number_p_basket').click(function(e){
		e.preventDefault();
	});
	// клик по иконке добавить в корзину
	$('.item_product .add_product span').click(function(){
		clickDelete = $('.item_product .add_product span').index(this);
		$('.item_product .add_product span').removeClass('cbutton--click').eq(clickDelete).addClass('cbutton--click');
		setTimeout(function(){
			$('.item_product .add_product span').removeClass('cbutton--click');
		},500);
	});
	//проверка если есть блок со скидкой  
	//меняем цвет и размер шрифта у цены
	setTimeout(function(){
		salePrice();
	},100);
	function salePrice(){
		// проверка в каталоге
		$('.item_product a').each(function() {
			if($(this).children('.sale_product').length > 0) {
				$(this).find('.price').css({
					color: '#a6ce38',
					fontSize: '24px',
					lineHeight: '24px'
				});
			} else {
				$(this).find('.price').css({
					color: '#4c4c4e',
					fontSize: '18px',
					lineHeight: '18px'
				});
			}
		});
		// проверка в карточке
		$('.item_catalog').each(function() {
			if($(this).find('.sale_item_catalog').length > 0) {
				$(this).find('.price').css({
					color: '#a6ce38',
					fontSize: '24px',
					lineHeight: '24px'
				});
			} else {
				$(this).find('.price').css({
					color: '#4c4c4e',
					fontSize: '18px',
					lineHeight: '18px'
				});
			}
		});
		// проверка в похожих товарах
		$('.slide_similar_products').each(function() {
			if($(this).find('.sale_s_p').length > 0) {
				$(this).find('.price_s_p').css({
					color: '#a6ce38',
				});
			} else {
				$(this).find('.price_s_p').css({
					color: '#4c4c4e',
				});
			}
		});
	}
	//слайдер товара под большой картинкой
	$('.viewport_s_i_c').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="arrow_left_i_c"><img src="icon/arrow_left_menu.png" alt=""></button>',
		nextArrow: '<button class="arrow_right_i_c"><img src="icon/arrow_left_menu.png" alt=""></button>',
		responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 525,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
     	]
	});
	//клики по стрелкам в слайдере товара
	$('.arrow_left_i_c').click(function(){
		$(this).css('transform','rotate(90deg) scale(0.9)');
		setTimeout(function(){
			$('.arrow_left_i_c').css('transform','rotate(90deg) scale(1)');
		},250);
	});
	$('.arrow_right_i_c').click(function(){
		$(this).css('transform','rotate(-90deg) scale(0.9)');
		setTimeout(function(){
			$('.arrow_right_i_c').css('transform','rotate(-90deg) scale(1)');
		},250);
	});
	//получение ссылки на изображение по клику 
	//маленького изображению и вставка в большую
	$('.item_catalog .item_catalog_left .slide_s_i_c').click(function(){
		clickSlide = $('.item_catalog .item_catalog_left .slide_s_i_c').index(this);
		attrSlide = $('.item_catalog .item_catalog_left .slide_s_i_c:eq('+clickSlide+') img').attr('src');
		$('.item_catalog .item_catalog_left .slide_s_i_c').removeClass('active_slide').eq(clickSlide).addClass('active_slide');
		$('.item_catalog .item_catalog_left .big_image_i_c .img_product').attr('src', attrSlide);
	});

	//клики по стрелкам в слайдере сертификатов товара
	$('.slider_certificates .arrow_left_slick').click(function(){
		$(this).css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.slider_certificates .arrow_left_slick').css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});
	$('.slider_certificates .arrow_right_slick').click(function(){
		$(this).css('box-shadow','4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.slider_certificates .arrow_right_slick').css('box-shadow','4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});

	//клики по стрелкам в слайдере похожих товаров
	$('.slider_similar_products .arrow_left_slick').click(function(){
		$(this).css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.slider_similar_products .arrow_left_slick').css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});
	$('.slider_similar_products .arrow_right_slick').click(function(){
		$(this).css('box-shadow','4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.slider_similar_products .arrow_right_slick').css('box-shadow','4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});


/********************************************************************************************************/
	opacityComment_bol = false;
	lengthComment = $('.slide_comments').length;

	setInterval(function(){
		sliderComment($('.slide_comments'),lengthComment);
	},2000);


	function sliderComment(slaid,slaid_ln){

		//Вывод 1х слайдов и добавление им индекса в html
		if(opacityComment_bol==false){
		
			//нициализирует все слайды
			for(var i = 0;i<slaid_ln;i++){
				for(var j=0;j<slaid.eq(i).find('.img_comm').children('img').length;j++){
					slaid.eq(i).find('.img_comm').children('img:eq('+j+')').attr('data-index',j);
					slaid.eq(i).find('.img_comm').children('img:eq(0)').attr('op','false');
					
				}//End for
			

				slaid.eq(i).find('.img_comm').children('img:eq(0)').css({
					opacity:1,
					zIndex:5
				});
				slaid.eq(i).find('.img_comm').children('img:eq(0)').attr('op','true');
				opacityComment_bol = true;
			}//End for
			//Добавляет 1 слайд
			
		}else{//Последующие запуски функции
			for(var i = 0;i<slaid_ln;i++){
				//количество всех изображений в одном текущем слайде под индексом $i
				var slaid_img_ln = slaid.eq(i).find('.img_comm').children('img').length;
				//Какой слайдер на данный момент виден, запись его индекса с data-index
				var ind = slaid.eq(i).find('.img_comm').children('img[op=true]').attr('data-index');

				//сменяем слайды
				if(ind!=undefined && ind<slaid_img_ln-1){
					ind++;
				}else if(ind!=undefined && ind==slaid_img_ln-1){
					ind=0;
				}//END if

				//Обнуляем все слайды а затем тот который нужно проявляем
				slaid.eq(i).find('.img_comm').children('img').attr('op','false');
				slaid.eq(i).find('.img_comm').children('img:eq('+ind+')').attr('op','true');
				slaid.eq(i).find('.img_comm').children('img').css({opacity:0,zIndex:1});

				//Ghjzdkztv dct ntreott
				slaid.eq(i).find('.img_comm').children('img:eq('+ind+')').css({opacity:1,zIndex:5});
				slaid.eq(i).find('.line_image').children('span').css({background:'#fff'});
				slaid.eq(i).find('.line_image').children('span:eq('+ind+')').css({background:'#5d751d'});

			}//End for
		}
	}//END sliderComment

/*********************************************************************************************************/


/*
	// смена картинок в отзыве
	opacityComment = 0;
	lengthComment = $('.slide_comments:eq(0)').find('.img_comm').children('img').length;
	alert(lengthComment);
	setInterval(function(){
		sliderComment();
	},200);
	sliderComment();
	function sliderComment(){
	for (var i = lengthComment; i < 0; i++) {			
		$('.slide_comments').find('.img_comm').children('img').css({
			opacity:'0',
			zIndex: '1'
		});
		$('.slide_comments').find('.img_comm').children('img:eq('+opacityComment+')').css({
			opacity:'1',
			zIndex: '5'
		});
		$('.slide_comments').find('.img_comm').children('span').css({
			background:'#fff'
		});
		$('.slide_comments:eq('+opacityComment+')').find('.img_comm').children('span:eq('+opacityComment+')').css({
			background:'#5d751d'
		});
		if(opacityComment<lengthComment){
	    	opacityComment++
	    }else{
	    	opacityComment=0;
	    }
	    }
	}*/
	//клики по стрелкам в слайдере отзывов
	$('.viewport_comments .arrow_left_slick').click(function(){
		$(this).css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.viewport_comments .arrow_left_slick').css('box-shadow','-4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});
	$('.viewport_comments .arrow_right_slick').click(function(){
		$(this).css('box-shadow','4px 0 4px 0 rgba(0,0,0,0)');
		setTimeout(function(){
			$('.viewport_comments .arrow_right_slick').css('box-shadow','4px 0 4px 0 rgba(0,0,0,0.22)');
		},250);
	});
	//звезды в форме отзывов
	$('.stars_assessment').raty({
		  onClick: function(score) {
		    alert('score: ' + score);
		  }
	});
	// постоянный покупатель или нет
	$('.permanent label').click(function(){
	    var r1 = $('.permanent label').index(this);
        $('.permanent label img').css({
          filter: 'brightness(0%) opacity(0.1)'
        });
        $('.permanent label input').prop('checked',false);
        $('.permanent label img:eq('+r1+')').css({
          filter: 'brightness(100%) opacity(1)'
        });
        $('.permanent label input:eq('+r1+')').prop('checked',true);
	});
	// смена внешнего вида инпута имени в отзыве
	$('.write_comments .data_comments .wrap_input input').focus(function(){
		var focusInp = $('.write_comments .data_comments .wrap_input input').index(this);
		$('.write_comments .data_comments .wrap_input:eq('+focusInp+')').css({
			background: '#eaeaea',
			borderBottomColor: 'transparent'
		});
	});		
	$('.write_comments .data_comments .wrap_input input').blur(function(){
		$('.write_comments .data_comments .wrap_input').css({
			background: '',
			borderBottomColor: '#83a429'
		});
	});
	//открытие характеристик
	clickDatalist = 0;
	$('.item_catalog .item_catalog_right .characteristics_i_c .datalist .current').click(function(){
		clickTopUl = $('.item_catalog .item_catalog_right .characteristics_i_c .datalist .current').index(this);
		if(clickDatalist == 0){
			clickDatalist = 1;
			$('.item_catalog .item_catalog_right .characteristics_i_c .datalist:eq('+clickTopUl+') .list').fadeIn(300);
			$('.item_catalog_right .characteristics_i_c .datalist .option').click(function(){
				clickIndex = $('.item_catalog_right .characteristics_i_c .datalist .option').index(this);
				clickValue = $('.item_catalog_right .characteristics_i_c .datalist .option:eq('+clickIndex+')').text();
				$('.item_catalog .item_catalog_right .characteristics_i_c .datalist:eq('+clickTopUl+') .current').text(clickValue);
				clickDatalist = 0;
				$('.item_catalog .item_catalog_right .characteristics_i_c .datalist:eq('+clickTopUl+') .list').fadeOut(300);
			});
		}else{
			clickDatalist = 0;
			$('.item_catalog .item_catalog_right .characteristics_i_c .datalist:eq('+clickTopUl+') .list').fadeOut(300);
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.item_catalog .item_catalog_right .characteristics_i_c .datalist .list'); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			clickDatalist = 0;
			div.fadeOut(300); // скрываем его
		}
	});
	/*$('.item_catalog_right .characteristics_i_c .btn_char_down').click(function(){
		if($('.item_catalog_right .characteristics_i_c .btn_char_down').hasClass('btn_char_down')){
			$('.item_catalog_right .characteristics_i_c .topul .topli:not(:first)').slideDown(300).css({
				display: 'grid'
			});
			$('.item_catalog_right .characteristics_i_c .btn_char_down').removeClass('btn_char_down').addClass('btn_char_top');
			$('.item_catalog_right .characteristics_i_c .btn_char_top').text('скрыть все');
		}else{
			$('.item_catalog_right .characteristics_i_c .btn_char_top').removeClass('btn_char_top').addClass('btn_char_down');
			$('.item_catalog_right .characteristics_i_c .btn_char_down').delay(300).text('показать все')
			$('.item_catalog_right .characteristics_i_c .topul').each(function(){
				$(this).find('.topli:not(:first)').slideUp(300);
			});
		}return false;
	});*/

	//клик по кнопкам под картинкой
	$('.btn_item_catalog button').click(function(){
		clickBtn = $('.btn_item_catalog button').index(this);
		if($('.btn_item_catalog button:eq('+clickBtn+')').hasClass('active_click')){
			$('.btn__info').slideUp(0);
			$('.similar_products').slideDown(300);
			$('.btn_item_catalog button:eq('+clickBtn+')').removeClass('active_click');
			slickSimilar.slick('refresh');
		}else{
			$('.btn__info').slideUp(0);
			$('.btn__info:eq('+clickBtn+')').slideDown(300);
			$('.similar_products').slideUp(0);
			$('.btn_item_catalog button').removeClass('active_click').eq(clickBtn).addClass('active_click');
			slickSert.slick('refresh');
			$('.viewport_comments').slick('refresh');
		}
	});

    $(".add_comments a").click(function(){
    	var section = $(".add_comments a").attr('href');
        $('.elements_scroll').mCustomScrollbar("scrollTo","bottom", {
            timeout:0,
            scrollInertia:200,
        });
        return false;
    });
});

