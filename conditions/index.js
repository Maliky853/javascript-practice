// camparison operators

// let a = 36

// let b  =  63

// let c = a>b
// let d  = a<b
// console.log(c,d)


// logical operators

// let x = 63 
// let y  = 64

// console.log(x<y && x<=y)  and 

// console.log(x<y || x<=y)  or

// if esle statement

// let x= -20
// if(x>0){
//     console.log("x is greater than zero")
// }else{
//     console.log("x is smaller tha zero")
// }

// NESTED STAREMENT 

// let x = -1

// if(x>=0){
//     if(x === 0 ){
//         console.log("x is equal to zero")
//     }else{
//         console.log("x is greater than 0")
//     }
// }else{
//     console.log("x is negative")
// }

// excercise

// let x = -63

// if(x>=0){
// if(x%2 === 0){
//     console.log("the number is even")
// }else {
//     console.log("the number is odd")
// }
// }else{
//     console.log("the number is in negative state")
// }


// let food = "tomato"

// if(food === "apple" || food === "grapes"){
//     console.log("fruit")
// }else if(food === "onion" || food === "tomato"){
//     console.log("vegetables")
// }else if(food === "plastic" || food === "wood"){
//     console.log("unedible")
// }


// let x = -63
// let  y = 53

// if(x>0 && y>0){
//     console.log("both positive")
// }else if(x<0 && y<0){
//     console.log("both negative")
// }else if(x>0 && y<0){
//     console.log("x is positive and y is negative")
// }else if(x<0 && y>0){
//     console.log("x is negative y is positive")
// }

// ternary operators

// let marks = 36
// let results  = (marks>=40) ? "pass" :"fail" 
// console.log(results)

// nested ternanry operators

// let a = -12
// let results = (a>=0) ?(a===0 ? "zero" : "positive") : "negative"

// console.log(results)





// let age  = 63
// if(age>=65){
//     console.log("free drinks")
// }else if(age>=21){
//     console.log("you can enter and can have apiad drinks")
// }else if(age>= 18){
//     console.log("you can enter but cannot drink")
// }else{
// console.log("no entry")
// }


// let password = "maeen"

// if(password.length >= 6){
//     if(password.indexOf(" ") !== -1){
//         console.log("password cannot include space")
//     }else{
//         console.log("valid password")
//     }
// }else{
//     console.log("password is to short")
// }


// let age = 20;
// if (age >= 18 && age < 21) {
//   console.log('Entry Granted!');
// } else if (age >= 21 && age < 65) {
//   console.log('Drinks Allowed');
// } else if (age >= 65) {
//   console.log('Drinks FREE!');
// } else {
//   console.log('Not Allowed');
// }

// let day = 99;
// switch (day) {
//       case 1:
//         console.log('Monday');
//         break;
//       case 2:
//         console.log('Tuesday');
//         break;
//       case 3:
//         console.log('Wednesday');
//         break;
//       case 4:
//         console.log('Thu');
//         break;
//       case 5:
//         console.log('Fri');
//         break;
//       case 6:
//         console.log('Sat');
//         break;
//       case 7:
//         console.log('Sun');
//         break;
//       default:
//         console.log('Invalid day number');
//     }

// let days = "june"

// switch (days) {
//     case "january":
//         console.log("this month has 31 days")
//         break;
//         case "february":
//         console.log("this month has 28 days")
//         break;
//         case "march":
//         console.log("this month has 31 days")
//         break;
//         case "april":
//         console.log("this month has 30 days")
//         break;
//         case "may":
//         console.log("this month has 31 days")
//         break;
//         case "june":
//         console.log("this month has 30 days")
//         break;
//         case "july":
//         console.log("this month has 31 days")
//         break;
//         case "august":
//         console.log("this month has 31 days")
//         break;
//         case "september":
//         console.log("this month has 30 days")
//         break;
//         case "october":
//         console.log("this month has 31 days")
//         break;
//         case "november":
//         console.log("this month has 30 days")
//         break;
//         case "december":
//         console.log("this month has 31 days")
//         break;

//     default:
//         break;
// }


// let students = ['John', 'Jane', 'Jack'];
// using forEach
// students.forEach(myFunction);
// function myFunction(item) {
// console.log(item);
// }
// using function express as a callback
// students.forEach(function (item) {
// console.log(item)
// })

// const students = ["malik" , "yaseen" , "aaquib"]

// students.forEach(items=>{
//     console.log(items[0])
// })

// const product = {
//       price: 100000,
//       description: 'Some description...',
//       name: 'iPhone 13',
//       inStock: 500,
//       brand: 'Apple',
//       'the info': 'Something',
//       10: true,
//     };

//     console.log(product)

// const movies = [
//     {
//         name: "captain-america",
//         rating: 5,
//         hero: "chris evens"
//     },
//     {
//         name: "iron-man",
//         rating: 4.8,
//         hero: "robert downery jr"
//     },
//     {
//         name: "thor",
//         rating: 4.8,
//         hero: "chris hemsworth"
//     },
//     {
//         name: "spider-man",
//         rating: 4.6,
//         hero: "tom holland"
//     },
//     {
//         name: "ms-marvel",
//         rating: 4.4,
//         hero: "brie larrson"
//     },
//     {
//         name: "wanda",
//         rating: 4.4,
//         hero: "elizabet olsen"
//     },
//     {
//         name: "avenger endgames",
//         rating: 4.9,
//         hero: "all superheros"
//     }
// ]

// movies.forEach(movie=>{
//     console.log(movie)
// })