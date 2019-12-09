var jillianClicked = 0;

$(document).ready(function() {
   $("#jillian").mouseover(function() {
      console.log(jillianClicked)
      if (jillianClicked === 0) {
         $("#jillian").css("font-size", "150px");
         jillianClicked = 1;
      } else {
         $("#jillian").css("font-size", "200px");
         jillianClicked = 0;
      }
   });
});