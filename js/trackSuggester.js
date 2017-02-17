$(document).ready(function() {
  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").hide(); //this will hide the beginbtn
    $("#cssQuestion").show(); //this will display the first question.

    var yes = $("input[type='radio'][name=css][id=cssYes]:checked").val();
    var no = $("input[type='radio'][name=css][id=cssNo]:checked").val();

    $("yes").click(function(){
      if (true) {
        $("#welcome").hide();
      }
      else {
        alert("They selected no");
      }
    });
    //declare varables for all the inputs of the questions, which will be used in the if/else statements below.
    // var cssResponse = $("input:radio[name=radioBtn]:checked").val;
    // var cSharpResponse = $("input:radio[name=radioBtn]:checked").val;
    // var phpResponse = $("input:radio[name=radioBtn]:checked").val;
    // var java1Response = $("input:radio[name=radioBtn]:checked").val;
    // var java2Response = $("input:radio[name=radioBtn]:checked").val;

  //   $("#cssResponse").click(function() {
  //     if (true) { //if the first answer is yes, then replace the jumbotron with the text below.
  //       $("#welcome").hide();
  //       $("#result").show("You should join the CSS/Design course!");
  //     }
  //     else {
  //
  //       $("#welcome").hide();
  //       $("#result").show("You should join the PHP course!");
  //     }
  //  })
    event.preventDefault();
  });
});
