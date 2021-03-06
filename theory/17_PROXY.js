//? PROXY

/**
 ** Некоторый класс который позволяет создавать ловушки для объектов классов ...* 
*/

//* EXAMPLE 1 OBJECT -- PROXY 

const person = {
     name: 'Max',
     age: 32,
     job: 'Fullstack'
}

/**
 * 1) в конструктор передаем два парамера (target, набор handler);  
 *  1.1 набор handler -- ловушки для объекта (методы)
 * 2) Proxy повторяет функционал объекта 
 * 3) Организуем ловушки и переписываем функционал 
 * 4) Проксируем объект person и работам с новым объектом op
 */

const op = new Proxy(person, {  // передаем два параметра (person, {})
     get(target, prop) { //ловушка на метод get
          console.log(`Getting prop ${prop}`)
          if (!(prop in target)) { // если такого поля который мы можем получить нет в объекте 
               return prop
                    .split('_')
                    .map(p => target[p])
                    .join('  ')
          }
          return target[prop]
     },
     set(target, prop, value) { //ловушка на метод set
          if (prop in target) {
               target[prop] = value
          } else {
               throw new Error(`No ${prop} field in target`)
          }
     },
     has(target, prop) { // есть ли такое поле в объекте 
          return ['age', 'name', 'job'].includes(prop)
     },
     deleteProperty(target, prop) { // удалять какое либо свойство с объекта 
          console.log('Deleting...', prop);
          delete target[prop]
          return true // если удалили возвращаем true
     }
})

//* EXAMPLE 2 FUNCTIONS -- PROXY  
/**
 * 1) По target можно отследить когда функция будет вызываться 
 * 2) thisArg -- контекст 
 * 3) Массив args -- все параметры которые мы передаем в функцию 
*/

const log = text => `log: ${text}`

const fp = new Proxy(log, {
     apply(target, thisArg, args) {
          console.log('Calling fp...')
          return target.apply(thisArg, args).toUpperCase()
     }
})


//* EXAMPLE 3 CLASSES -- PROXY  
/**
 * 1) new target -- получаем как параметр в construct -- class Person
 * 2) ...args -- передаем все параметры для работы с классом (name, age)
 * 3) 
 */
class Person {
     constructor(name, age) {
          this.name = name
          this.age = age
     }
}

const PersonProxy = new Proxy(Person, { // PersonProxy -- проксируем класс
     construct(target, args) { // ловушка создания объекта  
          //console.log('Construct...')

          //* внутри Proxy инициализируем Proxy
          return new Proxy(new target(...args), {  // new target -- class Person -- так как target получем как аргумент 
               get(t, prop) {
                    console.log(`Getting prop "${prop}"`);
                    return t[prop]
               }
          })
     }
})

const p = new PersonProxy('Maxim', 30)

//* EXAMPLE 4 = Wrapper 

/**
 * Добавление значения по умолчанию ключам если они не определены 
 * 
 * @param {*объект над которым ведем работу} target 
 * @param {*значения по умолчанию} defaultValue 
 */
const withDefaultValue = (target, defaultValue = 0) => {

     //* новое Proxy
     return new Proxy(target, {
          get: (obg, prop) => (prop in obj ? obg[prop] : defaultValue)
     })
}

const position = withDefaultValue(
     {
          x: 24,
          y: 42
     },
     0
)

//* EXAMPLE 4 = Hidden properties

/**
 * Функция обвертка для объекта для скрытия его опр. свойств  
 * 
 * @param {*объект над которым ведем работу} target 
 * @param {*} prefix 
 */
const withHiddenProps = (target, prefix = '_') => {
     return new Proxy(target, {
          //*  Какие поля содержаться в объекте 
          has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)), //.startsWith --> метод у строк

          //* Какие ключи содержатся внутри объекта 
          ownKeys: obj => Reflect.ownKeys(obj) // получаем массив из ключей // Reflect. --> объект для детальной работы с объектом // .ownKeys -- получение ключей 
               //* фильтруем объект от свойств с нижним подчеркиванием 
               .filter(p => !p.startsWith(prefix)),

          //* Отдает свойство объекта (скрыть те элементы которые начинаются с префикса)
          get: (obj, prop, receiver) => (prop in receiver) // prop -- ключи // receiver -- это наш Proxy
               ? obj[prop]
               : void 0
     })
}

const data = withHiddenProps({
     name: 'Max',
     age: 25,
     _uid: '1231312'
})

//* EXAMPLE 5 = Optimization

/**
 *  Нахождение какого либо элемента по id
 *  объект который будет сохранят индекс какого либо ключа и выдавать нам определенный объект 
*/
const IndexArray = new Proxy(Array, { // проксируем целый класс Array
     //* Ловушка на момент когда обращаемся к ключевому слову new 
     construct(target, [args]) {  // [args] === new IndexArray
          const index = {}

          args.forEach(item => (index[item.id] = item))

          return new Proxy(new target(...args), {
               get(arr, prop) {
                    switch (prop) {
                         case 'push':
                              return item => {
                                   index[item.id] = item
                                   arr[prop].call(arr, item)
                              }
                         case 'findById':
                              return id => index[id]
                         default:
                              return arr[prop]
                    }
               }
          })
     }
})

const users = new IndexArray([
     { id: 1, name: 'Max', job: 'Fullstack', age: 25 },
     { id: 2, name: 'Elena', job: 'Student', age: 22 },
     { id: 3, name: 'Victor', job: 'Backend', age: 15 },
     { id: 4, name: 'Vasilis', job: 'Teacher', age: 35 }
])

