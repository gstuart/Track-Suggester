$(document).ready(function() {
  //radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

  $("button#beginBtn").click(function() { // when the button is clicked do the following:
    $("button#beginBtn").hide(); //this will hide the beginbtn
    $(".jumbotron").hide(); //this will hide the jubmotron
    $("#questions").show(); //this will display the form.
    $("button#submitBtn").show();
    $("button#submitBtn").submit(function() {
      $("#questions").fadeOut(); // hide #questions
      // hide #submitBtn
      // function to determine which course user should take.
        // if in question1 the value "java" is selected then
          // display #welcome
          // dispaly ("Based on your selections, you should go into the <bold><em>Java</bold></em> course. + #javaDscrptn")

          // else if question1 the value "ruby" is selected then
          // display #welcome
          // dispaly "Based on your selections, you should go into the <bold><em>Ruby</bold></em> course. + #rubyDscrptn") in #welcome section

          // else if question1 the value "cSharp" is selected then
          // display #welcome
          // dispaly ("Based on your selections, you should go into the <bold><em>C#</bold></em> course. + #cSharpDscrptn") in #welcome section

        //else
          // display #welcome 
          // display ("Based on your selections, you should go into the <bold><em>PHP</bold></em> course. + #phpDscrptn") in #welcome section
    }); //closes submitbtn click

    event.preventDefault();
  }); //closes beginbtn click
}); //closes document.ready
