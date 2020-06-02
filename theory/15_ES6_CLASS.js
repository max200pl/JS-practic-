//? ES6 CLASS

//* EXAMPLE 1 
/*
     const animal = {
          name: 'Animal',
          age: 5,
          hatTail: true
     }
*/
//* EXAMPLE 2
/*
     class Animal {

          static type = 'ANIMAL'  // статический метод доступен у родительского класса -->  Animal.type

          constructor(options) {  //! родительский конструктор
               this.name = options.name
               this.age = options.age
               this.hatTail = options.hatTail
          }
          voice() { // попадает в прототип const animal
               console.log('I am Animal');
          }
     }

     //* Некий прототип class Animal 
     const animal = new Animal({ // c помощью ключевого слова new  указываем от какого класса будем создавать
          name: 'Animal',
          age: 5,
          hatTail: true
     })

     class Cat extends Animal { //! class Cat наследуется от класса Animal
          static type = 'CAT'

          constructor(options) {
               super(options) // метод  super()  //! для вызова родительского конструктора
               this.color = options.color
          }

          voice() { //! переписываем родительский метода
               super.voice() // вызов родительского метода
               console.log('I am cat');
          }

          get ageInfo() { //! обращаемся к классу это не метод а поле
               return this.age * 7
          }

          set ageInfo(newAge) {  //! изменяем поля класса
               this.age = newAge
          }
     }

     const cat = new Cat({
          name: 'Cat',
          age: 7,
          hasTail: true,
          color: 'black'
     })
*/

//* EXAMPLE 3

class Component {
     constructor(selector) {
          this.$el = document.querySelector(selector) // $ - обычно содержащее dom node 
     }
     //* ДВА метода:
     hide() {
          this.$el.style.display = 'none'
     }
     show() {
          this.$el.style.display = 'block'
     }
}

class Box extends Component {
     constructor(options) {
          super(options.selector)   // вызов конструктора для доступа к переменной  //! this.$el

          this.$el.style.width = this.$el.style.height = options.size + 'px'
          this.$el.style.background = options.color
     }
}
const box1 = new Box({ // ! Создаем объект с параметрами 
     selector: '#box1',
     size: 100,
     color: 'red',
})

const box2 = new Box({ // ! Создаем 2 объект с параметрами 
     selector: '#box2',
     size: 100,
     color: 'blue',
})

class Circle extends Box { // ! Создаем класс который наследуется от Box 
     constructor(options) {
          super(options) // вызов конструктора

          this.$el.style.borderRadius = '50%'
     }
}

const c = new Circle({ // ! Создаем 3 объект с параметрами 
     selector: '#circle',
     size: 100,
     color: 'black',
})