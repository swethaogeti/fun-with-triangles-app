const quizForm=document.querySelector(".quiz-form");
const submitQuiz=document.querySelector("#submit-quiz");
const outputText=document.querySelector("#output-text");

const correctAnswers=["90°","180°","right","equilateral","Hypotenuse"];
function calculateScore(){
    let score = 0;
    let  index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        
    
        if(value === correctAnswers[index]){ 
          score++;  
        }
        index=index+1;
          
        
    }
  showMessage(score)
     
     
}

submitQuiz.addEventListener("click",calculateScore);


function showMessage(msg){
  outputText.innerText=`You scored ${msg} out of 5. `;
  outputText.style.border="1px solid black";
  outputText.style.backgroundColor="rgb(163, 232, 235)";
}