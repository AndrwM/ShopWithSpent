$(document).ready(function() {
	

	
	$(function(){

		$('#slider')
		.anythingSlider({
			mode                : "fade",
			resizeContents      : false,
			buildArrows         : false,
			buildStartStop      : false,
			hashTags            : false,
			autoPlay            : true,
			autoPlayLocked      : true,
			pauseOnHover        : false,
			expand              : true,
			delay               : 9000,
			animationTime       : 1000,
		})
		.anythingSliderFx({
			// base FX definitions
			// '.selector' : [ 'effect(s)', 'distance/size', 'time', 'easing' ] - 'time' and 'easing' are optional parameters
			/*
			'.quoteSlide:first > *' : [ 'grow', '24px', '400', 'easeInOutCirc' ],
			'.quoteSlide:last'      : [ 'top', '500px', '400', 'easeOutElastic' ],
			'.expand'               : [ 'expand', '10%', '400', 'easeOutBounce' ],
			'.textSlide h3'         : [ 'top left', '200px', '500', 'easeOutCirc' ],
			'.textSlide img,.fade'  : [ 'fade' ],
			'.textSlide li'         : [ 'listLR' ]
			*/
			
			// for more precise control, use the "in" and "out" definitions
			// in = the animation that occurs when you slide "in" to a panel
			inFx  : {
				'.s3 .title, .s1 .title'  : { opacity: 1.0, left : 40, duration: 500, easing : 'swing' },
				'.s3 .mailclient'  : { opacity: 1, bottom : 80, duration: 700, easing : 'swing' },
				'.s2 .iphone'  : { opacity: 1, bottom : 80, duration: 700, easing : 'swing' },
			},
			// out = the animation that occurs when you slide "out" of a panel
			// (it also occurs before the "in" animation) - outFx animation time is 1/2 of inFx time
			outFx : {
				'.s3 .title, .s1 .title'  : { opacity: 0, left : 80, duration: 900, easing : 'swing' },
				'.s3 .mailclient'  : { opacity: 1.0, bottom : -200, duration: 700, easing : 'swing' },
				'.s2 .iphone'  : { opacity: 1, bottom : 80, duration: 700, easing : 'swing' },
			}
			
		});

	});

	
});