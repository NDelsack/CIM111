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
});