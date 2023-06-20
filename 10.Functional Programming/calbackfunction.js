//In this we pass the one function to another function as an argument
// function fname(name){
//     console.log(name)
// }
// fname('Sam')
// function lname(name){
//     console.log(name)
// }
// lname('Kold')

//CallBackFunction

// function fname(name,cb){
//     console.log(name)
//     cb('Kold')
// }
// function lname(lname){
//     console.log(lname)
// }
// fname('Sam',lname)//Lname is an another function which passed in this
// // lname('Kold')


//Another Example

const add= (a,b,opr)=>{
    return opr(a,b)
}
const opr = (m,n) =>{
    return m+n
}
const sub=(a,b)=>a-b
console.log(add(10,20,opr))
console.log(add(10,20,sub))