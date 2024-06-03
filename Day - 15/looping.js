//While
//while
console.log("While Loop");
var x = 5;
while (x > 0){
    console.log(x);
    x--;
}
//dop while
console.log("Do While Loop");
var x = 5;
do{
    console.log(x);
    x--;
}
while(x > 0);
//FOr
//for
console.log("for Loop");
for(var x=5;x>0;x--){
    console.log(x);
}
//for in
console.log("for In Loop");
var x = {
    a : 10,
    b : 20,
    c : 30
}
for (var xx in x){
    console.log(x[xx]);
}
//for of
console.log("for Of Loop");
var x = [10,20,30,40,50];
for (var xx of x){
    console.log(xx);
}
//Loop controlled statements
//Break
console.log("Break Statement");
for (var x=0;x<5;x++){
    if (x==2){
        break;
    }
    console.log(x);
}
//Continue
console.log("continue Statement");
for (var x=0;x<5;x++){
    if (x==2){
        continue;
    }
    console.log(x);
}


