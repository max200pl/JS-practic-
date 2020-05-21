let prices = [ // глобальный объект 
     { id: 1, title: 'first', price: 20, img: 'https://picsum.photos/200/300' },
     { id: 2, title: 'second', price: 30, img: 'https://picsum.photos/200/300?grayscale' },
     { id: 3, title: 'third', price: 40, img: 'https://picsum.photos/seed/picsum/200/300' }
]


// функция toHTML которая берет параметр price
// функция toHTML возвращает строку
// метод toHTML берет объект price и преобразует в строку 
const toHTML = price => ` 
     <div class="col" >
          <div class="card" style="width: 18rem;">     
               <img class="card-img-top" style="max-width: 100%; height: auto;" src="${price.img}" alt="${price.title}">
               <div class="card-body">
                    <h5 class="card-title">${price.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${price.id}">See price</a>
                    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${price.id}">Remove price</a>
               </div>
          </div>
     </div>
`

function render() { // Динамически на основе массива выводим список карточек
     const html = prices.map(toHTML).join('') //преобразуем каждый prices к строке --> (получем массив строк .map(toHTML)) и преобразуем в одну строку (.join()) //(prices => toHTML(price)) -- получаем массив строк;
     document.querySelector('#price').innerHTML = html // выбираем по id и изменяем содержимое ---> .innerHTML (удаляет всё содержимое элемента и заменяет его на узлы)
}

render() //вызываем функцию 


// передаем базовые опции в объекте (options)
const priceModal = $modal({
     //параметризация модального окна
     title: 'Цена на товар',
     closable: true,
     width: '400px',
     footerButtons: [
          {
               text: 'Close', type: 'primary', handler() {
                    priceModal.close() // закрытие модального окна
               }
          }
     ]
})


/**
 * Открытие модального окна при клике на data-btn 
 */
document.addEventListener('click', event => {
     event.preventDefault()
     const btnType = event.target.dataset.btn //получение атрибута data-btn
     const id = +event.target.dataset.id // получение атрибута data-id// +event... преобразуем к числу 
     const price = prices.find(f => f.id === id) //перебираем по id

     if (btnType === 'price') {
          priceModal.setContent(`
               <p>Price for ${price.title}: <strong>${price.price}$</strong></p>
          `)
          priceModal.open()
          //console.log(id, price)
     } else if (btnType === 'remove') {
          $.confirm({ // обращаемся к плагину  $.confirm
               title: 'You sure?', // передаем параметры 
               content: `<p>You deleted this price: <strong>${price.title}</strong></p>`
          }).then(() => { // (связано с promise) если попадаем в метод .then то тогда можем удалить элемент 
               //console.log('REMOVE')
               prices = prices.filter(f => f.id !== id) // переопределяем массив для того чтобы удалить элемент по id удаляем элемент с массива
               render()
          }).catch(() => { // (связано с promise) отклонения обещания
               console.log('CANCEL')
          })
     }
})