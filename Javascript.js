
let fatherDiv = document.querySelector('.container');


function addDivs(userInput){
    for(let i=0; i<userInput; i++){
        
        for(let j=0; j<userInput; j++){

            let childDiv = document.createElement('div');
            childDiv.classList.add('child');
            childDiv.style.border = "solid 2px black";
            childDiv.style.width = childDivMeasurement + "px";
            childDiv.style.height = childDivMeasurement + "px";

            fatherDiv.appendChild(childDiv);
        }
    }
}

let isButtonClicked = false;

const btn = document.querySelector(".noOfSquares");
btn.addEventListener("click", noOfSquareInput);


let childDivMeasurement = 0;

function noOfSquareInput(){

    let userInput = parseInt(prompt("Please Enter Value: "));

    while(userInput>100){
        userInput = parseInt(prompt("Please Enter Value: "));
    }

    if(isButtonClicked){
        //fatherDiv.innerHTML = ""; // Clear the container. Option 1
        fatherDiv.replaceChildren();  // Clear the container. OPtion 2
    }

    childDivMeasurement = 880/userInput;
    addDivs(userInput);
    isButtonClicked=true;   
}




