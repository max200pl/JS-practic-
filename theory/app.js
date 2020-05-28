//? DOM model Worked; IPI browser

/**
 * ipi браузера --> js имеет доступ к нему
 *  */

/**
1) Глобальный объект: document
2) Глобальный объект: window.prompt('Как тебя зовут?') //.prompt --> метод
                      window.confirm('Как тебя зовут?') //.prompt --> метод
                      window.setInterval()
*/

/**
1) Каждый из тегов (узел--> node)
 */

const heading = document.getElementById('hello')  // .getElementById вернет ссылку на который элемент мы нашли в дом дереве 
// //const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]

//* Лучше использовать .querySelector
//const heading2 = document.querySelector('.h2-class') // возвращает всегда один элемент (первый попавшийся)
//const heading2 = document.querySelector('#sub-hello')
const heading2 = document.querySelector('h2')
//console.dir(heading2)

//const heading3 = heading2.nextElementSibling // получение следующего элемента в DOM
const h2list = document.querySelectorAll('h2')
console.log(h2list);
//const heading3 = h2list[1]
const heading3 = h2list[h2list.length - 1]
console.log(heading3);


setTimeout(() => {
     addStylesTo(heading, 'Header', 'yellow')
}, 1500);
setTimeout(() => {
     addStylesTo(heading2, 'Body', 'green')
}, 3000);
setTimeout(() => {
     addStylesTo(heading3, 'Footer', 'orange', '2rem')
}, 4000);


function addStylesTo(node, text, color = 'red', fontSize) {
     node.textContent = text
     node.style.color = color
     node.style.textAlign = 'center'
     node.style.backgroundColor = 'blue'
     node.style.padding = '2rem'
     // falsy: '', undefined, null, 0, false
     if (fontSize) {
          node.style.fontSize = fontSize
     }
}

//* РАБОТА С СОБЫТИЯМИ

heading.onclick = () => {
     console.log('click');
}







