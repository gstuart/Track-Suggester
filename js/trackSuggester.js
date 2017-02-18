$(document).ready(function() {
  radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

  $("button#beginBtn").click(function() { // when the button is clicked do the following:
    $("button#beginBtn").fadeOut(); //this will hide the beginbtn
    $(".jumbotron").fadeOut(); //this will hide the jubmotron
    $("#form").fadeIn(); //this will display the form.
    $("button#submitBtn").fadeIn();

    event.preventDefault();
  });
});
