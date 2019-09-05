$(document).ready(function(){
    if($('#map').length > 0){
    	ymaps.ready(function () {
    	    var myMap = new ymaps.Map('map', {
    	            center: [56.872747, 60.608146],
    	            zoom: 16
    	        }, {
    	            searchControlProvider: 'yandex#search'
    	        }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'г. Екатеринбург, пр-кт Космонавтов 15, лит О, офис 301 (офис)'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'icon/map-icon.png',
                // Размеры метки.
                iconImageSize: [116, 111],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-60, -90]
            });

    	    myMap.geoObjects
    	        .add(myPlacemark);
             
            //на мобильных устройствах... (проверяем по userAgent браузера)
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                myMap.behaviors.enable('scrollZoom');
                myMap.behaviors.enable('drag');
            }else{
                //отключаем зум колёсиком мышки
                myMap.behaviors.disable('scrollZoom');
                myMap.behaviors.enable('drag');
            }
    	});

    }
    
    $('.footer__open .about_us .open_maps').click(function(){
        $('.map').fadeIn(500);
    });
    $('.map .close').click(function(){
        $('.map').fadeOut(500);
    });
});