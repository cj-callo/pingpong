//Business Logic
var outcome = function(number) {
  //for (var i = 1; i = number; i++) {
  //console.log("")
  //var finalOutcome="";
 if (number % 15 === 0) {
   //outcome = "pingpong";
    return "pingpong";
    //finalOutocme = "pingpong";
 } else if (number % 5 === 0) {
   //outcome = "pong";
   return "pong";
   //finalOutcome = "pong";
  } else if (number % 3 === 0) {
    //outcome = "pingpong";
   return "ping";
    //finalOutcome = "ping"
  } else {
    return number
  }
}

//User Interface
$(document).ready(function() {
  $("#pingpong").submit(function() {
    //alert ("wow")
   var number = parseInt($("input#number").val());
    //console.log("");
    //console.log("")
    //$("#result").text(outcome);
    //$("#result").show();
    $("#result").text("");
    for (i=1;i<=number;i++) {
    $("#result").append("<p>"+ outcome(i) + "</p>")
      //console.log("");
    }
    //console.log("");
    //$("#result").show(result);
    //$("#result").text(result);
    //console.log()
      event.preventDefault();
  });
});






  //$("ul").prepend("<li>test</li>");
  //console.log("");
