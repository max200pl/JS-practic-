//? LOCAL_STORAGE

/**
 ** 1) Хранение данных в браузере после перезагрузки 
 ** 2) Хранение данных только строками 
 ** 2) Доступен в window.localStorage
 ** 3) .getItem -- получить результат 
 ** 4) .setItem -- записать результат ('ключ', значение) 
          4.1) при записи происходит приведение к строке .toString()
 ** 5) .removeItem -- удаление ключа 
 ** 6) .clear -- полное очищение 
 ** 7) Отличие localStorage от куки размер хранимой информации, localStorage - 5mb боле чем в куки 
 ** 8) localStorage - не улетает на сервер только ваше локальное хранилище
*/

//* EXAMPLE 1 -- сохранение данных в браузере 

const myNumber = 42
/* 
     localStorage.removeItem('number') // удаляем значения number в localStorage

     console.log(localStorage.getItem('number')) // получение значения number c localStorage

     localStorage.setItem('number', myNumber.toString()) // записываем значения number в localStorage

     console.log(localStorage.getItem('number')) // получение значения number c localStorage

     localStorage.clear('number')
*/

//* EXAMPLE 2 -- работа с объектом в localStorage

/**
 ** Получая данные с localStorage у нас нет доступа к ключам, так как это строка 
*/

const object = {
     name: 'Max',
     age: 20,
}

localStorage.setItem('person', JSON.stringify(object)) //*  JSON.stringify(object) -- в localStorage складываем строку 

const raw = localStorage.getItem('person')

const person = JSON.parse(raw) //*  JSON.parse(raw) -- с localStorage обратно в объект 
person.name = 'Ladler'
//console.log(person)

// //* EXAMPLE 2 -- синхронизация нескольких вкладок

window.addEventListener('storage', event => { // событие вызывается когда идет запись в localStorage
     console.log(event)
})



