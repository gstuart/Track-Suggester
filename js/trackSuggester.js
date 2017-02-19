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
        //
    }); //closes submitbtn click

    event.preventDefault();
  }); //closes beginbtn click
}); //closes document.ready
