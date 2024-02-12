// ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`
// **Input:**

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// **Output:**
//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean


// let myObject = {
//     name : "ratan",
//     age : 34,
//     isStudent : true
// }
// for(let key in myObject){
//     let value = myObject[key];
//     let type = typeof value;
//     console.log(`key: ${key} |type:  ${type}`)
// }

const myObject  = {
    name : "ratan chakma",
    age : 45,
    len: ["bangla","chakma","english"]
}
// console.log(Object.values(myObject));
delete myObject.age;
console.log(myObject);



