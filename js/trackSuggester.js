$(document).ready(function() {
  // business, or back-end, logic:
  var javaInput = $("input:radio[value=java]:checked").val; // variable for all java selections
  var rubyInput = $("input:radio[value=ruby]:checked").val; // variable for all ruby selections
  var cSharpInput = $("input:radio[value=cSharp]:checked").val; //variable for all c# selections
  var phpInput = $("input:radio[value=php]:checked").val; // variable for all php selections

  // user interface, or front-end, logic:
  $("button#beginBtn").click(function() { // when the button is clicked, do the following:
    $("button#beginBtn").hide(); // hide the beginbtn
    $(".jumbotron").hide(); // hide the jubmotron
    $("#questions").show(); // display the form and panels
    $("button#submitBtn").show(); // show the form submit button
    $("button#submitBtn").click(function() { //when submit button is clicked, do the following:
      $("#questions").fadeOut(); // hide #questions
      $("button#submitBtn").hide(); // hide #submitBtn
      $("#result").show(); // show results section
      // function to determine which course user should take.
      if (javaInput) {
        alert("java");
        $("#javaDscrptn").show(); // display #javaDscrption within #result section
      } // closes if statement
        else if (rubyInput) {
          alert("esle if #1 - ruby");
          $("#result#rubyDscrptn").show(); // display #rubyDscrptn within #result section
        } // closes first else if statement
        else if (cSharpInput) {
          alert("else if #2 - c#");
          $("#result#cSharpDscrptn").show(); // display #cSharpDscrptn within #result section
        } // closes second else if statement
      else {
        alert("esle - php");
        $("#result#phpDscrptn").show(); // display #phpDscrption within #result section
      } // closes else statement

      event.preventDefault();

    }); //closes submitbtn click
  }); //closes beginbtn click
}); //closes document.ready
