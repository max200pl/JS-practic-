
/** Нет стандартной функции добавления элементов 
 *  добавляем метод .appendAfter
 *  Практикуем работу с прототипами 
 */
Element.prototype.appendAfter = function (element) {
     element.parentNode.insertBefore(this, element.nextSibling) // this это footer 
}

function noop() { }

/**
 * Функция формирования кнопок footer
 * 
 */
function _createModalFooter(buttons = []) { // по умолчанию пустой массив
     /* Будем работать с конкретными node */
     if (buttons.length === 0) { // если массив по умолчанию пуст 
          return document.createElement('div') // создаем div
     }
     /*Если присутствует начинаем формировать*/
     const wrap = document.createElement('div') // создаем кореневой элемент wrap
     wrap.classList.add('modal-footer') // добавляем класс 

     /*Добавляем через цикл кнопки в footer */
     buttons.forEach(btn => {// btn это один с объектов массива footerButtons index.js
          const $btn = document.createElement('button') // создаем теги кнопок 
          $btn.textContent = btn.text // .text это ключ в массиве footerButtons
          $btn.classList.add('btn') // создаем класс btn
          $btn.classList.add(`btn-${btn.type || 'secondary'}`) // к классу btn-.type --->  btn-primary
          $btn.onclick = btn.handler || noop // индивидуальный обработчик события для каждой кнопки // noop простая функция что указана выше

          wrap.appendChild($btn) // помещаем в wrap кнопки 
     })

     return wrap
}

//выносим функцию  _createModal с функции на примере замыкания 
function _createModal(options) {  // нижнее подчеркивание _ обоз. что некая системная функция (приватная) которая не должна быть вызвана отдельно 
     const DEFAULT_WIDTH = '600px'
     const modal = document.createElement('div') // основной div
     modal.classList.add('vmodal')
     /**
      * Производим формирование верстки 
      */
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
          </div>
     </div>
`)
     const footer = _createModalFooter(options.footerButtons) // передаем параметр с объекта $modal --->  footerButtons

     footer.appendAfter(modal.querySelector('[data-content]')) // помещаем ниже modal-body footer по атрибуту [data-content]

     document.body.appendChild(modal)// помещаем модальное окно в дом дерево 
     return modal //возвращаем instance
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
                    // реализация хука когда окно закрыто 
                    if (typeof options.onClose === 'function') {
                         options.onClose()
                    }
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
          setContent(html) { // метод изменения контента  в окне
               $modal.querySelector('[data-content]').innerHTML = html // изменяем дочерний элемент id [data-content]
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
