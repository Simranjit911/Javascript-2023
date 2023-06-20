let num=[1,2,3,4,5]
let b=num.toString()
console.log(b,typeof b)
let c=num.join(' and ')
console.log(typeof c)
let r=num.pop()
// console.log(num,r)
//push-add new element at end
//shift-Remove new element 
//unshift-add new element at front
// delete num[0]=-delete particular element from index
console.log(num)
// num.unshift(1)
let num1=[45,3,4,56,7]
let num2=[23,42,23,34,222]
console.log(num2)
let num3=num1.concat(num2)
console.log(num3)
//Sort the array and modify orignal array
num1.forEach((e)=>{//doesnot return anything
    console.log(e*e)
})
//Array from
let name='simran'
let arr=Array.from(name)
console.log(arr)