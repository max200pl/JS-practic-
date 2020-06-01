//? CLOSURES
//* EXAMPLE 1
/*
 function createCalcFunction(n) {
     return function () {  // данная функция вызывается в контексте функции родителя
          console.log(1000 * n) // переменная n была замкнута в функции которую мы возвращаем
     }
 }

 const calc = createCalcFunction(42)
 //* calc -- это функция, из функции createCalcFunction()
 calc() // когда вызываем значение переменной n уже присутствует (получаем доступ до scoop верхней функции)
*/

//* EXAMPLE 2
/*
 function creatIncrementor(n) {
     return function (num) {
          return n + num
     }
 }
 const addOne = creatIncrementor(1) // произошло замыкание переменной (n)
 const addTen = creatIncrementor(10) // произошло замыкание переменной (n)

 console.log(addOne(10));
 console.log(addOne(22));

 console.log(addTen(10));
 console.log(addTen(41));
*/

//* EXAMPLE 3
/*
 function urlGenerator(domain) {
     return function (url) {
          return `https://${url}.${domain}`
     }
 }

 const comUrl = urlGenerator('com')
 const ruUrl = urlGenerator('ru')

 console.log(comUrl('google'));
 console.log(comUrl('netflix'));

 console.log(ruUrl('yandex'));
 console.log(ruUrl('vkontakte'));
*/

//* EXAMPLE 4

function bind(context, fn) {
     return function (...args) {
          fn.apply(context, args)
     }
}

function logPerson() {
     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person2 = { name: 'Елена', age: 19, job: 'SMM' }

bind(person1, logPerson)()
bind(person2, logPerson)()
