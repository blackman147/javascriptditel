// question 1
var firstNumber = parseInt(prompt("Enter first number"));
var secondNumber = parseInt(prompt("Enter second number"));

function condition(){
    
    if(firstNumber + secondNumber == 50 || firstNumber == 50 || secondNumber == 50){
        return true;
    }else{
        return false;
    }
}
console.log(condition())

// question 2
var firstInterger = parseInt(prompt("Enter first number"));
var secondInteger = parseInt(prompt("Enter second number"));

function checkingNumber(){
    if(firstInterger > 0 && secondInteger < 0 || firstInterger < 0 && secondInteger > 0 ){
        return true;
    }else{
        return false;
    }
}    
console.log(checkingNumber());

// question 3
var a = 5;
var b = 6;
var c = 7;

var s = a + b + c / 2;
console.log(s);

var area = Math.sqrt(s *(s - a) * (s - b) * (s - c));

console.log(area);


// question 4

function toArray(){
    var array = [];
    var userInput;

    for (let index = 0; index < 5; index++) {
        userInput = prompt("Enter a number");
        array.push(userInput);
        console.log(array);
    }
   
    return array;
}

console.log(toArray());

// question 5

var firstAmount = parseInt(prompt("Enter the first amount"));
var secondAmount = parseInt(prompt("Enter the second amount"));
var subCharge = 0;

function addWithSubCharge(){
    
    if(firstAmount <= 10 || secondAmount <= 10){
        subCharge = 1;
    }else if(firstAmount > 10 || secondAmount > 10){
        subCharge = 2;
    }
    var charge = firstAmount + secondAmount + subCharge;
    return charge;
}
console.log(addWithSubCharge());

//question 6
function rotate(){
    var array = [1, 2, 3, 4, 5, 6];
     temp = array[0];
    for (i = 0; i < array.length -1; i++) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = temp;

    return array;

}
console.log(rotate());


// ap generator

function ApCalculator(){
    var firstNumber = parseInt(prompt("Enter first number"));
    var secondNumber = parseInt(prompt("Enter second number"));
    var thirdNumber = parseInt(prompt("Enter third number"));
    var n;

    if ((secondNumber - firstNumber) == (thirdNumber - secondNumber)) {

        const difference = thirdNumber - secondNumber;

        var nextNumber = firstNumber + (n - 1)* difference;
    }
    return nextNumber;  
}


console.log(ApCalculator());


// question 7

function integerSummation(){
    var firstInteger = parseInt(prompt("Enter a number: "));
    var secondInteger = parseInt(prompt("Enter a number: "));
    var sum = firstInteger + secondInteger;
    if (firstInteger == secondInteger) {
        return sum * 3;
        
    }else {
        return sum;
    }
}

console.log(integerSummation());


// question 9

function concatStrings(){
    var myColor = ["Red", "Green", "White", "Black"];
    var string = myColor.join();
    console.log('"' + string + '"') ;
}
 concatStrings();

// question 10
const array = [3, 4, 5, 7, 8];
let sum = 0;
let product = 1;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];   
}
console.log("the sum of the element in the array is: " + sum);
console.log("the product of all the elements in the array is: " + product)


// question 11

function sandwitchCalculator(){
    var value = parseInt(prompt("Enter number of slices"));
    amountOfSandwitch = value / 2;
    console.log( "Amount of sandwitches made is: " + amountOfSandwitch);

}
sandwitchCalculator();



   
    





