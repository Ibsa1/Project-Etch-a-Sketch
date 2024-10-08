//take input from customer


let fatherDiv = document.querySelector('.container');
/*
let childDiv = document.createElement('div');

childDiv.classList.add('child');
childDiv.style.border = "solid 2px black";
childDiv.style.width = "40px";
childDiv.style.height = "40px";

fatherDiv.appendChild(childDiv);

*/



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

let userInput = parseInt(prompt("Please Enter Value: "));

while(userInput>100){
    userInput = parseInt(prompt("Please Enter Value: "));
}
let childDivMeasurement = 880/userInput;
addDivs(userInput);
