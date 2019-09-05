$(document).ready(function(){

	//переменные
	preloaderImg = 0;// отчет изображений
	slImg = $('.preloader img').length;// количество изображений
	// вызов функции
	setInterval(function(){
		preloader();
	},300);
	// действие после истечения времени
	setTimeout(function(){
		$('.preloader').fadeOut(300);
		$('.preloader img').css('opacity','0');
		$('.left_menu_choice').fadeIn(300);
		$('.left_menu .certification').fadeIn(300).css('display','flex');
	},3000);
	//вызов функции для отображений 1-го изображения
	preloader();
	// функция смена изображений
	function preloader(){
		$('.preloader img').css('opacity','0');
		$('.preloader img:eq('+preloaderImg+')').css('opacity','1');
		if(preloaderImg < slImg - 1){
	    	preloaderImg++
	    }else{
	    	preloaderImg = 0;
	    }
	}

});