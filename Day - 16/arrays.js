//Creation of an array
let a = [10,20,30,40,50,60,70,20,30,40];
let b = new Array("a","b","c","d","e");
console.log(a);
console.log(b);
//Accessing
console.log(a[3]);
console.log(b[2]);
//Modification
a[3] = 35;
console.log(a);
b[0] = "Sai";
console.log(b);
//Array Methods
//Push
a.push(100);
console.log(a);
//pop
a.pop();
console.log(a);
//unshift
a.unshift(10.20);
console.log(a);
//shift
a.shift()
console.log(a);
//slice
console.log(a.slice(6));
console.log(a.slice(3,7));
console.log(a.slice(2,8));
//concat
let x = a.concat(b);
let y = b.concat(a);
console.log(x);
console.log(y);
//join
console.log(b.join(" $ "));
//indexof()
console.log(a.indexOf(70));
//foreach
a.forEach(function(i){
    console.log(i);
});
//Map
let z = a.map(function(i){
    return i+1;
});
console.log(z);
//Filter
let z1 = z.filter(function(i){
    return i%3==0;
});
console.log(z1);
//Reduce
let res = a.reduce(function(accumulator,cv){
    return accumulator+cv;
},0);
console.log(res);