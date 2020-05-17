//выносим функцию  _createModal с функции на примере замыкания 
function _createModal(options) {  // нижнее подчеркивание _ обоз. что некая системная функция (приватная) которая не должна быть вызвана отдельно 
     const modal = document.createElement('div') // основной div
     modal.classList.add('vmodal')
     modal.insertAdjacentHTML('afterbegin', `
     <div class="modal-overlay">
          <div class="modal-window">
               <div class="modal-header">
                    <div class="modal-title">Modal tile</div>
                    <span class="modal-close">&times;</span>
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
//получение параметров (options) для работы открытия и закрытия модального окна 

$modal = function (options) {
     // Практическое применение замыкания 

     const $modal = _createModal(options) // заношу результат работы функции // $modal ---> дом node element


     return { // возвращаем методы для взаимодействия с instance
          open() { // метод 
               $modal.classList.add('open')
          },
          close() {// метод 
               $modal.classList.remove('open')
          },
          destroy() { }
     }
}
