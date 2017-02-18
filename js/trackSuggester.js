$(document).ready(function() {
  //declare varables at global level for all the inputs of the questions, which will be used in the if/else statements below.
  // var cssYes = $("input:radio [name=css id=cssYes]:checked").val(); //name of yes selection
  // var cssNo = $("input:radio [name=css id=cssNo]:checked").val(); //name of no selection
  // var cSharpYes = $("input:radio [name=cSharp id=cSharpYes]:checked").val(); //name of yes selection
  // var cSharpNo = $("input:radio [name=cSharp id=cSharpNo]:checked").val(); //name of no selection
  // var phpYes = $("input:radio [name=php id=phpYes]:checked").val(); //name of yes selection
  // var phpNo = $("input:radio [name=php id=phpNo]:checked").val(); //name of no selection
  // var java1 = $("input:radio [name=java1 id=java1Yes]:checked").val(); //name of yes selection
  // var java1 = $("input:radio [name=java1 id=java1No]:checked").val(); //name of no selection
  // var java2 = $("input:radio [name=java2 id=java2Yes]:checked").val(); //name of yes selection
  // var java2 = $("input:radio [name=java2 id=jav2No]:checked").val(); //name of no selection

  var radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").hide(); //this will hide the beginbtn
    $("#cssQuestion").show(); //this will display the first question.
    $("#nextBtn").show();
    $("#nextBtn").click(function() { //when a radio button is selected do the following:
      if (true) { //if #1 question true, do the following:
        $("#welcome").hide(); //hide the jumbotron
        $("#cssQuestion").hide();
        $("#nextBtn").hide();
        $("#result").show("#displayResult" + "CSS/Design course!"); //display CSS/Design course.
      }
      else { //if #2 question NOT TRUE, do the following:
          $("#cSharpQuestion").show(); // display question #2
          $("cSharpYes").click(function() { //when a radio button is selected do the following:
            if (true) { //if #2 question true
              $("#welcome").hide(); //hide the jumbotron
              $("#cSharpQuestion").hide();
              $("#nextBtn").hide();
              $("#result").show("You should join the #C course!"); //display #C course
            }
            else { // if #2 question NOT TRUE
                $("phpQuestion").show(); //display question #3
                $("phpYes").click(function() { //when a radio button is selected do the following:
                  if (true) { //if #3 question true
                    $("#welcome").hide(); //hide the jumbotron
                    $("#phpQuestion").hide();
                    $("#nextBtn").hide();
                    $("#result").show("You should join the Java course!"); //display Java course
                  }
                  else { // if #3 question NOT TRUE
                      $("java1Question").show();  //show question #4
                      $("java1Yes").click(function() { //when a radio button is selected do the following:
                        if (true) { //if #4 question true
                          $("#welcome").hide(); //hide the jumbotron
                          $("#java1Question").hide();
                          $("#nextBtn").hide();
                          $("#result").show("You should join the PHP course!"); //display PHP course
                        }
                        else {  // if #4 question NOT TRUE
                          $("java2Question").show(); //display qustion #5.
                          $("java2Yes").click(function() {
                            if (true) { // if #5 question true do the following
                              $("#welcome").hide(); //hide the jumbotron
                              $("#java2Question").hide();
                              $("#nextBtn").hide();
                              $("#result").show("You should join the Java course!"); //display Java course.
                            }
                            else { //if #5 question NOT TRUE
                                $("#welcome").hide(); //hide the jumbotron
                                $("#result").show("You should join the PHP course!"); //display php course.
                            }
                          });
                        }
                      });
                  }
                });
            }
          });
      }
    });

    event.preventDefault();
  });
});

    //below is my first attempt at radio button section. Never got the first .show to work but want keep the code below so I can try to figure it out during the weekend.
    //declare varables for all the inputs of the questions, which will be used in the if/else statements below.
    // var cssResponse = $("input:radio[name=radioBtn]:checked").val;
    // var cSharpResponse = $("input:radio[name=radioBtn]:checked").val;
    // var phpResponse = $("input:radio[name=radioBtn]:checked").val;
    // var java1Response = $("input:radio[name=radioBtn]:checked").val;
    // var java2Response = $("input:radio[name=radioBtn]:checked").val;

    // $("#cssResponse").click(function() {
    //  if (true) { //if the first answer is yes, then replace the jumbotron with the text below.
    //     $("#welcome").hide();
    //     $("#result").show("You should join the CSS/Design course!");
    //  }
    //   else {
    //     $("#welcome").hide();
    //     $("#result").show("You should join the PHP course!");
