$(document).ready(function(){

	$(".answer-content .card").eq(0).addClass('show-parent');

	//Collapse
	$(".card-header").click(function(){
		$(".card-header").parent(".card").removeClass("show-parent");

		if($(this).parent(".card").hasClass("show-parent")){
			$(this).parent(".card").removeClass("show-parent");
		}else {
			$(this).parent(".card").addClass("show-parent");
		}


		if($(".show-parent").children(".show")){
			$(".show").parent().removeClass("show-parent");
		}else {
			$(".show").parent().addClass("show-parent");
		}

	})


	//Карта
	
	ymaps.ready(init);

	function init() {
	  	var myMap = new ymaps.Map("map", {
			    center: [55.795913, 37.705161 ],   
			    zoom: 16
	    	}),

	    // Создаем метку с помощью вспомогательного класса.
	    myPlacemark1 = new ymaps.Placemark([55.795600, 37.706667], {
	      // Свойства.
	      // Содержимое хинта.
	      	hintContent: 'Авторский проект обучения барберов с нуля'
	    }, {
	      // Опции
	      // Своё изображение иконки метки.
	      	iconImageHref: "../img/mapLogo.svg",
	      // Размеры метки.
	      	iconImageSize: [70, 89],
	      // Смещение левого верхнего угла иконки относительно
	      // её "ножки" (точки привязки).
	      	iconImageOffset: [-50, -70]
	    })
	  

	  // Добавляем все метки на карту.
	  	myMap.geoObjects
	    .add(myPlacemark1)

	}
	



	//Модалка

	$(".close").mouseenter(function(){
		$(".closeIcon").css({"animation":"transform-rotate  .2s  linear", "fill":"#FF7A5A"});
	}).mouseleave(function(){
		$(".closeIcon").css({"animation":"transform-rotate-reverse  .2s  linear", "fill":"#535353"});
	});


	//Карусель
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

//Анимация
});