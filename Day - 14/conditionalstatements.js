//If Condition
var x = 1;
if (x>3){
    console.log("Hello");
}

//If - Else
var x = 1;
if (x>3){
    console.log("Hello");
}
else{
    console.log("World");
}

//If - ElseIf - Else
var x = 20;
if (x > 30){
    console.log("Hello 1");
}
else if (x > 10){
    console.log("Hello 2");
}
else{
    console.log("World");
}

//Switch Case
var x = 2;
switch (x){
    case 1:
        console.log("Hello");
        break;
    case 2:
        console.log("world");
        break;
    default:
        console.log("Default Value");
}

//Nested Conditional ststement
var age = 14;
var card = false;
if (age>=18){
    if (card == true){
        console.log("Eligible for Vote");
    }
    else{
        console.log("Eligible but should not vote");
    }
}
else{
    console.log("Not Eligible for vote");
}