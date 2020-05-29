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
//console.log(h2list);
//const heading3 = h2list[1]
const heading3 = h2list[h2list.length - 1]
//console.log(heading3);

setTimeout(() => {
     addStylesTo(heading, 'Header', 'yellow')
}, 1500);
setTimeout(() => {
     addStylesTo(heading2, 'Body', 'green')
}, 3000);

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
     event.preventDefault()
     console.log("link", event.target.getAttribute('href'));
     const url = event.target.getAttribute('href')

     window.Location = url
})

setTimeout(() => {
     addStylesTo(link, 'Footer', 'orange', '2rem')
}, 4000);

function addStylesTo(node, text, color = 'red', fontSize) {
     node.textContent = text
     node.style.color = color
     node.style.textAlign = 'center'
     node.style.backgroundColor = 'blue'
     node.style.padding = '2rem'
     node.style.display = 'block'
     node.style.width = '100%'

     // falsy: '', undefined, null, 0, false
     if (fontSize) {
          node.style.fontSize = fontSize
     }
}

//* РАБОТА С СОБЫТИЯМИ

heading.onclick = () => {
     if (heading.style.color == 'yellow') {
          heading.style.color = '#000'
          heading.style.backgroundColor = '#fff'
     } else {
          heading.style.color = 'red'
          heading.style.backgroundColor = "blue"
     }
}

heading2.addEventListener('dblclick', () => {
     if (heading2.style.color == 'green') {
          heading2.style.color = '#000'
          heading2.style.backgroundColor = '#fff'
     } else {
          heading2.style.color = 'red'
          heading2.style.backgroundColor = "blue"
     }
})









