$(document).ready(function() {
  $("button#beginBtn").click(function() {
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      $("#questions, button#submitBtn").hide();
      var q6Selection = $("input:radio[name=question6]:checked").val();
      if (q6Selection === "java") {
        $("#javaDscrptn, #result").show(); //this is were my error was. I was trying to combine them in a different way I found in one of my googling another bug but that didn't work. Lesson learned: stick to what I know from the lesson until I have more experience and hopefully I can save myself 5 hours of debugging time. I would still like to know how to make the prior code work, if it is possible.
      }
        else if (q6Selection === "ruby") {
          $("#result, #rubyDscrptn").show();
        }
        else if (q6Selection === "cSharp") {
          $("#result, #cSharpDscrptn").show();
        }
        else if (q6Selection === "php") {
          $("#result, #phpDscrptn").show();
        }
      else {
        alert("Please select an answer for all questions.")
        $("#questions, button#submitBtn").show();
      }
      event.preventDefault();
    });
  });
});
