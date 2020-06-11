//? DESTRUCTURING 

//* EXAMPLE 1 -- Деструктуризация массивов 

function calcValues(a, b) {
     return [
          a + b, // sum
          a - b, //undefined, // sub
          a * b, // multi
          a / b
     ]
}

/*     
     //* старый подход
     const result = calcValues(32, 10)
     const sum = result[0]
     const sub = result[1]
     console.log(sum, sub) // --> 42 22
*/
/* 
     //* новый подход
     const result = calcValues(32, 10)
     const [sum, sub] = result
     
     const [sum, sub, multi] = calcValues(42, 10) 

     //* пропускаем один индекс 
     const [sum, , multi, ...other] = calcValues(42, 10) 

     //* значение по умолчанию + оператор ...rest
     const [sum, sub = 'Вычитания нет', multi, ...other] = calcValues(42, 10) // 'Вычитания нет' -- значение по умолчанию (если значение есть то используем)
     console.log(sum, multi, other, sub)
*/

//* EXAMPLE 2 -- Деструктуризация объектов  

const person = {
     name: 'Max',
     age: 20,
     address: {
          country: 'Russia',
          city: 'Moscow'
     }
}
/* 
     const name = person.name

     const { name, age, car = 'Ford' } = person  
*/
/*      
     const {
          name: firstName = 'Maksym', //*  name: firstName -- переименовываем переменную 
          age,
          car = 'Ford',
          address: { city: homeTown, country }
     } = person 
     console.log(firstName, age, car, homeTown, country)
*/
/* 
     const { name, ...info } = person
     console.log(name, info)
*/

//* EXAMPLE 3 -- деструктуризация входных параметров (аргументов) объекта

function logPerson({ name: firstName = "111", age }) {
     console.log(firstName + '' + age)
}

logPerson(person)