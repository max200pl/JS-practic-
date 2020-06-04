//? Array

//const cars = ['Мазда', 'форд', 'БМВ']
// const people = [
//    { name: 'Max', budget: 1000 },
//    { name: 'Elena', budget: 2200 },
//    { name: 'Victoria', budget: 3000 }
// ]
//const fib = [1, 2, 3, 4, 6, 14]

//console.log(cars);

// если функция вызывается в контексте объекта, она называется методом 
// Function:
function addItemToEnd() {
}
// Method:
// cars.push("Мустанг")
// console.log(cars);
// cars.unshift("Волга")

// console.log(cars.reverse());
// console.log(cars);


// const index = cars.indexOf('Мазда') // возвращает индекс
//cars[index] = "Porsche"
//console.log(cars);


//? =========== МЕТОДЫ ВЫСОКОГО ПОРЯДКА

//* Получение индекса объекта в массиве 
// const index = people.findIndex(function (person) { //  .findIndex является циклом 
//    // console.log(person); // каждый элемент массива 
//    return person.budget === 3000
// })
// console.log(people[index]);

//* Аналогично получения индекса через .find
// const person = people.find(function (person) { //  .findIndex является циклом 
// console.log(person); // каждый элемент массива 
//    return person.budget === 3000 // если нет элемента undefined 
// })
// console.log(person);

//* Получение индекса через цикл
// let findPerson
// for (const person of people) {
//    console.log(person); // выводим все элементы массива 
//    if (person.budget === 3000) {
//       findPerson = person
//    }
// }
// console.log(person);

//* Получение индекса с переминанием стрелочной функции 
// const person = people.find(person => person.budget === 3000) // лямбда функции 
// console.log(person);

//* Проверка на наличие элемента 
// console.log(cars.includes('Мазда!')); // false

//* Изменение массива на основе его клона по методу .map
// const upperCaseCars = cars.map(car => { // метод .map возвращает новый массив 
//    return car.toUpperCase()
// })
// console.log(upperCaseCars);

//* Возведение в степень с применением стрелочной функции 
// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib);

//* Передача функции в метод 
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2) // передаем функцию в метод (декларативный подход)
// console.log(pow2Fib);


//* Применение двух методов 
// const upperCaseCars = cars.map(car => {
//    return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib);

//* Фильтрация массива метод filter возвращает также новый массив 
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumber = pow2Fib.filter(num => {  // num принимает значение на каждой итерации массива //
//    return num > 20
// })
// Элементы функционального программирования 
// const filteredNumber = pow2Fib.filter(num => num > 20)  // num принимает значение на каждой итерации массива //
// console.log(pow2Fib); // не отсортированный 
// console.log(filteredNumber); // отсортированный 


//* МЕТОД  .reduce
// const people = [
//    { name: 'Max', budget: 1000 },
//    { name: 'Elena', budget: 2200 },
//    { name: 'Victoria', budget: 3000 }
// ]
//** Метод .reduce
//  *  - первый параметр function -- принимает аккумулятор (acc), обновляется на каждой итерации массива 
//  *  - второй параметр начальное значение 
//  * 
//  *  Применятся channing в js -- цепочка вызовов методов
// */
// const allBudget = people
//    .filter(person => person.budget > 2000) // возвращаем новый массив 
//    .reduce((acc, person) => { // у массива есть метод .reduce
//       acc += person.budget
//       return acc
//    }, 0)

// console.log(allBudget)

//*Задача 1--Реверс строки 
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('') // получаем массив
// console.log(reverseText);

//? MAIN METHOD ARRAYS 

/**
 ** 1) for    === итерация массива по объектам //!ES5
 ** 2) for-of === итерация массива по объектам //!ES6
 */

const people = [
     { name: 'Max', budget: '4000', age: 25 },
     { name: 'Elena', budget: '3400', age: 22 },
     { name: 'Victor', budget: '500', age: 15 },
     { name: 'Vasilis', budget: '1000', age: 35 }
]

//* for end for-of
/*   //! синтаксис ES5
     for (let i = 0; i < people.length; i++) {
          const element = people[i];
          console.log(element);
     }
*/
/*   //! синтаксис ES6
     for (const person of people) {
          console.log(person);
     }
 */
//? METHOD .forEach

/**
 **  1) Принимает параметр функцию
 **  2) Работаем с родителем
 */

//* EXAMPLE 1 
/*   //! синтаксис ES5
     people.forEach(function (person, index, pArr) {
          console.log(person); // каждый объект массива
          console.log(index);  // каждый индекс массива
          console.log(pArr);   // сам массив
     })
*/
//* EXAMPLE 1.1 abridged version 
/*   //! синтаксис ES5
     people.forEach(function (person) {
          console.log(person)
     })
*/

//* EXAMPLE 1.2 abridged version
/*      //! синтаксис ES6
     people.forEach(person => console.log(person))
*/

//? METHOD .map

/**
 ** 1) Создаем новый массив и заносим в новую переменную
 ** 2) На основе текущего массива создаем новый и формируем
*/

//* EXAMPLE 1 
/*      //! синтаксис ES6
     const newPeople = people.map(person => {
/*         //return person
/*         // return 'hello'     //* преобразовываем каждый объект в строки
/*         // return person.name //* обращение к ключу объекта в массиве
/*         // return ` ${person.name} (${person.age})` //* возвращаем строку с шаблонизацией
          return person.age * 3 //* работа с числами
     })
     console.log(newPeople);
 */
//? METHOD .filter

/**
 ** 1) Также принимает три параметра:
 ** 1.1) object; id; array;
 ** 2) Необходимо вернуть true либо false
 ** 2.1) true - если я хочу оставить элемент в массиве
 */

//* EXAMPLE 1 not use method Filter
/*   //! синтаксис ES5
     const adults = []
     for (let i = 0; i < people.length; i++) {
          if (people[i].age >= 18) {
               adults.push(people[i])
          }
     }
     console.log(adults)
*/

//* EXAMPLE 2
/*   //! синтаксис ES6
     const adults = people.filter(person => {
          if (person.age >= 18) {
               return true
          }
     })
     console.log(adults)
*/
//* EXAMPLE 2.1 abridged version
/*   //! синтаксис ES6
     const adults = people.filter(person => person.age >= 18)
     console.log(adults)
*/

//? METHOD .reduce

/**
 ** 1) Для получения финального значения после итерации массива
 ** 2) Принимает два параметра:
 ** 2.1) CallBack (сумма, итерируемый элемент)
 ** 2.1) Начальное значение
*/

//* EXAMPLE 1 not use method Reduce
/*   //! синтаксис ES5
     let amount = 0
     for (let i = 0; i < people.length; i++) {
          amount += people[i].budget
     }
     console.log(amount);
*/

//* EXAMPLE 2  -- Сумма всего бюджета всех объектов 
/*
     const amount = people.reduce((total, person) => {
          return total + person.budget // total по умолчанию 0
     }, 0)

     console.log(amount);
*/

//* EXAMPLE 2.1 abridged version 

/*
     const amount = people.reduce((total, person) => total + person.budget, 0)
     console.log(amount)
*/

//? METHOD .find

/**
 ** По условию найти нужный элемент
 ** Принимает: CallBack (переменная, итерируемый элемент === элемента который нужен)
*/

//* EXAMPLE 1 
/*
     const max = people.find(person => person.name === 'Max')
     console.log(max)
*/

//? METHOD .findIndex

/**
 ** По условию найти нужный id
*/
/* 
     const maxIndex = people.findIndex(person => person.name === 'Max')
     console.log(maxIndex)

*/

//* EXAMPLE 1 -- MAIN METHOD ARRAYS
/**
 * 1) Фильтруем людей по бюджету .filter
 * 2) Получаем новый массив      .filter
 * 3) Генерируем новый массив    .map
 *   3.1) Новое поле info
 *   3.2) Новое поле budget 
 * 4) Считаем суммарный бюджет  .reduce
*/
const amount = people
     .filter(person => person.budget > 3000)
     .map(person => {
          return {
               info: `${person.name} (${person.age})`,
               budget: Math.sqrt(person.budget)
          }
     })
     .reduce((total, person) => total + person.budget, 0)

console.log(amount);