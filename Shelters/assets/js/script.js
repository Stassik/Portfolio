$(window).on('load', function() {
   $("#preloader").fadeOut(500);
});





$(document).ready(function(){
  	
	
  	$('#main_carousel').owlCarousel({
	  	loop:true,
	    margin:0,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
  	});


  	$('#portfolio_carousel').owlCarousel({
	  	loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
  	});


  	$('#stock_carousel').owlCarousel({
	  	loop:true,
	    margin:0,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
  	});

  	$('#news_carousel').owlCarousel({
	  	loop:true,
	    margin:0,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
  	});


//Animation

			

  		var offset=0;

  		if ( $(window).width() >1900 ) {
  			var offset=0;	
  		};
	

  
  	$('.main .carousel_item_text h2').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated zoomIn', offset: offset});
  	$('.main .carousel_item_text p, .carousel_item_text span').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated fadeInUp', offset: offset});
  	$('.main .carousel_item button').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated flipInX', offset: offset});
  	$('.main h1, .main h2').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated fadeInDown', offset: offset});
  	$('.main .service_item').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated zoomIn', offset: offset});
  	$('.main .service button').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated flipInX', offset: offset});
  	$('.main .step_item').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated jackInTheBox', offset: offset});
  	$('.main .step_title').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated bounceInDown', offset: offset});
  	$('.main .better_item').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated flipInX', offset: offset});
  	$('.main .price_title button').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated flipInX', offset: offset});
  	$('.main .price_title span').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated zoomIn', offset: offset});
  	$('.main .comment_item:nth-child(odd)').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated fadeInLeftBig', offset: offset});
  	$('.main .comment_item:nth-child(even)').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated fadeInRightBig', offset: offset});
  	$('.main .portfolio span').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated fadeInUp', offset: offset});
  	$('.main #portfolio_carousel .carousel_item').addClass("hidden1").viewportChecker({classToAdd: 'visible1 animated jackInTheBox', offset: offset});

  	
});



//Main menu

$(".navbar-toggler").on("click", function(){

	$(".navbar-toggler span:nth-child(1)").toggleClass("top-bar");
	$(".navbar-toggler span:nth-child(2)").toggleClass("middle-bar");
	$(".navbar-toggler span:nth-child(3)").toggleClass("bottom-bar");
	
});



$("#hasSubItems").on("click", function(){
	$(this).toggleClass("fa-plus fa-minus");		
});


$(".nav_mobile_screen .show_hide").on("click", function(){
	$(".collapsed").find("i").removeClass("fa-minus").addClass("fa-plus");
	$(this).toggleClass("fa-plus fa-minus");
	$(".nav_mobile_screen li").find(".show_hide").not(this).removeClass("fa-minus").addClass("fa-plus");
		
});

$(".left_nav .show_hide").on("click", function(){
	$(".collapsed").find("i").removeClass("fa-minus").addClass("fa-plus");
	$(this).toggleClass("fa-plus fa-minus");
	$(".left_nav li").find(".show_hide").not(this).removeClass("fa-minus").addClass("fa-plus");		
});





//Scroll menu

$( window ).scroll(function() {
  $( ".menu_area" ).css( {"background":"rgba(22, 22, 22, 0.8)", "transition-duration":"1s"} );
	var offsetTop = $('html').scrollTop();
	if(offsetTop == 0) {
		$( ".menu_area" ).css( {"background":"none"});
	}
});



if ( $(window).width() <992 ) {
	$( window ).scroll(function() {
	  	$( ".general_header .menu_area" ).css( {"background":"rgba(22, 22, 22, 0.8)", "transition-duration":"1s"} );
			var offsetTop = $('html').scrollTop();
			if(offsetTop == 0) {
			$( ".general_header .menu_area" ).css( {"background":"rgba(22, 22, 22)"});
		}
	});

};


//Steps


$(".about_item").mouseenter(function(){
	$(this).addClass("active_step");
	
	$(".active_step").children(".step_item").css({"background":"#ff434b", "width":"70px", "height":"70px", "font-size":"16px"});
	$(".active_step").children(".step_info").css({"bottom":"0px", "max-height":"100%", "opacity":"1"});
}).mouseleave(function(){
	
	$(".step_item").css({"background":"none", "width":"100px", "height":"100px", "font-size":"20px"});
	$(".step_info").css({"bottom":"-20px","max-height":"0px","opacity":"0"});
	$(this).removeClass("active_step");

});


$(".about_item").on("touchstart", function(){
	$(".about_item").removeClass("active_step");
	$(this).addClass("active_step");
	$(".active_step").children(".step_item").css({"background":"#ff434b", "width":"70px", "height":"70px"});
	$(".active_step").children(".step_info").css({"bottom":"0px", "max-height":"100%", "opacity":"1"});
});


//Modal

$(".close").mouseenter(function(){
	$(".fa-times").css({"animation":"transform-rotate  .2s  linear", "color":"#fd9233"});
}).mouseleave(function(){
	$(".fa-times").css({"animation":"transform-rotate-reverse  .2s  linear", "color":"rgba(0,0,0,.3)"});
});
 

