let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen')

function buttonClick(value){
    if (isNaN(value)){
        //this is not a number
        handleSymbol(value);
    }
    else{
        //this is a number 
        //shouldn't it have parseInt() along with value?
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    // if(symbol === 'C'){
    //     buffer = '0';
    //     runningTotal = 0;
    // }

    console.log('handleSymbol', symbol);

    switch(symbol){
        case 'C':
            //needs to clear out all values to zero
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            } 
            
                flushOperation(parseInt(buffer));
                previousOperator = null;
                buffer = runningTotal
                runningTotal = 0;
                break;
        case '&larr;':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case '&times;':           
        case '&divide;':
        case '+':
        case '-':
            HandleMath(symbol);
            break;        
        
        // case '&times;':
        //     //needs to store first item and clear out buffer
        //     runningTotal = buffer;
        //     buffer = 0;
        //     previousOperator = '*' ;
        //     break;
            
            
        // case '&divide;':
        //     break;
        // case '+':
        //     break;
        // case'-':
        //     break;

        // case '=':
        //     //this needs to take the final buffer and add it to the running total and previousOperator and convert to math and solve
        //     runningTotal = parseInt(runningTotal) + previousOperator + parseInt(buffer));
        //     break;

    }
};

function HandleMath(symbol) {
    if(buffer === '0') {
        //do nothing
        return;
    } 
    const intBuffer = +buffer; // the + is short hand for parseInt()
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperatoin(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

///could use a switch case here
function flushOperation(intBuffer) {
    if (previousOperator === "+"){
        runningTotal += intBuffer;
    } else if (previousOperator === "-"){
        runningTotal -= intBuffer;
    } else if (previousOperator === "&times;") {
        runningTotal *= intBuffer;
    } else (previousOperator === "&divide;") {
        runningTotal /= intBuffer;
    };
};

function handleNumber(numberString){
    if (buffer === "0"){
        buffer = numberString
    } else{
        buffer += numberString 
    };
    //proves it works but doesn't yet display onto screen yet
    // console.log('buffer', buffer)

};

function init () {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        });
}
//without this the function will not run 
init();