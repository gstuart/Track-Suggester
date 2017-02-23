$(document).ready(function() {
  $("button#beginBtn").click(function() {
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      $("#questions, button#submitBtn").hide();
      var q6Selection = $("input:radio[name=question6]:checked").val();
      var result;
      if (q6Selection === "java") {
        result = ("#javaDscrptn"); // quotes are needed.
        $("#javaDscrptn").show;
      //  $("#result").show(result); // displays all content within #result section. if content hidden with css, then empty div is displayed. if content unhidden, then all content is displayed
      //  result.show(); //when this is used the welcome screen displayed when submitBtn is clicked and an error is displayed saying this is NOT a function.
      }
        else if (q6Selection === "ruby") {
          alert("ruby result");
          result = rubyDscrptn;
        }
        else if (q6Selection === "cSharp") {
          alert("ruby result");
          result = cSharpDscrptn;
        }
        else if (q6Selection === "php") {
          alert("php result");
          result = phpDscrptn;
        }
      else {
        alert("Please select an answer for all questions.")
        $("#questions, button#submitBtn").show();
      }
      event.preventDefault();
    });
  });
}); //closes document.ready
