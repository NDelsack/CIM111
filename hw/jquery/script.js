var newyorkcityClicked = 0;

$(document).ready(function() {
   $("#newyorkcity").mouseover(function() {
      console.log(newyorkcityClicked)
      if (newyorkcityClicked === 0) {
         $("#newyorkcity").css("font-size", "140px");
         newyorkcityClicked = 1;
      } else {
         $("#newyorkcity").css("font-size", "70px");
         newyorkcityClicked = 0;
      }
   });
});
$(document).ready(function() {
   $("#drop").click(function() {
      $("#show").slideToggle("slideDown");
   });
});

var footerClicked = 0;

$(document).ready(function() {
   $("#footer").click(function() {
      console.log(footerClicked)
      if (footerClicked === 0) {
         $("#footer").css("font-size", "70px");
         footerClicked = 1;
      } else {
         $("#footer").css("font-size", "140px");
         footerClicked = 0;
      }
   });
   
   jQuery(window).on("scroll",function(){
	jQuery("img:not(.done)").each(function(){
		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = jQuery(this).offset();
		bounds.right = bounds.left + jQuery(this).outerWidth();
		bounds.bottom = bounds.top + jQuery(this).outerHeight();

		if((!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom))){
			jQuery(this).addClass("done");
			jQuery(this).hide();
			jQuery(this).fadeIn(1000);
		}
	});
});
});