

$(document).ready(function() {

// Fix Widows
	$('p').widowFix();


// Smooth Scroll	
 $('ul.nav a').smoothScroll();
 
 $('.logo a').click(function(event) {
   event.preventDefault();
   var link = this;
   $.smoothScroll({
     scrollTarget: link.hash
   });
 });


// Fancy Box
$(".fancybox").fancybox();


// Mosaic Fade
$('.circle').mosaic({
	opacity		:	0.8			//Opacity for overlay (0-1)
});

 			
});







		