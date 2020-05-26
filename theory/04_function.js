// Functions 

//* Function Declaration
// возможность объявлять переменные до объявления функции
// greet('Max');
// function greet(name) {
// 	console.log('Привет -', name)
// }
//* Functions Expression
// возможность объявлять переменные только после объявления функции 
// const greet2 = function greet2(name) {
// 	console.log('Привет -', name);
// }
// greet2('Lena');
// console.log(typeof greet);
// console.dir(greet) //  функции являются объектами в js

// let counter = 0
//* Anonymous function
// const interval = setInterval(function () {  // setTimeout
// 	if (counter === 5) {
// 		 clearInterval(interval)   // clearTimeout
// 	}else{
// 		console.log(++counter);
// 	}
// }, 1000)

// Arrow function

function greet(name) {
	console.log('Привет -', name)
}

const arrow = (name) => {
	console.log(name);
}
arrow("Max")

const arrow2 = name => console.log('Привет', name);
arrow2("Max")

const pow2 = num => {
	return num ** 2
}
console.log(pow2(5));

//* 4 Параметры по умолчанию
const sum = (a, b = a * 2) => a + b // b = 1 -- параметр по умолчанию
console.log(sum(41, 4));

function sumAll(...all) { // собирает в массив 
	console.log(all);
	let result = 0
	for (let num of all) {
		result += num
	}

	return result
}
const res = sumAll(1, 2, 4)
console.log(res);

//* 5 Замыкания 
function creatMember(name) {
	return function (lastName) {
		console.log(name + lastName);
	}
}

const logWidthLastName = creatMember("Max")
console.log(logWidthLastName);
console.log(logWidthLastName('Poskannyi'));