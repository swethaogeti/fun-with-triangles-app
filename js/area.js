const side=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenese-btn");
const outputText=document.querySelector("#output-text");

const areaBtn=document.querySelector("#area-btn");

areaBtn.addEventListener("click",triangleArea);


function calculateArea(a,b){
    const area= (0.5)*(a)*(b);
    return area;
}

function triangleArea(){


    let base=Number(side[0].value);
    let height=Number(side[1].value);


    if((side[0].value!=="") &&(side[1].value!=="")){
        if( (Math.sign(base)=== 1) && (Math.sign(height)=== 1)){
            const area= calculateArea(base,height);
         showOutputTxt(area);
            
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



function showMessage(msg){
    outputText.innerText=msg;
    outputText.style.backgroundColor="rgb(163, 232, 235)";
     outputText.style.border="1px solid black"
}

function showOutputTxt(a){
    outputText.innerText= "The Area of a Triangle is "+a.toFixed(2);
    outputText.style.backgroundColor="rgb(163, 232, 235)";
     outputText.style.border="1px solid black"
}