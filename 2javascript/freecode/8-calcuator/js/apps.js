/* 
    1. Listen and capture all the button events.
    2. When an event occurs, depending on the button, I will do +-x/
    3. For any operation, I have to get values from the text boxes too.
*/

// Function to get values fro, text input
getValues = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    resultObject = {
        "number1": number1,
        "number2": number2
    }
    return resultObject;
}

// function to set the display text
showResult = function(result) {
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
}

// Plus operation
plusButton = document.getElementById("plusButton");
plusOperation = function() {
    
    numberValues = getValues();
    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
    showResult(sum);
}

plusButton.addEventListener("click", plusOperation);

// Minus operation
minusButton = document.getElementById("minusButton");
minusOperation = function() {
    numberValues = getValues();
    difference = parseInt(numberValues.number1) - parseInt(numberValues.number2);
    showResult(difference);
}

minusButton.addEventListener("click", minusOperation);

// Multiple operation
mulButton = document.getElementById("mulButton");
mulOperation = function() {
    numberValues = getValues();
    multiple = parseInt(numberValues.number1) * parseInt(numberValues.number2);
    showResult(multiple);
}

mulButton.addEventListener("click", mulOperation);

// Div operation
divButton = document.getElementById("divButton");
divOperation = function() {
    numberValues = getValues();
    div = parseInt(numberValues.number1) / parseInt(numberValues.number2);
    showResult(div);
}

divButton.addEventListener("click", divOperation);