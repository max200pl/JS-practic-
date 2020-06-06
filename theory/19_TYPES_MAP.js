//? COLLECTIONS TYPES MAP

//* class Map

/**
 ** 1) структура данных Map по функционалу похожа на объекты 
*/

//* EXAMPLE 1 -- представление в различных видах
/**
 ** 1) Object.entries -- объект представляем в виде массива 
 ** 2) Object.fromEntries -- массив представляем в виде объекта 
*/
/* 
     const obj = {
          name: 'Max',
          age: 26,
          job: 'Fullstack'
     }

     const entries = [
          ['name', 'Max'],
          ['age', 26],
          ['job', 'fullstack']
     ]

     console.log(Object.entries(obj))

     console.log(Object.fromEntries(entries))
*/

//* EXAMPLE 2 --  обращение к ключам 
/** 
 ** 1) new Map -- можем передавать также [ключи, значения]
 ** 2) обращение через различные методы к палям 
 ** 3) .get -- метод обращения по ключу
*/

const obj = {
     name: 'Max',
     age: 26,
     job: 'Fullstack'
}
const entries = [
     ['name', 'Max'],
     ['age', 26],
     ['job', 'fullstack']
]

const map = new Map(entries)
//* console -->  Map { 'name' => 'Max', 'age' => 26, 'job' => 'fullstack' }

// console.log(map);

// console.log(obj.job);

// console.log(map.get('job'))

//* EXAMPLE 3 -- добавление различных ключей 
/**
 **  1) .set -- добавление новых значений 
 **  2) .set -- возвращает туже карту 
 **  3) Ключи могут быть объектами 
*/
map
     .set('newField', 42) // 'newField' => 42,
     .set(obj, 'Value of object') // { name: 'Max', age: 26, job: 'Fullstack' } => 'Value of object',
     .set(NaN, 'Nan ///') // NaN => 'Nan ///'

// console.log(map);
// console.log(map.get(obj)) // Value of object
// console.log(map.get(NaN)) // Nan ///


//* EXAMPLE 4 -- методы работы с ключами 

/**
 ** .delete -- удаляет объект возвращает boolean 
 ** .size -- сколько ключей в карте
 ** .clear() -- очистка всех ключей и всей карты 
*/
/* 
     map.delete('job')
     console.log(map.has('job')) // false
     console.log(map.size) //  -->  5
     map.clear()
     console.log(map.size) // --> 0
*/

//* EXAMPLE 5 -- итерирование карты

/**
** 1) .entries() -- возвращает значение карты в виде массива; вызывается по умолчанию 
** 2) .values() -- итерация по значениям 
** 3) .keys() -- итерация по ключам 
** 4) .forEach() -- итерация по ключ - значение  
*/
/* 
     //* Итерация по объектам 
     for (let entry of map.entries()) {
          console.log(entry);
     }
     //* Итерация по ключ - значение  
     for (let [key, value] of map) {
          console.log(key, value)
     }
     //* Итерация по значениям 
     for (let val of map.values()) {
          console.log(val);
     }
     //* Итерация по ключам  
     for (let key of map.keys()) {
          console.log(key);
     }
     //* Итерация по ключ - значение  
     map.forEach((val, key, map) => { 
          console.log(val, key);
     })
*/

//* EXAMPLE 6 -- преобразование краты в массив и объект 
/* 
     const array = [...map] // [...map] разворачиваем крату 

     console.log(array);

     const arrayFrom = Array.from(map) // преобразование краты в массив

     const mapObj = Object.fromEntries(map.entries())  // сначала в массив потом в объект 

     console.log(mapObj);

*/

//* EXAMPLE 7 -- примеры работы с картами 

const users = [
     { name: 'Elena' },
     { name: 'Alex' },
     { name: 'Irish' },
]

const visits = new Map()

visits
     .set(users[0], new Date())
     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
     .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(users) {
     return visits.get(users)
}

console.log(lastVisit(users[1]));

