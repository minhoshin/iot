let num = 10;
let doubleNum = 3.14;
let singleChar = 'a';
let longChar = 'rasberry is so fun';

console.log(typeof num);
console.log(typeof doubleNum);
console.log(typeof singleChar);
console.log(typeof longChar);

console.log(num);
console.log(doubleNum);
console.log(singleChar);
console.log(longChar);

const http = require('http');
console.log(http);

setInterval( () => {
	console.log('hi');
}, 1000);

let a = true;
let b = 1;
while(a){
	b++;
	console.log(`b is ${b}`);
	if(b === 10) a = false;
	console.log(`a is ${a}`);
};
