$.confirm = function (options) {
     return new Promise((resolve, reject) => { // возвращаем promise 
          //вернуть новое обещание ((решить, отклонить) => {// возвращаем обещание
          const modal = $modal({
               title: options.title,
               width: '400px',
               closable: false,
               content: options.content,
               onClose() {
                    modal.destroy()
               },
               footerButtons: [
                    {
                         text: 'Cancel', type: 'secondary', handler() {
                              modal.close() // закрытие модального окна
                              reject()
                         }
                    },
                    {
                         text: 'Deleted', type: 'danger', handler() {
                              modal.close() // закрытие модального окна
                              resolve()
                         }
                    }
               ]
          })
          setTimeout(() => modal.open(), 100)
     })
}