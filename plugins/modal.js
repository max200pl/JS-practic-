//выносим функцию  _createModal с функции на примере замыкания 
function _createModal(options) {  // нижнее подчеркивание _ обоз. что некая системная функция (приватная) которая не должна быть вызвана отдельно 
     const modal = document.createElement('div') // основной div
     modal.classList.add('vmodal')
     modal.insertAdjacentHTML('afterbegin', `
     <div class="modal-overlay">
          <div class="modal-window">
               <div class="modal-header">
                    <div class="modal-title">Modal tile</div>
                    <span class="modal-close">x</span>
               </div>
               <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
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

//получение параметров (options) для работы открытия и закрытия модального окна 
$modal = function (options) {
     // Практическое применение замыкания 

     const ANIMATION_SPEED = 200 // приватная константа анимации 

     const $modal = _createModal(options) // заношу результат работы функции // $modal ---> дом node element

     let closing = false // переменная для предотвращения не корректной логики работы (если вызвали в момент метода close метод open)

     return { // возвращаем методы для взаимодействия с instance
          open() { // метод 
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
          },
          destroy() { }
     }
}
