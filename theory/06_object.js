//? Object

const person = {
     name: "Max",
     age: 25,
     isProgrammer: true,
     languages: ['ru', 'en'],
     'complex key': 'Complex Value',
     ['' + (1 + 3)]: 'Computed Key', // key_4
     greet() {  // метод greet
          console.log('greet from person');
     },
     info() {
          console.log('this:', this);
          console.info('Информация человека по имени', this.name) // this это person
     }
}
// console.log(person);
// console.log(person.name);
// const ageKey = 'age';
// console.log(person['age']);
// console.log(person['complex key']);
// person.greet()

// person.age++
// person.languages.push('by')

// delete person['ket_4']

//* Деструктуризация 
// const name = person.name
// const age = person.age
// const languages = person.languages
// const { name, age: personAge = 10, languages } = person

//* Перебрать объект 
console.log(person);
//! цикл for in он опасен:
//* он бежит не только по ключам на и заходит на его прототипы
// for (const key in person) { // ket набор ключей объекта 
//      if (person.hasOwnProperty(key)) {
//           console.log('key', key);
//           console.log('value', person[key]); // получаем все элементы объекта 
//      }
// }
//* Более новый метод перебора объекта не бежит по прототипам
// Object.keys(person).forEach((key) => {   // .forEach делает итерацию по массиву
//      console.log('key', key);
//      console.log('value', person[key]); // получаем все элементы объекта 
// })

//* Context
//person.info()
/**
 * function создает свой новый контекст 
 * 
 * const self = this 
 * .bind(this)
 * arrow function использует родительский контекст 
 */
const logger = {
     keys() {
          console.log('Object Keys', Object.keys(this));
     },

     keysAndValues() {
          Object.keys(this).forEach(key => {
               console.log(`"${key}": ${this[key]}`);
          })
     },

     widthParam(top = false, between = false, bottom = false) {
          if (top) {
               console.log('------------- start -------');
          }
          Object.keys(this).forEach((key, index, array) => {
               console.log(`"${key}": ${this[key]}`);
               if (between && index !== array.length - 1) { // если не последний элемент тогда вывод
                    console.log('--------------------');
               }
          })

          if (bottom) {
               console.log('------------- END -------');
          }
     }
}
// const bound = logger.keys.bind(person)   // метод .bind() привязывает определенный контекст и возвращает функцию ()
// bound()

//logger.keys.call(person)  // метод .call() привязывает определенный контекст и сразу возвращает и вызывает функцию 

//logger.keysAndValues.call(person)

logger.widthParam.call(person, true, true, true)
logger.widthParam.apply(person, [true, true, true])