var currentQuestion=0;
var score=0;
var totQuestions=questions.length;

var container=document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nextButton=document.getElementById('nextButton');
var resultCont=document.getElementById('result');

function loadQuestion(questionIndex){
  var q=questions[questionIndex];
  questionEl.textContent=(questionIndex + 1) + '. ' + q.question;
  opt1.textContent=q.option1;
  opt2.textContent=q.option2;
  opt3.textContent=q.option3;
  opt4.textContent=q.option4;
  document.getElementById("op1").value=q.option1;
  document.getElementById("op2").value=q.option2;
  document.getElementById("op3").value=q.option3;
  document.getElementById("op4").value=q.option4;
}

/* while loading next question */
function loadNextQuestion(){
  var selectedOption=document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select your answer !!');
    return;
  }

/*score updation*/
  var answer=selectedOption.value;
  if(questions[currentQuestion].answer == answer){
     score= score + 10;
  }
  currentQuestion++;
  if(currentQuestion==totQuestions - 1){
    nextButton.textContent='Finish';
  }
  /*score display*/
  if(currentQuestion==totQuestions){
    container.style.display='none';
    resultCont.style.display='';
    if(score>=70){
    resultCont.textContent='Your score: ' + score + ' Good Work !!';
                 }
    else{
      resultCont.textContent='Your score: ' + score + ' Keep Trying !!';
    }
    return;
  }

  loadQuestion(currentQuestion);
  document.getElementById("op1").checked=false;
  document.getElementById("op2").checked=false;
  document.getElementById("op3").checked=false;
  document.getElementById("op4").checked=false;
}
loadQuestion(currentQuestion);

