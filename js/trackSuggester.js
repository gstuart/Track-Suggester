$(document).ready(function() {
  radioChoice = $("input:radio[class=radioBtn]:checked").val; // variable for all question selections, whether yes or no.
  $("button#beginBtn").click(function() { // when the button is clicked, do the following:
    $("button#beginBtn").hide(); // hide the beginbtn
    $(".jumbotron").hide(); // hide the jubmotron
    $("#questions").show(); // display the form and panels
    $("button#submitBtn").show(); // show the form submit button
    $("button#submitBtn").submit(function() { //when submit button is clicked, do the following:
      $("#questions").fadeOut(); // hide #questions
      $("button#submitBtn").hide();// hide #submitBtn
      // function to determine which course user should take.
      if (true) {
        $("input:radio[id=javaDscrptn]:checked").val(); // if in question1 the value "java" is selected then
        $("#result").show(#javaDscrptn); // display #result section of jumbotron with #javaDscrptn
      } // closes if statement
        else if (true) {
          $("input:radio[id=rubyDscrptn]:checked").val(); // else if question1 the value "ruby" is selected then
          $("#result").show(#rubyDscrptn); // display #result with #rubyDscrptn
        } // closes first else if statement
        else if (true) {
          $("input:radio[id=cSharpDscrptn]:checked").val(); // else if question1 the value "cSharp" is selected then
          $("#result").show(#cSharpDscrptn); // display #result with #cSharpDscrptn
        } // closes second else if statement
      else {
        $("#result").show(#phpDscrptn); // display #result section of jumbotron with #phpDscrptn
      } // closes else statement
    }); //closes submitbtn click

    event.preventDefault();
  }); //closes beginbtn click
}); //closes document.ready
