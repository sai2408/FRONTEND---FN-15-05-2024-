//fUNCTION IMPLEMENTATIONN METHODS
//Normal function Declaration
function hello1(){
    console.log("Hello World 1");
}
hello1();
//function Expression
var hello2 = function(){
    console.log("Hello World 2");
}
hello2();
//Arrow functions
var hello3 = ()=>{
    console.log("Hello World 3");
}
hello3();
//IIFE
(function(){
    console.log("Hello World 4");
})();
//Named Function expression
var hello5 = function hello(){
    console.log("Hello World 5");
}
hello5();

//Types Of User defined Functions
//WP - WR
function fun1(a,b){
    return a+b;
}
var x = fun1(10,20);
console.log(x);
//WP - WOR
function fun2(users,slices){
    var totalslices = users*slices;
    if ((totalslices%4)==0){
        console.log(totalslices/4);
    }
    else{
        console.log(parseInt(totalslices/4)+1);
    }
}
fun2(3,2);
fun2(5,4);
fun2(10,2);
//WOP - WR
function fun3(){
    return 10;
}
console.log(fun3());
//WOP - WOR
function fun4(){
    console.log("Last type of function");
}
fun4()