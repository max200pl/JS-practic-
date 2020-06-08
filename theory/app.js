//?  Fetch, XMLHttpRequest (XHR), Ajax

const requestURL = 'https://jsonplaceholder.typicode.com/users'



function sendRequest(method, url, body = null) {
     return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest()

          xhr.open(method, url)

          xhr.responseType = 'json'

          xhr.onload = () => {
               // console.log(JSON.parse(xhr.response));
               //console.log(xhr.response);

               if (xhr.status >= 400) {
                    resolve(xhr.response);
               } else {
                    resolve(xhr.response);
               }
          }

          xhr.onerror = () => {
               reject(xhr.response);
          }

          xhr.send(body)
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
