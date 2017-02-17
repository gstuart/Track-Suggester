$(document).ready(function() {
  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").hide(); //this will hide the beginbtn
    $("#cssQuestion").show(); //this will display the first question.

    var cssYes = $("input:radio [name=css id=cssYes]:checked").val(); //name of yes selection
    var cssNo = $("input:radio [name=css id=cssNo]:checked").val(); //name of no selection
    var cSharpYes = $("input:radio [name=cSharp id=cSharpYes]:checked").val(); //name of yes selection
    var cSharpNo = $("input:radio [name=cSharp id=cSharpNo]:checked").val(); //name of no selection
    var phpYes = $("input:radio [name=php id=phpYes]:checked").val(); //name of yes selection
    var phpNo = $("input:radio [name=php id=phpNo]:checked").val(); //name of no selection
    var java1 = $("input:radio [name=java1 id=java1Yes]:checked").val(); //name of yes selection
    var java1 = $("input:radio [name=java1 id=java1No]:checked").val(); //name of no selection
    var java2 = $("input:radio [name=java2 id=java2Yes]:checked").val(); //name of yes selection
    var java2 = $("input:radio [name=java2 id=jav2No]:checked").val(); //name of no selection

    $("cssYes").click(function() {
      if (true) {
        $("#welcome").hide();
        $("#result").show("You should join the CSS/Design course!");
      }
      else if (true) {
        $("#cSharpQuestion").show();
        $("cSharpYes").click(function() {
          if (true) {
            $("#welcome").hide();
            $("#result").show("You should join the #C course!");
          }
          else {
            $("")
          }
        });
      }
      else {
        $("#welcome").hide();
        $("#result").show("You should join the PHP course!");
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
