
// person.language = ["chakma","bangla","english"];

// new Object(person= {
//     name: "Ratan Chakma",
//     age: 34,
//     nationality: "Bangladeshi",
//     "is married" : true,

// });
// const sum = " ";
// console.log(person["is married"]);

/* ------------------------------- */
// const person = {
//     name: "Ratan Chakma",
//     age: 34,
//     nationality: "Bangladeshi",
//     "is married": true,

// }
// delete person.age; //delete property and value;
// delete person['age']; //optional
// let text = " ";
// for (const x in person) {
//     text += person[x] + ' ';
// }

// console.log(text);


/* ------------------------------- */
// creating nested object

// const person = {
//     name: "Ratan Chakma",
//     age: 45,
//     language: {
//         primary: "Chakma",
//         secondary: "english",
//     }
// }

// console.log(person.language.secondary);

/* ------------------------------- */
// creating nested array an object
// const person = {
//     name: "Ratan Chakma",
//     age: 45,
//     language: {
//         primary: "Chakma",
//         secondary: "english",
//     },
//     car: [
//         {
//             car1:
//             {
//                 carName: "bmw",
//                 model: 34,
//                 price: 3464645
//             }
//         },
//         { car2: "toyota", model: 20, price: 3464645 },
//         { car3: "tata", model: 30, price: 200000 }
//     ]
// }
// console.log(person.car[1].price);
// let test = person.car[0].car1.model;
// console.log(test);
// console.log(person.language.secondary);

/*---------------------------------*/
// javascript object method
// const person = {
//     firstName: "Ratan",
//     lastName: "chakma",
// fullName: function(){
//    return  this.firstName + " " +  this.lastName;
// }
// }

// let fullName = " ";
// for (let x in person) {
//     fullName += person[x] + " ";
// }
// console.log(fullName);
// console.log(person.fullName());

/* -------------------------------- */
// using object values 
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   const myArray = Object.keys(person);
//   console.log(myArray);
/* -------------------------------- */
// using object values 
// const person = {
//     firstName: "Ratan",
//     lastName: "Chakma",
//    fullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
//     age: 30,
//     city: "New York"
// };
// console.log(person.fullName());
// const person = {
//     firstName: "Ratan",
//     lastName: "Chakma",
//    get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     age: 30,
//     city: "New York"
// };
// console.log(typeof person + "----->");
// console.log(typeof person.fullName  + "----->");
// console.log( person.fullName  + "----->");
/* ----------------------------------- */
// using javascript object setter
// const person = {
//     firstName : "Ratan",
//     lastName : "Chakma",
//     language : "",
//     set lang(lang){
//         this.language = lang;
//     }
// }
// person.lang = "Chakma";
// console.log(person.language);

/* --------------------------- */
// object constructor using by  javascript

// function Person(fName, lName, age, lang, color) {
//         this.fName = fName,
//         this.lName = lName,
//         this.age = age,
//         this.lang = lang,
//         this.color = color
// }

// const person1 = new Person("kobita", "chakma", 45, "english", "red");
// const person2 = new Person("Ratan", "chakma", 22, "hindi", "green");
// const person3 = new Person("Rita", "chakma", 34, "english", "red")

// console.log(person1);






