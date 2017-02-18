$(document).ready(function() {
  radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").fadeOut(); //this will hide the beginbtn
    $(".jumbotron").fadeOut(); //this will hide the jubmotron
    $("#form").fadeIn(); //this will display the form.
    $("#submitBtn").fadeIn();

    event.preventDefault();
  });
});
