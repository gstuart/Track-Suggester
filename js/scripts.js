$(document).ready(function() {
  $("button#beginBtn").click(function() {
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      $("#questions, button#submitBtn").hide();
      var q6Selection = $("input:radio[name=question6]:checked").val();
      var result;
      if (q6Selection === "java") {
        result = (#javaDscrptn); 
        $("#result").show(result); // displays all content within #result section.
      //  result.show(); //when this is used the
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
