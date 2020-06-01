//? ASYNCHRONOUS
/**
 ** setTimeout() нет в JS есть в IPI браузера
*/

//*EXAMPLE 1
/* 
     window.setTimeout(function () {
          console.log('Inside timeout, after 1000 seconds');
     }, 1000)

     console.log('End'); 
*/

//*EXAMPLE 2

function timeout2sec() {
     console.log('timeout2sec');
}

setTimeout(timeout2sec, 2000)

/**
 ** EventLoop: //*EXAMPLE 2
 * 1) закидывает в стек Call Stack всю строку при нахождении .setTimeout(...........)
 * 2) выкидывает в Web Apis сам метод .setTimeout, слушатели событий, клики на кнопку, работа с сервером
 * 3) регистрирует функцию внутри .setTimeout(func(){})
 * 4) ждет пока браузерный IPI (Web Apis) выполнит .setTimeout; или нажатия на кнопку
 * 5) выполнен метод .setTimeout функция попадает в очередь (Callback Queue); при нажатии на кнопку
 * 5) в очереди работает цикл который пробегается по этой очереди
 * 6) если функция готова он закидывает её обратно в стек (Call Stack)
 * 7) функция выполняется
 *
 *    Поток не блокируется, можно использовать большое количество асинхронностей
 *    Если используются асинхронные методы то они попадают вконец стека даже при нулевой задержке
 *    так как попадают в очередь (Callback Queue)
*/


