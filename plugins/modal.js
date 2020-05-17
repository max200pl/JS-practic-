//выносим функцию  _createModal с функции на примере замыкания 
function _createModal(options) {  // нижнее подчеркивание _ обоз. что некая системная функция (приватная) которая не должна быть вызвана отдельно 
     const DEFAULT_WIDTH = '600px'
     const modal = document.createElement('div') // основной div
     modal.classList.add('vmodal')
     modal.insertAdjacentHTML('afterbegin', `
     <div class="modal-overlay" data-close="true">
          <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}" >
               <div class="modal-header">
                    <div class="modal-title">${options.title || 'Окно'}</div>
                    ${options.closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
               </div>
               <div class="modal-body" data-content>
                   ${options.content || ''} 
               </div>

               <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
               </div>
          </div>
     </div>
`)
     document.body.appendChild(modal)// помещаем модальное окно в дом дерево 
     return modal //возвращаем instance (пример) 
}

//получение параметров (options) для работы открытия и закрытия модального окна 
$modal = function (options) {
     // Практическое применение замыкания 

     const ANIMATION_SPEED = 200 // приватная константа анимации 
     const $modal = _createModal(options) // заношу результат работы функции // $modal ---> дом node element
     let closing = false // переменная для предотвращения не корректной логики работы (если вызвали в момент метода close метод open)
     let destroyed = false // для защиты 

     const modal = { // создаем отдельный объект 
          open() { // метод 
               if (destroyed) { // если destroyed true тогда не запускаем метод open()
                    return console.log('Modal is destroyed')
               }

               !closing && $modal.classList.add('open') // если с closing в true тогда не добавляем класс open
          },
          close() {// метод 
               closing = true // защита 
               $modal.classList.remove('open')
               $modal.classList.add('hide') // добавляем класс  hide
               setTimeout(() => {
                    $modal.classList.remove('hide') // удаляем  hide
                    closing = false // защита 
               }, ANIMATION_SPEED) // по завершению анимации 200 мс
          }
     }

     const listener = event => {
          //console.log('clicked', event.target) //отображение в консоли нажатого элемента //  у event.target присутствует объект dataset где хранится набор всех дата атрибутов 
          //console.log('clicked', event.target.dataset.close) //отображение в консоли нажатого элемента c отображением ключа close
          if (event.target.dataset.close) { // если присутствует атрибут data-close тогда 
               modal.close() // вызываем метод close() 
          }
     }
     // добавляем прослушиватель на нажатие кнопки
     $modal.addEventListener('click', listener)

     return Object.assign(modal, { // для работы просто с объектами (добавляем методы для объекта modal, расширяя его) 
          destroy() {
               $modal.parentNode.removeChild($modal) // удаление domNode из дом дерева 
               $modal.removeEventListener('click', listener) // удаляем слушатель события listener
               destroyed = true // если удалили окно для защиты 
          },
          setConten(html) { // метод изменения контента  в окне
               $modal.querySelector('[data-content]').innerHTML = html
          }
     })  // на выходе возвращаю просто этот объект 
}


/** реализовать объект (options)
 *  title: string //  передавать в модальное окно типом title и применялся для всего объекта
 *  closable: boolean // если true показывается крестик модального окна, если false крестика нет
 *  content: string // параметр content наполнение которое должно попадать в модальное окно
 *  width: string ('400px') // параметр ширины модального окна
 *  destroy(): void // метод должен удалять модальное окно
 *  окно должно закрываться при нажатии на крестик, и нажатии на серое пространство
 *
 *   ----------------*
 *   setContent(html: string): Void | PUBLIC  // публичный метод, доступный для instance метод setConten
 *   onClose(): void // хук который вызывается когда модальное окно закрыто
 *   onOpen(): void // хук когда окно открыто
 *   beforeClose(): boolean |  // хук если true то окно можно закрыть, если false тогда модальное окно не закрывается
 *   ----------------*
 *
 *   animate.css // библиотека animate.css
 */
