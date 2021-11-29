const quizForm=document.querySelector(".quiz-form");
const submitQuiz=document.querySelector("#submit-quiz");
const outputText=document.querySelector("#output-text");

const correctAnswers={question1:"90°",
                      question2:"180°",
                      question3:"right",
                      question4:"equilateral",
                      question5:"Hypotenuse"};
function calculateScore(){
  var userAnswers=new FormData(quizForm);
  var userScore=0;
  var index=0;
  for([Question,Answer] of userAnswers.entries()){
    index++;
    if(correctAnswers[Question]===Answer ){
       userScore++;
    }
}
if(index===0){                   
  outputText.innerHTML="empty form!";
  outputText.style.backgroundColor="rgb(163, 232, 235)"

}else{
 showMessage(index, userScore);
}

     
     
}

submitQuiz.addEventListener("click",calculateScore);


function showMessage( attempted,msg){

  outputText.innerText=`You attempted ${attempted} and scored ${msg} / 5. `;
  outputText.style.border="1px solid black";
  outputText.style.backgroundColor="rgb(163, 232, 235)";
}