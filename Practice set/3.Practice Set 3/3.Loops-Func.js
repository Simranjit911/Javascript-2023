//q1-write marks of students of object using for loop
let marks = {
    simran: 98,
    rahul: 80,
    rohan: 75
}
// simple for loop
for (let x = 0; x < Object.keys(marks).length; x++) {
    // console.log(`Marks of ${Object.keys(marks)[x]} are ${marks[Object.keys(marks)[x]]} `)
}
//q2-Using for in loop
//for in loop [easy way]
for (let x in marks) {
    console.log(`the marks of ${x}  is ${marks[x]}`)
}

//q3-WAP to make user enter correct ni.take inout untill it enters correct no.
// let cn=90
// let i
// while(i!=cn){
//     i=Number(prompt('Enter no'))
//console.log('Try Again')
// }
// console.log("You have Entered correct no.")

//q4-WAF that return of five nums
let num=[5,6,4,7]
let sum=0
const mean=(num)=>{
    for(let i of num){
        sum+=i
    }
    console.log(sum/num.length)
}
mean(num)