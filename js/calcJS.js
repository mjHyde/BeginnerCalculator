//lets start with trying to make the button call a value when it is hit

//made a const value to get the div with the calc buttons on it but
//it returned an empty HTML collection. when using query select for
//button i got "an array" with all buttons but when i tried to attach
//the the alert function to it, it would only return on the first value
//went to try and use .forEach but was getting errors. 
// const buttons = document.getElementsByClassName('.calc-buttons');

let total = "";
//solution has it solely as a function as opposed to storing it into 
//a const or let. is this common? how to know when to do it? practice?
function init() { 
    document.querySelector('.calc-buttons')
        .addEventListener('click', event => {
            buttonClick(event.target.innerText);
        });
};

function buttonClick(value) {
    //using typeof i know console.log(value) is a string
    //console.log((value));
    
    if (parseInt(value)===NaN){
            handleSymbol();
    }
    else{
            handleNumber();
    }
};

//why have an empty function call? is this needed for function that rely
//on event listeners
init();


function clear() {
    if (buttonClick(value) === "C"){ 
        screen = 0;
    }
}









