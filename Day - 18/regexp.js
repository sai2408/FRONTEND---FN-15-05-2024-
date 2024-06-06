var pattern = /\d/g;
var text = "The price is 25 rupees";
var x = text.match(pattern);
console.log(x);

var pattern = /\D/g;
var text = "The price is 25 rupees";
var x = text.match(pattern);
console.log(x);

var pattern = /\s/g;
var text = "The price is 25 rupees";
var x = text.match(pattern);
console.log(x);

var pattern = /\S/g;
var text = "The price is 25 rupees";
var x = text.match(pattern);
console.log(x);

var pattern = /\w/g;
var text = "The price is 25_rupees$";
var x = text.match(pattern);
console.log(x);

var pattern = /\W/g;
var text = "The price is 25_rupees$";
var x = text.match(pattern);
console.log(x);

var pattern = /\bprice/g;
var text = "The price is 25_rupees$";
var x = text.match(pattern);
console.log(x);

var pattern = /h.t/g;
var text = "The cat weat hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /^The/g;
var text = "The cat weat hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /hat$/g;
var text = "The cat weat hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /ha*t/g;
var text = "The cat weat hot haat ht";
var x = text.match(pattern);
console.log(x);

var pattern = /ha+t/g;
var text = "The cat weat hot haat ht";
var x = text.match(pattern);
console.log(x);

var pattern = /hats?/g;
var text = "The cat weat hot hat";
var x = text.match(pattern);
console.log(x);

var pattern = /\d{3}-\d{3}-\d{4}/g;
var text = "789-357-0611";
var x = text.match(pattern);
console.log(x);

var pattern = /[ch]at/g;
var text = "The cat weat hot hat ht";
var x = text.match(pattern);
console.log(x);

var pattern = /hot|hat|cat/g;
var text = "The cat weat hot hat ht";
var x = text.match(pattern);
console.log(x);