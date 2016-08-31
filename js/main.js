$(document).ready(function() {
	var owl = $("#owl-slider");

	      owl.owlCarousel({
	        navigation : false,
	        singleItem : true,
	        transitionStyle : "backSlide",
	        autoPlay: 10000,
	        pagination: false,
	       	slideSpeed : 500,
	       	addClassActive: true
	      });

	$('.search__field').on('focus', function() {
		$('.search__form').addClass('search__form_big');
	});

	$('.search__field').on('blur', function() {
		$('.search__form').removeClass('search__form_big');
	});


});