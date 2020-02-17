// const person = {
//     name: 'Jack',
//     age: 26,
//     location: {
//         city: 'Brisbane',
//         temp: '30'
//     }
// }
// // const name = person.name;
// // const age = person.age;

// const {name = 'anonymous', age} = person;

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location;

// if(city && temperature){

//     console.log(`its ${temperature} in ${city}`)
// }


// const book = {
//     title: '12 ruiles for life',
//     author: 'Jordan Peterson',
//     publisher: {
//         name:'penguin'
//     }
// };


// const { name: publisherName = 'Self-publish'} = book.publisher;

// console.log(publisherName)

const address = ['95 Payne Street', 'Brisbane', 'Queensland', '4068'];

const [, city, state = 'NYC'] = address;

console.log(`youre in ${city} in ${state}`)


const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [coffee, ,med_price] = item;

console.log(`a medium ${coffee} costs ${med_price}`)