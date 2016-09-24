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
});