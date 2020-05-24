//? 1) Number (примитивы)
// const num = 41 // integer
// const float = 22.11 // float
// const pow = 10e3

// console.log(num)

// есть глобальная сущность Number, String, Array
// Number заранее созданный объект который присутствует в языке   
// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); // <-- 9007199254740992 // максимальное число с которыми мы можем делать операции
// console.log('Math.pow(2, 53)', Math.pow(2, 53) - 1); //.pow метод возведения в степень <-- 9007199254740992
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER); // <--  -9007199254740992
// console.log("Number.MAX_VALUE", Number.MAX_VALUE); // самое максимальное число 
// console.log("Number.MIN_VALUE", Number.MIN_VALUE); // самое минимальное число 
// console.log(Number.NEGATIVE_INFINITY); // 2/0
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NaN); // not a number
// console.log(typeof NaN); // string

//* Бесконечность 
// console.log(2 / undefined); // Nan
// const weird = 2 / undefined
// console.log(isNaN(weird)); // true
// console.log(Number.isNaN(42)); // false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(33)); // true

//* Приведение к числу 
// const stringInt = "40"
// console.log(stringInt + 2); // string 422 
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

//* приведение к числу с плавающей точкой 
// const stringFloat = "40.42"
// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);
// console.log(0.4 + 0.2) // --> 0.6000000000000001
// console.log(2 / 5) + (1 / 5) // --> 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)); // string 0.1 
// console.log(+(0.4 + 0.2).toFixed(1)); // number 0.1 
// console.log(parseFloat((0.4 + 0.2).toFixed(1))); // number 0.1 


//? 2) BigInt --> новый тип данных 

// console.log(typeof 9007199254740991999999n);
// console.log(-9007199254740991999999n);
// // console.log(-9007199254740991999999.12321n); error
// // console.log(10n - 4); // error 

// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));


//? 3) Math  --> object

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25)); // квадратный корень
// console.log(Math.pow(5, 3)); // возведение в степень 
// console.log(Math.abs(-42)); // модуль
// console.log(Math.max(42, 12, 33, 11)); //  42 максимальное число 
// console.log(Math.min(42, 12, 33, 11)); // 11 минимальное число 
// console.log(Math.floor(3.8)); // 3  всегда округляет в меньшую сторону 
// console.log(Math.ceil(3.8)); // 4 всегда округляет в большую сторону 
// console.log(Math.round(3.8)); //4
// console.log(Math.trunc(3.8)); // 4 
// console.log(Math.random()); // 0.5646465464656546

// 3 example
// function getRandom(min, max) {
//      return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandom(10, 41))



