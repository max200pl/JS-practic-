//? COLLECTIONS TYPES SET
/**
 ** 1) Каждое значение уникально в единственном экземпляре 
 ** 2) Значения могут быть различного типа 

 ** 3) .add -- добавляет новое значение
 ** 4) .has -- есть ли данное значение 
 ** 5) .size -- количество элементов 
 ** 6) .delete() -- удаление элемента 
 ** 7) .clear() -- удаление всех элементов 
    
 ** 8) .values() === .keys() -- для обратной совместимости с MAP
 ** 9) .entries() -- выдает все ключи и свойства одинаковыми -- для обратной совместимости с MAP
 ** 
*/

//*EXAMPLE 1

const set = new Set([1, 2, 4, 5, 6, 6])

set.add(10).add(20).add(20).add(30) // --> Set { 1, 2, 4, 5, 6, 10, 20, 30 }
console.log(set);

/* 
     console.log(set.has(30)) // -->  true
     console.log(set.size)    // --> 8
     console.log(set.delete(1)) 
     console.log(set.size)    // --> 7
     console.log(set.clear())
     console.log(set.size)    // --> 0 
*/
/* 
     console.log(set.values())  // --> [Set Iterator] { 1, 2, 4, 5, 6, 10, 20, 30 }
     console.log(set.keys())    // --> [Set Iterator] { 1, 2, 4, 5, 6, 10, 20, 30 }
     console.log(set.entries()) // --> [Set Entries] { [ 1, 1 ],  [ 2, 2 ], ...}
*/

for (let key of set) {
     console.log(key)     // --> 1, 2, 4, 5, 6, 10, 20, 30
}

function uniqValues(array) {
     // return[...new set (array)]        // --> [ 1, 2, 4, 6, 7, 8, 9, 3 ]
     return Array.from(new Set(array)) // --> [ 1, 2, 4, 6, 7, 8, 9, 3 ]
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 6, 7, 8, 9, 9, 9, 3]));

