//? COLLECTIONS TYPES WeekMap
/**
 ** 1) Избегать различных утечек данных 
 ** 2) Ключами могу быть только объекты 
 ** 3) WeakMap - слабая карта 
 ** 4) get, set, delete, has -- из за специфики только эти методы 
*/

//* EXAMPLE 1 -- сборщик мусора 

/**
 ** 1) 
 */
  
     let obj = { name: 'WeekMap' }
     const arr = [obj]   // сохраняем в arr тем самым сохранили 
     obj = null          // затирание объекта если переменная не где не используется 

     console.log(obj)    // null
     console.log(arr[0]) // { name: 'WeekMap' }


//* EXAMPLE 2 -- 

/* 
     let obj = { name: 'WeekMap' }

     const map = new WeakMap([
          [obj, 'Obj data']
     ])
     obj = null
     console.log(map)
     console.log(map.get(obj))
*/
//* EXAMPLE 3 -- 

/* const cache = new WeekMap()

function cacheUser(user) {
     if (!cache.has(user)) {
          cache.set(user, Date.now())
     }
     return cache.get(user)
}

let lena = { name: 'Elena' }
let alex = { name: 'Alex' }

cacheUser(lena)
cacheUser(alex)

//lena = null

console.log(cache.has(lena))
console.log(cache.has(alex)) */