$(document).ready(function() {
//radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.
  $("button#beginBtn").click(function() { // when the button is clicked, do the following:
    $("button#beginBtn").hide(); // hide the beginbtn
    $(".jumbotron").hide(); // hide the jubmotron
    $("#questions").show(); // display the form and panels
    $("button#submitBtn").show(); // show the form submit button
    $("button#submitBtn").submit(function() { //when submit button is clicked, do the following:
      $("#questions").fadeOut(); // hide #questions
      $("button#submitBtn").hide();// hide #submitBtn
      // function to determine which course user should take.
        // if in question1 the value "java" is selected then
          $("#result").show("Based on your selections, you should join the <bold><em>Java</bold></em> course! + #javaDscrptn"); // display #result section of jumbotron with ("Based on your selections, you should go into the <bold><em>Java</bold></em> course. + #javaDscrptn").

          // else if question1 the value "ruby" is selected then
          $("#result").show("Based on your selections, you should join the <bold><em>Ruby</bold></em> course. + #rubyDscrptn"); // display #result with ("Based on your selections, you should go into the <bold><em>Ruby</bold></em> course. + #rubyDscrptn")

          // else if question1 the value "cSharp" is selected then
          $("#result").show("Based on your selections, you should join the <bold><em>C#</bold></em> course. + #cSharpDscrptn"); // display #result with ("Based on your selections, you should go into the <bold><em>C#</bold></em> course. + #cSharpDscrptn")

        //else
          $("#result").show("Based on your selections, you should join the <bold><em>PHP</bold></em> course. + #phpDscrptn"); // display #result section of jumbotron with ("Based on your selections, you should go into the <bold><em>PHP</bold></em> course. + #phpDscrptn")
    }); //closes submitbtn click

    event.preventDefault();
  }); //closes beginbtn click
}); //closes document.ready
