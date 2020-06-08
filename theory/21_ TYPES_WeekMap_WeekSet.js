//? COLLECTIONS TYPES: WeekMap; WeekSet;


//? ============== WeekMap ====================
/**
 ** 1) Избегать различных утечек данных 
 ** 2) Ключами могу быть только объекты 
 ** 3) WeakMap - слабая карта 
 ** 4) get, set, delete, has -- из за специфики только эти методы 
 ** 5) Ключами могут быть только объекты 
 ** 6) Невозможно вычислить размер объекта WeekMap .size 
*/

//* EXAMPLE 1 -- сборщик мусора 

/**
 ** 1) Удаление объекта если ссылки на него отсутствуют 
 ** 2) Ключами могут быть объекты если мы удалили ссылку на объект (обнулили объект)
 **       2.1) Происходит утечка памяти так как не возможно получить данные по ключу объекта 
 */

/*      
     let obj = { name: 'WeekMap' }
     const arr = [obj]   // сохраняем в arr тем самым сохранили 
     obj = null          // затирание объекта если переменная не где не используется 

     console.log(obj)    // null
     console.log(arr[0]) // { name: 'WeekMap' }
*/

//* EXAMPLE 2 -- Обращение и размеры к картам WeekMap
/* 
     let obj = { name: 'WeekMap' }

     const map = new WeakMap([
          [obj, 'Obj data']
     ])

     obj = null // обнуляем данный объект 

     console.log(map)
     console.log(map.get(obj))  // --> Obj data
     console.log(map.has(obj))  // --> false
*/

//* EXAMPLE 3 -- работа с кэшем удаление из кэша не нужной информации 
/* 
     const cache = new WeekMap()

     function cacheUser(user) {
          // если нет пользователя добавляем с датой 
          if (!cache.has(user)) {
               cache.set(user, Date.now())
          }
          return cache.get(user)
     }

     let lena = { name: 'Elena' }
     let alex = { name: 'Alex' }

     cacheUser(lena)
     cacheUser(alex)

     lena = null  // затираем лену из кэша 

     console.log(cache.has(lena))
     console.log(cache.has(alex)) 
 */


//? ============== WeekSet ====================

/**
 ** 1) Ключи также object 
 ** 2) Если объект зачищается сборщиком мусора он удаляется 
 ** 3) Можем только пользоваться методом .has
*/

//* EXAMPLE 1

const users = [
     { name: 'Elena' },
     { name: 'Alex' },
     { name: 'Irish' },
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.splice(1, 1) // удаление объекта 

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))
