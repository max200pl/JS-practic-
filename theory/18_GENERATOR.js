//? GENERATOR

/**
 ** 1) Некоторые функции которые могут выдавать результат её работы
 ** 2) function* -- символ * обозначает генератор
 ** 3) yield -- порционно выдает результат наружу
 ** 4) У функции генератора есть метод .next() -- есть два ключа {value: "", done: false}
*/

//* EXAMPLE 1 -- Посимвольный вывод 
/*
     function* strGenerator() {
          yield 'H' // Object { value: "H", done: false }
          yield 'E' // Object { value: "E", done: false }
          yield 'L'
          yield 'L'
          yield 'O'
          //* str.next() --> Object { value: undefined, done: true }
     }

     const str = strGenerator()
*/

//* EXAMPLE 2 -- Посимвольный вывод с применением цикла
/*
     function* numberGen(n = 10) {
          for (let i = 0; i < n; i++) {
               yield i  // для выдачи результата так как исп. генератор
          }
     }

     const num = numberGen(7)
     //* num.next() --> Object { value: undefined, done: true }
*/

//* EXAMPLE 3  -- Имитация генератора! 
/**
 * for-of -- работает со специальными типом данных Symbol()
 * Если у объекта определен специальный тип данных Symbol() то цикл может с ним работать
 * В прототипах у массивов, строк есть тип данных Symbol(iterator)
*/
/*
     const iterator = {
          [Symbol.iterator](n = 10) { //! объявление ключа [Symbol.iterator]
               let i = 0

               return { // возвращаем объект
                    next() { // возвращаем функцию как у генератора
                         if (i < n) {
                              return { value: ++i, done: false }
                         }
                         return { value: undefined, done: true }
                    }
               }
          }
     }
*/
// console --> const itr = iterator.gen()
// iter.net() --> Object { value: undefined, done: true }
/*
     for (const k of iterator) {
          console.log(k);
     }
*/
//* EXAMPLE 4 
/*
     for (const k of 'hello') {
          console.log(k); // посимвольный вывод в консоль (работа со строками)
     }

     for (const k of [1, 2, 3, 4, 5, 6, 7, 8,]) {
          console.log(k); // посимвольный вывод в консоль (работа со массивами)
     }
*/

//* EXAMPLE 5  -- -- Посимвольный вывод с применением цикла
/**
 * В генераторы уже п умолчанию определен [Symbol.iterator]
*/

/*
     function* iter(n = 10) {
          for (let i = 0; i < n; i++) {
               yield i
          }
     }

     for (const k of iter(6)) {
          console.log(k);
     }
*/
