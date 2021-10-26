const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputText=document.querySelector("#output-text")


isTriangleBtn.addEventListener("click",isTriangle)


function calculateSumOfAngles(a1,a2,a3){
    const sumOfAngles=a1+a2+a3;
    return sumOfAngles;
}

function isTriangle(){

    var angle1=Number(inputs[0].value);
    var angle2=Number(inputs[1].value);
    var angle3=Number(inputs[2].value);

    ;
if((inputs[0].value!=="") && (inputs[1].value!=="")&& (inputs[2].value!=="") ){

    if( (Math.sign(angle1)=== 1) && (Math.sign(angle2)=== 1) &&(Math.sign(angle3)=== 1) ){
        const sumOfAngles=calculateSumOfAngles(angle1,angle2,angle3)
        if(sumOfAngles===180){
              showMessage("Entered Angles form a Triangle.") 
            }
            else{
               showMessage("Entered Angles can't a Triangle.") 
            }
    }else if((Math.sign(angle1)=== -1) ||(Math.sign(angle2)=== -1) ||(Math.sign(angle3)=== -1) ){

    showMessage("Angles can't be negative, enter greater values.")
    }
    else if((Math.sign(angle1)=== 0) ||(Math.sign(angle2)=== 0) ||(Math.sign(angle3)=== 0) ){

        showMessage("Angles can't be zero, enter greater values.")
        }

}else  if((inputs[0].value==="") && (inputs[1].value==="")&& (inputs[2].value==="")){
    showMessage("All the input fields are empty, enter input fields.")
    
}
else  if((inputs[0].value==="") ||(inputs[1].value==="")|| (inputs[2].value==="")){
    showMessage("Incomplete input fields, enter all the input fields.")
    
}
}



function showMessage(msg){
    outputText.innerText=msg;
    outputText.style.backgroundColor="rgb(163, 232, 235)";
    outputText.style.border="1px solid black"
}

