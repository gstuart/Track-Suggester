$(document).ready(function() {
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
      // business, or back-end, logic:
      // following are commented out until function using them is created.
      // var q1Selection = $("input:radio[name=question1]:checked").val()
      // var q2Selection = $("input:radio[name=question2]:checked").val();
      // var q3Selection = $("input:radio[name=question3]:checked".val();
      // var q4Selection = $("input:radio[name=question4]:checked".val();
      // var q5Selection = $("input:radio[name=question5]:checked".val();
      var q6Selection = $("input:radio[name=question6]:checked").val(); // variable for question6 selections
      var result;
      if (q6Selection === "java") { // if the value of q6 is java, do the following:
        alert("test");
        // result = javaDscrptn; // display #javaDscrption within #result section
        // $("#result").text(result); // display text. this allows alert to display
      //  $("#result").show(javaDscrptn); //this allows the result background to display.
        result.show();
      } // closes first else if statement
        else if (q6Selection === "ruby") {
        result = rubyDscrptn; // display #rubyDscrptn within #result section
        } // closes second else if statement
        else if (q6Selection === "cSharp") {
        result = cSharpDscrptn; // display #cSharpDscrptn within #result section
        } // closes third else if statement
        else if (q6Selection === "php") {
          result = phpDscrptn; // display #phpDscrption within #result section
        } // closes fourth else if statement
      else {
  //      alert("Please select an answer for all questions.") // displays if none of the selections in question6 are made.
      } // closes else statement
      event.preventDefault();
    }); //closes submitbtn click
  }); //closes beginbtn click
}); //closes document.ready
