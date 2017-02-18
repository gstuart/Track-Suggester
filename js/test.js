$(document).ready(function() {
  $("#beginBtn").click(function() { // when the button is clicked do the following:
    $("#beginBtn").hide(); //this will hide the beginbtn
    var yes = confirm("Do you think you would most like making webistes look and work well, while obsessing over layouts, navigation, colors, and design? Click OK for yes or Cancel for no.");

    if (yes) {
      $("#welcome").hide(); //hide the jumbotron
      $("#result").show("You should join the CSS/Design course!"); //display CSS/Design course.
    }
    else {
      $("#cSharpQuestion").show();
    }
      event.preventDefault();
  });
});
