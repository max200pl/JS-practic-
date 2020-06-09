//?  Fetch -- XMLHttpRequest (XHR)

const requestURL = 'https://jsonplaceholder.typicode.com/users' // -> для тестирования и прототипирования 

function sendRequest(method, url, body = null) {
     const headers = {
          'Content-Type': 'application/json'
     }

     return fetch(url, {
          method: method,
          body: JSON.stringify(body),
          headers: headers
     }).then(response => {
          if (response.ok) {
               return response.json()
          }
          return response.json().then(error => {
               const e = new Error('Что то не то')
               e.data = error
               throw e
          })
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
