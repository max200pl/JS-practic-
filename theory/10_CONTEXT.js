//? CONTEXT (this)

//* Указывает на тот объект в контексте которого было вызвано 
//* То что стоит слева от точки когда вызываем функцию 
//* window.hello() --> this --> window.<---
//! this === window === tr
function hello() {
     console.log('Hello', this);
}

const person = {
     name: 'Max',
     age: 25,
     sayHello: hello,
     sayHelloWindow: hello.bind(document),
     logInfo: function (job, phone) {
          console.group(`${this.name} info:`)
          console.log(`Name is ${this.name}`);
          console.log(`Name is ${this.age}`);
          console.log(`Job is ${job}`);
          console.log(`Phone is ${phone}`);
          console.groupEnd();
     }
}

//* Забандить данный контекст через метод .bind(window)
//* Метод .bind() вызывает новую функцию которая имеет некий контекст


const lena = {
     name: 'lena',
     age: 23
}

// const fnLenaInfolog = person.logInfo.bind(lena, 'Frontend', '8-9999-7889-978')
// fnLenaInfolog()
//* Применение метода .call
/**
 1) Не вызывает функцию 
 2) Передает новый контекст 
 */

person.logInfo.bind(lena, 'Frontend', '8-9999-7889-978')()

//* Применение метода .call
/**
 1) Сразу вызывает функцию
 2) Также передает контекст 
 */
person.logInfo.call(lena, 'Frontend', '8-9999-7889-978')

//* Применение метода .apply
/**
 1) Передаем только два параметра 
 2) Принимает массив аргументов 
*/
person.logInfo.apply(lena, ['Frontend', '8-9999-7889-978'])




