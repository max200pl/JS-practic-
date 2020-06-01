//? CUSTOMIZATION_OBJECT 

const person = Object.create({
     calculateAge() {
          console.log('Age', new Date().getFullYear() - this.birthYear);
     }
},
     {
          name: {
               value: 'Max',
               enumerable: true, // default false // отображение 
               writable: true, // default false // изменение 
               configurable: true, // default false // удаление 
          },
          birthYear: {
               value: 1994,
               enumerable: true, // default false // отображение 
               writable: true, // default false // изменение 
               configurable: false, // default false // удаление 
          },
          age: {
               get() { // вернуть новое значение 
                    return new Date().getFullYear() - this.birthYear
               },
               set(value) {
                    document.body.style.background = 'red'
                    console.log('Set age', value);
               }
          }
     })

// person.name = 'Valera'

for (const key in person) {
     if (person.hasOwnProperty(key)) {
          console.log('Key', key, person[key]);
     }
}
