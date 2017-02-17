$(document).ready(function() {
  $("#beginBtn").click(function(){
    //when the button is clicked do the following:

    $("#beginBtn").hide(); //this will hide the beginbtn

    $("#cssQuestion").show(); //this will display the first question.

    //declare varables for all the inputs of the questions, which will be used in the if/else statements below.
    var cssResponse = $("#cssAnswer").val();
    var cSharpResponse = $("cSharpAnswer").val();
    var phpResponse = $("phpAnswer").val;
    var java1Response = $("java1Answer").val();
    var java2Response = $("java2Answer").val();

    if ("cssResponse") { //if the first answer is yes, then replace the jumbotron with the text below.
      $("#welcome").hide():
      $("#result").show("You should join the CSS/Design course!");
    }
    else {
      $("#welcome").hide();
      $("#result").show("You should join the PHP course!");
    }

    event.preventDefault();
  });
});
