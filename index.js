// передаем базовые опции в объекте (options)

const modal = $modal({
     //параметризация модального окна
     title: 'max200pl modal',
     closable: true,
     content:
          `
     <h4>Modal is working</h4>
     <p>Lorem ipsum dolor sit</p>
     `,
     width: '400px',
     footerButtons: [
          {
               text: 'Ok', type: 'primary', handler() {
                    console.log('Primary btm clicked')
                    modal.close() // закрытие модального окна 
               }
          },
          {
               text: 'Cancel', type: 'danger', handler() {
                    console.log('Danger btm clicked')
                    modal.close() // закрытие модального окна 
               }
          },
     ]
})