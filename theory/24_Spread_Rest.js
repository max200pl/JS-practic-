//? Spread and Rest

//? ============ Spread ============

/**
 ** 1) Разворачивает все его элементы (Убирает из него массив)
 ** 2) Клонирование массивов
 ** 3) Возможность работы с объектами ({}) 
   ** 3.1) -- оборачиваем в фигурные скобки 
   ** 3.2) -- создаем новый объект 
 ** 4) Умные соединение объектов  
 ** 4.1) -- при одинаковых ключах выводим последний 
*/

//* EXAMPLE 1 -- работа с массивами 
/* 
     const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
     const citiesEurope = ['Берлин', 'Прага', 'Париж']

     //* Получаем набор строк 
     console.log(...citiesRussia) // --> Москва Санкт-Петербург Казань Новосибирск
     console.log(...citiesEurope)

     const allCities = [...citiesRussia] //* Клонирование массива 
     const allCities = [...citiesRussia, ...citiesEurope] //* Объединение  
     const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope] //* Вставки  
     console.log(allCities)

     //! Старый метод ES5
     const allCities = citiesEurope.concat(citiesRussia)  
     console.log(allCities);
*/

//* EXAMPLE 2 -- работа с объектами 
/* 
     const citiesRussiaWithPopulation = {
          Moscow: 20, //! 
          SaintPetersburg: 8,
          Kazan: 5,
          Novosibirsk: 3
     }

     const citiesEuropeWithPopulation = {
          Moscow: 26, //! Выведется последний 
          Berlin: 10,
          Prague: 3,
          Paris: 2
     }

     console.log({ ...citiesRussiaWithPopulation }) // создали новый объект 
     console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})  //! Выведется последний 
*/

//* EXAMPLE 3 -- проблемы с типами данных 
/* 
     const numbers = [5, 37, 42, 16]
     console.log(Math.max(5, 37, 42, 16)) // --> 42

*     //! console.log(Math.max(numbers)) // --> Nan // не правильно массив данная функция не принимает 

     console.log(Math.max(...numbers)) // --> 42 

     //* Старая версия 
     console.log(Math.max.apply(null, numbers)) 
*/

//* EXAMPLE 4 -- конвертация типов данных 
/* 
     const divs = document.querySelectorAll('div') // --> получаем NideList коллекцию DOM элементов 
     const nodes = [...divs] // конвертируем коллекцию элементов в массив 
     console.log(divs, Array.isArray(divs)) // получаем коллекцию DOM элементов 
     console.log(nodes, Array.isArray(nodes)) // Array.isArray -- является ли массивом элемент 
*/

//? ============ Rest ============

/**
 * 1) Такой же синтаксис
 * 2) Собирает оставшиеся аргументы в новый массив или объект
*/

//* EXAMPLE 1 -- сборка оставшихся аргументов  
/* 
     function sum(a, b, ...rest) {
          return a + b + rest.reduce((a, i) => a + i, 0) // .reduce -- принимает аккумулятор и начальное значение 
     }

     const numbers = [1, 2, 3, 4, 5]
  
     console.log(sum(...numbers)) // уже используем Spread 
*/

//* EXAMPLE 2 -- деструктуризация массива на основе rest 
/* 
     const numbers = [1, 2, 3, 4, 5]

     //* старый синтаксис
     const a = numbers[0]
     const b = numbers[1]

     //* новый синтаксис
     const [a, b, ...other] = numbers // получаем все остальные значения 

     console.log(a, b, other)
*/

//* EXAMPLE 3 -- деструктуризация объекта на основе rest 
/* 
     const person = {
          name: 'Max',
          age: '24',
          city: 'Moscow',
          country: 'Russia'
     }

     const { name, age, ...address } = person

     console.log(name, age, address)
*/