
let fatherDiv = document.querySelector('.container');


function addDivs(userInput){
    
    for(let i=1; i<=userInput; i++){
        let calculatedOpacity = 0.09;
        for(let j=1; j<=userInput; j++){

            let childDiv = document.createElement('div');
            childDiv.classList.add('child');
            childDiv.style.border = "solid 2px black";
            childDiv.style.width = childDivMeasurement + "px";
            childDiv.style.height = childDivMeasurement + "px";
            //childDiv.textContent = calculatedOpacity;
            childDiv.textContent = calculatedOpacity.toFixed(1); // Display the opacity value
            
            childDiv.addEventListener("mouseover", function() {
                childDiv.style.backgroundColor = "yellow"; // Change to the desired hover background color
                childDiv.style.opacity = calculatedOpacity;
            });
            
            childDiv.addEventListener("mouseout", function() {
                childDiv.style.opacity = 1; // Reset opacity
                childDiv.style.backgroundColor = "white"; // Reset to original background color
            });
            

            fatherDiv.appendChild(childDiv);

            //calculatedOpacity += 0.1;
            calculatedOpacity = Math.min(calculatedOpacity + 0.1, 1);
        }
        
    }
}

let isButtonClicked = false;

const btn = document.querySelector(".noOfSquares");
btn.addEventListener("click", noOfSquareInput);


let childDivMeasurement = 0;

function noOfSquareInput(){

    let userInput = parseInt(prompt("Please Enter Value: "));

    while(userInput>100 || userInput<1){
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




