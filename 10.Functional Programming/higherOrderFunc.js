//1.-----------------------------------1.Map Method-------------------------------------------------
// The original array does not get altered, and the returned array may contain different elements than the original array.It works as the 
// let arr=[1,2,3,4]
//Or we can declare other array sqrarr to store data in separate otherwise this array get manupulated
// arr=arr.map((n)=>{
//     return n*n
// })
// console.log(arr)

//Another example
// let trnsaction=[1000,2000,3000,5000,15000,1000000]
// let dollar=84
// let inDollar=trnsaction.map((n)=>{
//     //return n/dollar
//     console.log((n/dollar).toFixed(3))
// })

//2.-------------------------------------2.For each------------------------------------------
//donot return anything but map return returns---this is the only difference
 let trnsaction=[1000,2000,-300,5000,15000,1000000]
let indollar=trnsaction.forEach((n)=>{
    console.log((n/84).toFixed(3))    
})
console.log(indollar)

//3.-----------------------------------------3.Find-----------------------------------------------
//Used to find something in the array with condition
// let trnsaction=[1000,2000,-300,5000,15000,1000000]
// let ans=trnsaction.find((n)=>{    
//     return n<0
// })

// console.log(ans)



//4.---------------------------------------4.Find Index-----------------------------------------------
//Used to return the Index of data in array
// let fIndex=trnsaction.findIndex((n)=>{
//     console.log("Index\n")
//     return n<0
// })
// console.log(fIndex)

//-----------------------------------------5.Some-----------------------------------------------
//Return true even if 1 element satiesfy condition
// let trnsaction=[1000,2000,-300,5000,15000,1000000]
// let ans=trnsaction.some((n)=>{
//     return n<0
// })
// console.log(ans)

//-----------------------------------------6.Every-----------------------------------------------
//Return true if all elments satify condition

// let trnsaction=[1000,2000,300,5000,15000,1000000]
// let ans=trnsaction.every((n)=>{
//     return n>0
// })
// console.log(ans)

//-----------------------------------------7.Filter-----------------------------------------------
//to check some conditions and return the element
// let num=[2,34,54,654,67,23,38]
// let ans=num.filter((n)=>{
//     return n%2==0
//     // console.log(n%2==0)
// })
// console.log(ans)


//-----------------------------------------8.Reduce-----------------------------------------------
//Takes two values in input
// let num=[10,20,30,40,90]
// let updatedVal
// let ans=num.reduce((n,value)=>{
//      updatedVal=n+value
//      return updatedVal
    
// },0)//here 0 is value initalized to n
// console.log(ans)


//-----------------------------------------9.Chaining------------------------------------------------
//Chaining is used to chain all the methods and use one after one
let arr=[
    {name:'A',age:30,gender:'M'},
    {name:'B',age:23,gender:'M'},
    {name:'C',age:32,gender:'F'},
    {name:'D',age:43,gender:'M'},
    {name:'E',age:25,gender:'F'},
    {name:'F',age:24,gender:'M'},
    {name:'G',age:20,gender:'F'},
    {name:'H',age:25,gender:'M'},    
]
//TO FIND THE AGE OF ALL MENS

//find males
let males=arr.filter((n)=>{
    return n.gender=='M'
}).map((n)=>{           //this is chaining
    return n.age
})
console.log(males)

//from below filter positive values and calculate total amt
let trc=[-100,3000,3000,4000]
let pos=trc.filter((n)=>{
    return n>0
}).reduce((tot,value)=>{
    let total=tot+value
    return total
},0)
console.log(pos)