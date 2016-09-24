$(document).ready(function() {

	$('.search__field').on('focus', function() {
		$('.search__form').addClass('search__form_big');
	});

	$('.search__field').on('blur', function() {
		$('.search__form').removeClass('search__form_big');
	});

	$('.sort__button').on('click', function() {
		event.preventDefault();
		$(this).addClass('bounceOut');
	});

	
});

