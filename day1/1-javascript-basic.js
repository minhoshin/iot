let num = 10;
let doubleNum = 3.14;
let singleChar = 'a';
let longChar = 'rasberry pi is so fun';

console.log(typeof num);
console.log(typeof doubleNum);
console.log(typeof singleChar);
console.log(typeof longChar);

console.log(num);
console.log(doubleNum);
console.log(singleChar);
console.log(longChar);

https://repl.it/

// 변수 선언
const a = 1;
let a = 2;
var = 3;

// 자료형
let a = '';
let b = 0;
let c = false;
let d = null;
let e = undefined;
let f = [];
let g = {};
let h = function() {};

// 배열
let member = ['minho', 'shin', 'yegin'];

// 객체
let user = {
    name: 'minho',
    age: 40
};

// 함수
function addOne(x) {
    return x+3;
}
addOne(3);

// 조건문
let a = 20;
if(a > 10){
    console.log('true');
}

for(let i=0; i<10; i++){
    console.log(i);
}

let j=0;
while(j<10){
    console.log(j);
    j++;
}

let j=0;
while(j<10){
    if(j>5){
        break;
    }
    console.log(j);
    j++;
}

let k=0;
while(k<10){
    if(k%2 === 0){
        continue; // 아래를 실행하지 않음
    }
    console.log(k);
    k++;
}

const http = require('http');
console.log(http);

setInterval( () => {
	console.log('hi');
}, 1000);
