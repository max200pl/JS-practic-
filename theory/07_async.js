// Asynchronous JavaScript

// const timeout = setTimeout(() => {
//      clearTimeout(timeout)// Функция чистки timeout
//      console.log('hello');
// }, 2000);

// const timeout1 = setInterval(() => {
//      console.log('hello');
// }, 2000);

//clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//      setTimeout(callback, wait);
// }

// delay(() => {
//      console.log('After 2 seconds');
// }, 2000)


//* Promises

const delay = (wait = 1000) => {
     const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
               //resolve() // когда все хорошо 
               reject('Что то пошло не так. Повторите попытку') //* когда что то пошло не так
          }, wait)
     })
     return promise
}

//* Работа через callback функции  
// delay(2500)
//      .then(() => {
//           console.log('After 2 seconds')
//      })
//      .catch(err => console.error('Error', err)) // отлавливаем ошибки и их оформляем 
//      .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
     1, 2, 3, 4, 6, 7
]))
//getData().then(data => console.log(data))

//* Новый синтаксис async  await
async function asyncExample() {
     try {
          await delay(3000)
          const data = await getData()
          console.log('Data', data)
     } catch (e) {
          console.log(e)
     } finally {
          console.log('Finally')
     }
}
asyncExample()