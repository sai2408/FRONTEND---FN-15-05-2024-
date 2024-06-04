var obj1 = {
    a : 10,
    b : 20,
    c : 30
}
var obj2 = new Object();
obj2.x = 100;
obj2.y = 200;
obj2.z = 300;

console.log(obj1);
console.log(obj2);
//Accessing 
console.log(obj1.a);
console.log(obj2["y"]);
//Adding
obj1.d = 40;
console.log(obj1);
obj2["z1"] = 400;
console.log(obj2);

//Modification
obj1.b = 20.45;
console.log(obj1);
obj2["z"] = 300.45;
console.log(obj2);
//Delete
delete obj1.d;
console.log(obj1);
delete obj2["z1"];
console.log(obj2);

//Methods
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));