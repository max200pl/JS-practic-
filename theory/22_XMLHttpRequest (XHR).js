//? XMLHttpRequest (XHR)
/**
 ** 1) задача для отправки различных запросов на сервер 
 ** 2) requestURL -->  URL для асинхронных запросов на сервер 
 ** 
*/

//* EXAMPLE 1 -- задача для отправки различных запросов на сервер 

const requestURL = 'https://jsonplaceholder.typicode.com/users' // -> для тестирования и прототипирования 


function sendRequest(method, url, body = null) {
     return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest()

          xhr.open(method, url)  // --> .open -- открытие нового соединения (method --> что именно нужно сделать (GET, POST, PUT...))

          xhr.responseType = 'json' // -> привести к типу  'json'  (массив объектов)

          xhr.setRequestHeader('Content-Type', 'application/json')

          //* Если успешно попадаем на сервер 
          xhr.onload = () => {
               // console.log(JSON.parse(xhr.response));
               //console.log(xhr.response);

               if (xhr.status >= 400) {   //* Если статус ответа сервера  выше 400 ошибка 
                    reject(xhr.response)
               } else {
                    resolve(xhr.response)
               }
          }
          //* Если ошибка 
          xhr.onerror = () => {  // 
               reject(xhr.response)
          }

          xhr.send(JSON.stringify(body)) // --> .send -- отправляем 
     })
}

// sendRequest('GET', requestURL)
//      .then(data => console.log(data))
//      .catch(err => console.log(err))


const body = {
     name: 'Max',
     age: 26
}

sendRequest('POST', requestURL, body)
     .then(data => console.log(data))
     .catch(err => console.log(err))
