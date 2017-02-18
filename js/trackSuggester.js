$(document).ready(function() {
  radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

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
