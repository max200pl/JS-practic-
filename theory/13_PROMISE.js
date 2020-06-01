//? PROMISE

/**
 * PROMISE:
 * 1) для упрощения работы с асинхронными операциями 
 * 2) для уменьшения вложенности
 * 3) некая обвертка над асинхронными операциями 
 */

console.log('Request data...');

//* EXAMPLE 1 not this promise
/*
     setTimeout(() => {
          // 1 callback
          console.log('Preparing data...');

          const backendData = {
               server: 'aws',
               port: 2000,
               status: 'working'
          }
          // 2 callback
          setTimeout(() => {
               backendData.modified = true
               console.log('Data received', backendData);
          }, 2000)
     }, 2000)
*/

//* EXAMPLE 2 application promise

/*
     1) Создаем новый instance Promise
     2) resolve, reject являются функциями
     3) .resolve() вызывается когда законченна успешно асинхронная операция
     4) .reject() вызывается когда законченна неудачно
     5) .finally() вызывается всегда
     4) const p --> это Promise
     5) Когда выполнится resolve() тогда запустится  p.then()
*/
/*
     const p = new Promise(function (resolve, reject) {
          setTimeout(() => {
               console.log('Preparing data...');
               const backendData = {
                    server: 'aws',
                    port: 2000,
                    status: 'working'
               }
               resolve(backendData) // говорим Promise что он завершил свое выполнение
          }, 2000)
     })

     p.then(data => {
          return new Promise((resolve, reject) => {
               setTimeout(() => {
                    data.modified = true
                    resolve(data)
               }, 2000)
          })

     })
          .then(clientData => {
               clientData.fromPromise = true
               return clientData
          })
          .then(data => {
               console.log('Modified', data);
          })
          .catch(err => console.log("Error", err))
          .finally(() => console.log('Finally'))
*/

//* EXAMPLE 3 application promise

const sleep = ms => {
     return new Promise(resolve => {
          setTimeout(() => resolve(), ms)
     })
}

// sleep(2000).then(() => console.log('After 2s'))
// sleep(3000).then(() => console.log('After 3s'))

//!  .all --> Когда выполнятся все promise 
Promise.all([sleep(2000), sleep(5000)]).then(() => {
     console.log('All promises');
})
//!  .race --> Когда выполнятся первый promise 
Promise.race([sleep(2000), sleep(5000)]).then(() => {
     console.log('Race promises');
})
