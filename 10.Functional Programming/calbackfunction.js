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

function fname(name,cb){
    console.log(name)
    cb('Kold')
}
function lname(lname){
    console.log(lname)
}
fname('Sam',lname)//Lname is an another function which passed in this
// lname('Kold')
