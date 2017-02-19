$(document).ready(function() {
  // business, or back-end, logic:
  var userSelection = $("input:radio[name=question6]:checked").val(); // variable for all selections selection

  // user interface, or front-end, logic:
  $("button#beginBtn").click(function() { // when the button is clicked, do the following:
    $("button#beginBtn").hide(); // hide the beginbtn
    $("#welcome").hide(); // hide the jubmotron
    $("#questions").show(); // display the form and panels
    $("button#submitBtn").show(); // show the form submit button
    $("button#submitBtn").click(function() { //when submit button is clicked, do the following:
      $("#questions").hide(); // hide #questions
      $("button#submitBtn").hide(); // hide #submitBtn
      // function to determine which course description to display.
      var result;
      if (userSelection === "java") {
        result = javaDscrptn; // display #javaDscrption within #result section
      } // closes first else if statement
        else if (userSelection === "ruby") {
        result = rubyDscrptn; // display #rubyDscrptn within #result section
        } // closes second else if statement
        else if (userSelection === "cSharp") {
        result = cSharpDscrptn; // display #cSharpDscrptn within #result section
        } // closes third else if statement
        else if (userSelection === "php") {
          result = phpDscrptn; // display #phpDscrption within #result section
        } // closes fourth else if statement
      else {
        alert("Please select an answer for all questions.") // displays if none of the selections in question6 are made.
      } // closes else statement
      $("#result").text(result);

      event.preventDefault();
    }); //closes submitbtn click
  }); //closes beginbtn click
}); //closes document.ready
