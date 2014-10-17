$(document).ready(function(){

var quizQuestion = function(question,option1,option2,option3,correct){
  this.question = question;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.correct = correct;
};	

/* Array of quiz questions, their options, and the correct answer*/
var quiz = new Array();
quiz[0] = new quizQuestion("What is the third planet from the Sun?","Venus","Earth","Mars","Earth");
quiz[1] = new quizQuestion("What is the smallest planet in the Solar System?","Mercury","Venus","Earth","Mercury");
quiz[2] = new quizQuestion("What is the largest planet in the Solar System?","Saturn","Jupiter","Earth","Jupiter");

/*Showing total question count in html*/
$(".totalQuestions").html(quiz.length);

var qNo = 0; // Question number
var correctNo = 0; // Number of answers that were correct
var selectedAnswer; // Selected answer var for that question

/* Function addQuiz to add the next question on quiz on button click*/
var addQuiz = function(){
  $(".question").html(quiz[qNo].question);
  $(".option1").html("<input type='radio' name='question" + qNo + "' value='"+ quiz[qNo].option1 +"'>" + quiz[qNo].option1);
  $(".option2").html("<input type='radio' name='question" + qNo + "' value='"+ quiz[qNo].option2 +"'>" + quiz[qNo].option2);
  $(".option3").html("<input type='radio' name='question" + qNo + "' value='"+ quiz[qNo].option3 +"'>" + quiz[qNo].option3);
};

addQuiz(); //calling on page load

/* Comparing selecred answer wutg correct answer and 
counting the number of answers that were correct*/
var correctCount = function(){
  if(quiz[qNo].correct === selectedAnswer){
    correctNo++;
    console.log("You got correct " + correctNo);
    $(".score").html(correctNo);
  }
};

/* On button click */
$(".button").on("click", function(){
 if (qNo < (quiz.length - 1)) { 
    /* Getting selected answer and calling function to compare with correct answer*/
    selectedAnswer = $("input:radio[name=question" + qNo + "]:checked").val();
    console.log("Correct answer is " + quiz[qNo].correct);
    console.log("Selected answer is " + selectedAnswer);
    correctCount();
    /*Increasing question number count and calling addQuiz to change question*/
    qNo++;
    addQuiz();
    $(".questionNumber").html(qNo + 1);
  }
  else {
    /* Getting selected answer and calling function to compare with correct answer*/
    selectedAnswer = $("input:radio[name=question" + qNo + "]:checked").val();
    console.log("Correct answer is " + quiz[qNo].correct);
    console.log("Selected answer is " + selectedAnswer);
    correctCount();
    console.log("else");
    /*Hiding questions. Showing results*/
    $(".quiz").hide();
    $(".track").hide();
    $(".afterQuiz").show();
  };
});


});

