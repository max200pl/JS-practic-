//? STRING -- primitive data type

// const name = 'Max'
// const age = 26
// console.log(typeof name);

// function getAge() {
//      return age
// }

// const output = 'Привет меня зовут' + name + ' и мой возраст ' + age + ' лет.'
// console.log(output);
//* пришел в EcmaScript6 --> строковые шаблоны
// const output = `Привет меня зовут ${name} и мой возраст ${getAge()} лет.`
// const output = `Привет меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
// console.log(output);

// const output = `
//      <div> This is div</div>
//      <p>this is o</p>
// `
// console.log(output);

// const name = "Max"
// //new String = "Max" // развернутый вид

// console.log(name.length)
// console.log(name.toUpperCase()); // в верхний регистр 
// console.log(name.toLowerCase()); // в нижний регистр
// console.log(name.charAt(2)); // x//  второй символ в строке
// console.log(name.indexOf('ax')); // 1 // с какой позиции начинается // или -1 
// console.log(name.startsWith('M')); //true
// console.log(name.endsWidth('ax')); //true
// console.log(name.repeat(3));

// const string = '  password   '
// console.log(string.trim()); // очищает все пробелы 
// console.log(string.trimLeft()); // очищает все пробелы 
// console.log(string.trimRight()); // очищает все пробелы 

//* пришел в EcmaScript6 -->
function logPerson(s, name, age) {
     if (age < 0) {
          age = 'Еще не родился'
     }
     return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Макс'
const personAge = 26

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
console.log(output);


