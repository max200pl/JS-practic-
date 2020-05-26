//? Array

const cars = ['Мазда', 'форд', 'БМВ']
// const people = [
//    { name: 'Max', budget: 1000 },
//    { name: 'Elena', budget: 2200 },
//    { name: 'Victoria', budget: 3000 }
// ]
const fib = [1, 2, 3, 4, 6, 14]

console.log(cars);

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






