$(document).ready(function() {
  radioChoice = $("input:radio[id=radioBtn]:checked").val; // variable for all question selections, whether yes or no.

  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").hide(); //this will hide the beginbtn
    $(".jumbotron").hide(); //this will hide the jubmotron
    $("#form").show(); //this will display the form.
    $("#submitBtn").show();

    });

    event.preventDefault();
  });
});
