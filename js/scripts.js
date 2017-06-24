//Business Logic
var outcome = function(number) {
 if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};






//User Interface
$(document).ready(function() {
  $("form#pingpong").click(function() {
  //alert ("wow")
var number = parseInt($("input#number").val());
  //console.log("");
  var result = outcome(number);
  //console.log("")
  $("#result").text(result);
  //$("li#result").prepend(result);
  //console.log("");
  event.preventDefault();
});
});
;





  //$("ul").prepend("<li>test</li>");
  //console.log("");
