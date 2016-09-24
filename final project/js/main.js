$(function() {

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		$('.sanacity').css({
			'transform' : 'translate(0px, +'+ wScroll /50 +'%)'
		});

		$('.logo').css({
			'transform' : 'translate(0px, +'+ wScroll /7 +'%)'
		});

		$('.dervish').css({
			'transform' : 'translate(0px, +'+ wScroll /50 +'%)'
		});

		$('.imageTitle').css({
			'transform' : 'translate(0px, +'+ wScroll /55 +'%)'
		});

		$('.subTitle').css({
			'transform' : 'translate(0px, +'+ wScroll /55 +'%)'
		});

		$('.wall').css({
			'transform' : 'translate(0px, -'+ wScroll /300 +'%)'
		});

		$('.minaretRight').css({
			'transform' : 'translate(0px, +'+ wScroll /50 +'%)'
		});

		$('.minaretLeft').css({
			'transform' : 'translate(0px, +'+ wScroll /20 +'%)'
		});
	});

});
