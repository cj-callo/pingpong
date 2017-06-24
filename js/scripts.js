//Business Logic
var outcome = function(number) {
  if (number % 15 === 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
    return "pong";
  } else if (number % 3 === 0) {
    return "ping"
  } else {
    return (number)
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
  $("ul").append($("#result").text(result));
//  $("#result").append("");
  //console.log("");
  event.preventDefault();
});
});
;





  //$("ul").prepend("<li>test</li>");
  //console.log("");
