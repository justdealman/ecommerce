function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
}
$(document).ready(function() {
	if ( $('input[type="radio"]').length > 0 ) {
		$('input[type="radio"]').uniform();
	}
	if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.zoom').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('header ul li a').bind('click', function(event) {
		var t = $('section.'+$(this).attr('href'));
		$('html, body').stop(true,true).animate({
			scrollTop: t.offset().top+eval(t.attr('data-normalize'))+'px'
		}, '500', 'easeInOutQuad');
		event.preventDefault();
	});
	$('.schedule .core h5 a').bind('click', function(event) {
		var t = $('.schedule .core ul li.'+$(this).attr('href'));
		$('html, body').stop(true,true).animate({
			scrollTop: t.offset().top-10+'px'
		}, '500', 'easeInOutQuad');
		event.preventDefault();
	});
	$('.message h6, .fade').bind('click', function(event) {
		$('.message, .fade').stop(true,true).fadeOut(500);
		event.preventDefault();
	});
	$('[data-open="message"]').bind('click', function(event) {
		var t = $('div.'+$(this).attr('data-open'));
		$('div.error').stop(true,true).fadeOut(500);
		t.css({
			'top': $('.registration .submit').offset().top-t.outerHeight()-86+'px'
		}).stop(true,true).fadeIn(500);
		$('.fade').stop(true,true).fadeIn(500);
		event.preventDefault();
	});
	$('[data-open="error"]').bind('click', function(event) {
		var t = $('div.'+$(this).attr('data-open'));
		t.css({
			'top': $('.registration .submit').offset().top-t.outerHeight()-86+'px'
		}).stop(true,true).fadeIn(500);
		event.preventDefault();
	});
});
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
});