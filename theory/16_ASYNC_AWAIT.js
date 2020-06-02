//? ASYNC, AWAIT

/**
 * 1) Некий синтаксический сахар для удобного программирования 
 * 2) Для применения await необходимо использовать у родительской функции префикс async
 * 3) Избавляемся от callback
*/

const delay = ms => {
     return new Promise(r => setTimeout(() => r(), ms))
}
delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

//* EXAMPLE 1 
/* 
     function fetchTodo() {
          console.log('Fetch todo started...')
          return delay(2000)
               .then(() => fetch(url)) // fetch() делает асинхронный запрос и возвращает promise // когда задержка будет пройдена буду выполнять запрос на сервер 
               .then(response => response.json()) // некоторый ipi который присутствует в fetch()
     }
     fetchTodo() // вызов метода 
          .then(data => {
               console.log('Data:', data)
          })
          .catch(e => console.error(e)) // в promise доступен метод .catch для вывода ошибок 
 */

//* EXAMPLE 2

async function fetchAsyncTodo() { // async для компилятора оборачивает в promise в старый формат 
     console.log('Fetch todo started...')
     try {
          await delay(2000) //оператор await пока не пройдет функция delay() не переходить дальше //! возвращает promise
          const response = await fetch(url) //! возвращает promise fetch() и метод response
          const data = await response.json()
          console.log('Data:', data);
     } catch (e) { // если что то сделали не так 
          console.error(e);
     } finally {

     }
}

fetchAsyncTodo()