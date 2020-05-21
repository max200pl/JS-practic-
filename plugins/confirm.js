$.confirm = function (options) {
     /**
      * Обработка нажатия кнопок (асинхронная) поэтому применяем Promise
      */
     return new Promise((resolve, reject) => { // возвращаем новый promise 
          //вернуть новое обещание ((решить, отклонить) => {// возвращаем обещание
          const modal = $modal({ // создаем новый элемент модалки 
               title: options.title,
               width: '400px',
               closable: false,
               content: options.content,

               // когда окно закрывается тогда мы уничтожаем модальное окно 
               onClose() {
                    modal.destroy()
               },
               // 

               footerButtons: [
                    {
                         text: 'Cancel', type: 'secondary', handler() {
                              modal.close() // закрытие модального окна
                              reject()// если отмена вызываем метод reject()
                         }
                    },
                    {
                         text: 'Deleted', type: 'danger', handler() {
                              modal.close() // закрытие модального окна
                              resolve() // если удалить вызываем метод resolve()
                         }
                    }
               ]
          })
          setTimeout(() => modal.open(), 100) // открываем модальное окно по истечению времени 
     })
}