/*var x = new RegExp("/S.*n/","img");
var y = /S.*n/img;

console.log(x.global);
console.log(y.global);

console.log(y.test("sai vardhan"));
console.log(y.exec("Sai vardhan"));
*/
var x = new String("Sai Vardhan");
console.log(x.search(/v.*n/i));
var z = new String("abc Abc abc");
console.log(z.match(/abc/gi));
var x = new String("abc Abc abc");
console.log(x.replace(/abc/gi,"xyz"));