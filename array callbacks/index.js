// const arrayItems = ["item1" , "items2", "items3"]
// const emptyArray = []

// console.log(arrayItems)
// using for loops

// for (let  i = 0 ; i < arrayItems.length ; i++){
//     emptyArray.push(arrayItems[i])
// }
// console.log(emptyArray)

// using foreach 

// arrayItems.forEach(items=>{
//     emptyArray.push(items)
// })
// console.log(emptyArray)


// array MAP

// const employees1 = [
//     { name: "John", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Jack", salary: 8000, bonus: 1500, tax: 2500
//     },
//     { name: "Jane", salary: 1500, bonus: 500, tax: 200 },
//     { name: "James", salary: 4500, bonus: 1000, tax: 900
//     },
//     ];
    // let newArr1 = employees1.map((obj) => {
    // newObj = {};
    // newObj.name = obj.name;
    // newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    // return newObj;
    // });
    // console.log(newArr1);

    // let newArr1 = employees1.map((obj)=>{
    //     newObj = {}
    //     newObj.name = obj.name
    //     newObj.salary = obj.salary
    //     newObj.bonus = obj.bonus
    //     newObj.taxpercentage = obj.tax * 100/obj.salary     
    //     newObj.netEarning = obj.salary + obj.bonus - obj.tax
    //     return newObj
    // })
    // console.log(newArr1)

//   const string = "helloworld"
//   const stringArr = string.split("")
// let code = stringArr.map(x=>x.charCodeAt())
// console.log(code)
//   console.log(stringArr)

// find callback 

// let array = [15,13,25,46,86,96,36,19,85,75,12]

// let findArray  =  array.find(x=>{
//     return x%2 === 0
   

// })
// console.log(findArray)

// let findarray  =  array.find(x=>{
//     return x%2 === 1
   

// })
// console.log(findarray)

// const team = [
//     {name:"yaseen" , age: 22},
//     {name:"shoeb" , age: 24},
//     {name:"amir" , age: 23},
//     {name:"umar" , age: 24},
//     {name:"mudassir" , age: 22},
//     {name:"arfat" , age: 23},
//     {name:"master" , age: 23},
//     {name:"yasir" , age: 22},
// ]

// const member = team.find(x=>{
//     return x.age>23

    
// })

// console.log(member)

// fillter callback 

// const prices = [1800,2000,"null" , 3000,5000,"thousand", 500,8000]

// const money = prices.filter((x)=>
//     typeof x === "number" && x > 2000
// )
// console.log(money)


// const money = prices.filter((x)=>
// typeof x === "number" && x>1500,
// console.log("ready")
// )
// console.log(money)

// every callbacks 

// const ageArray = [25,28,23,19,20,45,83,56,45]

// const multi = ageArray.every((x)=>{
// return x>=18

// })

// console.log(multi)

// some callbacks 

// const ageArray = [25,31,21,16,20,45,62,12,45]

// const member = ageArray.some((x)=>{
//     return x<=18
// })
// console.log(member)

// sort callbacks

// let names = ["Abhijeet", "Jim", "Farhan", "Danny",
// "Brad"];

// const member = names.sort()

// console.log(member)

// const ageArray = [25,31,21,16,20,45,62,12,45]

// const aged = ageArray.sort((x, y)=>{
// return y-x
// })


// console.log(aged)


// reduce callbacks 

// const number = [2,3,4,5,6,7,8,9]

// const sum = number.reduce((acc,curr)=>{
// return acc  + curr

// },3)
// console.log(sum)

//  console.log(a)

//  var  a = 2