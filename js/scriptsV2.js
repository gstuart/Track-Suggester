// Back-end logic
var java = [];
var ruby = [];
var cSharp = [];
var php = [];
var answers = ["#java", "#ruby", "#cSharp", "#php"];
//need function to take all the checked values for each question and push them into the corresponding array
  // for each question, if #java is selected then push to java array, else if #ruby, then push to ruby array, else if #cSharp then push cSharp array, else #php then php array.
  var result = function(){
    if selection = "java".push(java);

  };
// then compare each array length to determine which is the longest, and display the corresponding course descrption. If there are two or more with equal length, then display the course selected in question #6.
  // if a > b && a > c && a > d then javaDscrptn, else if b > a && b > c && b > d then rubyDscrptn, else if c > a && c > b && c > d then cSharpDscrptn, else if d > a && d > b && d > c then phpDscrptn, else if .length ==== then display the answer for question6 (use the if statement in current document)


// Front-end logic below this line
$(document).ready(function() {
  $("button#beginBtn").click(function() {
    $("button#beginBtn, #welcome").hide();
    $("#questions, button#submitBtn").show();
    $("button#submitBtn").click(function() {
      event.preventDefault();
      $("#questions, button#submitBtn").hide();
      var selection = $(this).val(); // will this be the variable for each question? SHUT THE DOOR THIS WORKS
      var result = course(selection);
      // var q1Selection = $("input:radio[name=question1]:checked").val();
      // var q2Selection = $("input:radio[name=question2]:checked").val();
      // var q3Selection = $("input:radio[name=question3]:checked").val();
      // var q4Selection = $("input:radio[name=question4]:checked").val();
      // var q5Selection = $("input:radio[name=question4]:checked").val();
      // var q6Selection = $("input:radio[name=question6]:checked").val();
      var output = result(q6Selection);
    });
  });
});
