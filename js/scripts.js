$(document).ready(function() {
  $("button#beginBtn").click(function() {
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      $("#questions, button#submitBtn").hide();
      var q6Selection = $("input:radio[name=question6]:checked").val();
      if (q6Selection === "java") {
        $("#javaDscrptn").show();
        $("#result").show();
      }
        else if (q6Selection === "ruby") {
          $("#result").show();
          $("#rubyDscrptn").show();
        }
        else if (q6Selection === "cSharp") {
          $("#result").show();
          $("#cSharpDscrptn").show();
        }
        else if (q6Selection === "php") {
          $("#result").show();
          $("#phpDscrptn").show();
        }
      else {
        alert("Please select an answer for all questions.")
        $("#questions, button#submitBtn").show();
      }
      event.preventDefault();
    });
  });
}); //closes document.ready
