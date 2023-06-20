//q1-Create an array of numbers and take input from user to add numbers to this array
// let n=Number(prompt('Enter Size of n'))
// let arr=[]
// let input
// let i=0
// while(i!=n){
//     input=Number(prompt('Enter data'))
//     arr.push(input)
//     i++
// }
// console.log(arr)

//q2-Adding no.to array while 0 is entered to array
let arr = [250, 40, 60, 5, 2, 3, 6, 10]
// let a
// do{
//     a=Number(prompt('Enter a no.'))
//     arr.push(a)

// }while(a!=0)
// console.log(arr)


//q4-Use filter and return no divisible by 10
let ten = arr.filter((a) => {
    return a % 10 == 0
})
console.log(ten)

//q5-return sq. of each element of array
let sq = arr.map((a) => {
    return a * a
})
console.log(sq)

//q6-Calculate the factorial of given no. using the reduce
let ar=[1,2,3]
let fac=ar.reduce((x1,x2)=>{
    return x1*x2
})
console.log(fac)