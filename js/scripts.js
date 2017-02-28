var result = function(q6Selection){
  if (q6Selection === "java") {
    $("#javaDscrptn, #result").show();
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
return result;
};

// Front-end logic below this line
$(document).ready(function() {
  $("button#beginBtn").click(function(event) {
    event.preventDefault();
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      $("#questions, button#submitBtn").hide();
      var q6Selection = $("input:radio[name=question6]:checked").val();
      var output = result(q6Selection);
    });
  });
});
