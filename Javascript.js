
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
    //let buttonContainer = document.querySelector(".buttonContainer"); //remove the button after each display
    //buttonContainer.createElement('p');


}

let userInput = parseInt(prompt("Please Enter Value: "));

    while(userInput>100){
        userInput = parseInt(prompt("Please Enter Value: "));
    }
let childDivMeasurement = 880/userInput;
addDivs(userInput);


//let userInput = parseInt(prompt("Please Enter Value: "));
/*
const btn = document.querySelector(".noOfSquares");
userInput = btn.addEventListener("click", squareInput);
console.log(userInput);
*/

/*
function squareInput(){
    let customerInput = parseInt(prompt("Please Enter Value: "));

    //while(customerInput>100){
    //    customerInput = parseInt(prompt("Please Enter Value: "));
    //}
    //let childDivMeasurement = 880/userInput;
    //addDivs(customerInput);
    return customerInput;
}

*/
