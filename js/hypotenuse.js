const side=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenese-btn");
const outputText=document.querySelector("#output-text");

hypotenuseBtn.addEventListener("click",calculateHypotenuse)

function calculateHypotenuse(){

    
    var base=Number(side[0].value);
    var height=Number(side[1].value);

    if((side[0].value!=="") &&(side[1].value!=="")){
        if( (Math.sign(base)=== 1) && (Math.sign(height)=== 1)){
            const sumOfSquares=calculatesumOfSquares(base,height);
            const lenghtOfHypotenuse=Math.sqrt(sumOfSquares);
         showOutputTxt(lenghtOfHypotenuse);
            
        }else if((Math.sign(base)=== -1) || (Math.sign(height)=== -1)){
            
            showMessage("Input fields cant't be negative, enter greater values.")

        }else if((Math.sign(base)=== 0) || (Math.sign(height)=== 0)){
            showMessage("Input fields cant't be zero, enter greater values.")

        }
    }else if((side[0].value=== "") && (side[1].value=== "")){
       
        showMessage("All the input fields are empty, enter input fields.")
    }else if((side[0].value=== "") || (side[1].value=== "")){
        showMessage("Incomplete input fields, enter all input fields.")
    }
}

function calculatesumOfSquares(a,b){
    const sumOfSquares= a*a + b*b;
    return sumOfSquares;
}


function showMessage(msg){
    outputText.innerText=msg;
    outputText.style.backgroundColor="rgb(163, 232, 235)";
     outputText.style.border="1px solid black"
}

function showOutputTxt(hyp){
    outputText.innerText= "The lenght of hypotenuse is "+
    hyp.toFixed(2);
    outputText.style.backgroundColor="rgb(163, 232, 235)";
     outputText.style.border="1px solid black"
}