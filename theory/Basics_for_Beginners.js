//?=============== ИСТОРИЯ РАЗВИТИЯ JS ===========

/**
 *  --------EcmaScript --------(следила)
 *  lifeScript ----> JavaScript
 *  Microsoft
 */

/**
 * jQuery библиотека (для стандартизации)
*/

/**
 * 2005-2007г.
 *  - Изменения глобальные пошли
 *
 * 2009г - NodeJS изобрели
 * 1) Вытащил движок с браузера и получил серверный js
 *
 * 2015 - EcmaScript 2015(ES6) // самые глобальные:
 * 1) class ...
 *
 * 2020г js
 * 1) frameworks
 * 2) frontend
 * 3) backend (NodeJS)
 * 4) Mobile (REACT NATIVE ...)
 * 5) Desktop (IOS ...)
 */

//? BASIC JS 

//* 1 variable 

// var name = "Max200pl"
// const lastName = "Max200pl"
// let age = 26
// const _private = "private"

//* 2 Мутирование
// console.log('Name person' + lastName + ', and age' + age); // variable age .toString 
// console.log(age.toString);

//* 3 IPI функции которые присутствуют только в браузере 
//  функция alert() не присутствует в js она присутствует в браузере 
// const lastName = prompt('Ведите фамилию') // prompt returns value 
// alert(lastName + '' + name)

//* 4 Операторы 
// const c = 2020
// const a = 1994
//* //c = c+a
// c += a

//* 5 Типы данных 

// const isProgrammer = true
// const name = 'Max'
// const age = 25
// console.log(typeof name); // тип данных 

//* 6 ПРИМИТИВЫ:
// Boolean
// String
// Number
// Undefined
// null 
//console.log(typeof null); // data type : object

//* 7 Приоритет операторов

// const fullAge = 25
// const birthYear = 1994
// const currentYear = 2020
// const isFullAge = currentYear - birthYear >= fullAge

//() самый высокий Приоритет

//* 8 Условные операторы 
// const courseStatus = "pending"

// if (courseStatus === 'ready') {
//      console.log('Курс уже готов');
// }

// const num = 42// number
// const num2 = "42"// string

// console.log(num == num2) // проверка только по значению;
// console.log(num === num2) // проверка и по типам данных;
// js динамически типизируемый язык

// let num = true

// if (num) {
//      console.log('Ok');
// } else {
//      console.log('false');
// }
// тернарные выражения 
// num ? console.log('Ok') : console.log('false');

//* 9 Булевая логика 

//* 10 Функции
// function calculateAge(year) {
//      return 2020 - year
// }
//console.log(calculateAge(1993))

// function logInfoAbout(name, year) {
//      const age = calculateAge(year)

//      if (age > 0) {
//           console.log('человек по имени' + name + 'сейчас имеет возраст' + age);
//      } else {
//           console.log('Это будущее');
//      }
// }

// logInfoAbout('MAX', '1994')
// logInfoAbout('Elena', '1996')


//* 11 Массивы 
// const cars = new Array['Мазда', 'Мерседес', 'Форд']
// console.log(cars);

// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars.length);

// cars[0] = 'Porsche'
// console.log(cars);

// cars[cars.length] = 'Mazda' // в последний элемент массива 
// console.log(cars);

//* 12 Циклы

const cars = ['Мазда', 'Мерседес', 'Форд']

// for (let i = 0; i < cars.length; i++) {
//      const car = cars[i];
//      console.log(car);
// }
// более лаконичный новый цикл 
// for (const car of cars) {
//      console.log(car);
// }

//* 13 Объекты

// Группировка ---> в объект мы группируем различные значения  
// старый синтаксис 
// const person = new Object(arguments); {
// }

const person = {
     firstName: 'Max',
     lastName: 'Poskannyi',
     year: 1994,
     lang: ['ru', 'En'],
     hasWife: false,
     greet: function () {
          console.log('greet')
     }
}

// console.log(person.firstName)
// person.greet()

// есть объект и у них есть свойства 

// Обращение через точку  person.firstName
// Обращение через массив person['lastName']

const key = "lang"
console.log(person[key])
person.hasWife = true
console.log(person);
person.isProgrammer = true
console.log(person);
//















