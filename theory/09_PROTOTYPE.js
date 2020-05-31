//? PROTOTYPE
//* Расширяем свойство объектов и классов 
//* Самый главный класс Object 

const person = new Object({
     name: 'Maxim',
     age: 25,
     greet: function () {
          console.log('greet');
     }
})

//* const person --> proto есть функция .toString()
//* Прототип это объект который присутствует у родительских сущностей 
//* Прототип идет с верху в низ и если находит то сразу открывает если нет то идет дальше по цепочке 

Object.prototype.sayHello = function () {
     console.log('Hello!');
}

const lena = Object.create(person)
lena.name = "Elena"

const str = new String('I am string')



//* Применение прототипов!
const array = [1, 2, 3, 5, 6]

// function multiBy(arr, n) {
//      return arr.map(function (i) {
//           return i * n
//      })
// }
//console.log(multBy(array, 5));

//* Расширение функционала через прототипы
Array.prototype.multiBy = function (n) {
     return this.map(function (i) {
          return i * n
     })
}

console.log(array.multiBy(2));