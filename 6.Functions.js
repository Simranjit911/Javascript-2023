// A function in programming is a reusable piece of code that performs a specific task when called or invoked. 
//Example
// syntax example
// function functionName(parameter1, parameter2, ...) {
//     // function body
//     // statements to be executed
//     return result;
//   }



//***************************************************types ******************************************** */
//1..............Default Parameters***************************************
function calculateArea(width, height = 1){
const area = width * height;
console.log(area);
}
calculateArea(25,5)
//Export Module or File
module.exports ={
    cal:calculateArea
}


//2.*******************Variable Scope**********************************
// example 1
// function downloadVideo () {
//     const videoLink = "xyz.mp4";
//     }
//     downloadVideo()
//     console.log(videoLink); // this will return undefined 
//     // as variables of function is block scope than can be access with in function
    
//     // example 2
    
//     const videoLink = "xyz.mp4";
    
//     function downloadVideo () {
//     console.log(videoLink);
//     }
//     downloadVideo()
    
//     // inside function we can access global variable 

//3.**************************Anonymous Function*******************************************
//Has no name mostly used with callback function
let func=function(username,pas){
    console.log(username,pas)
}
func(30,55)

//4.********************************************Calback Function******************************************* */
// In callback function, function is used as parameter of other function
//!st function parameter used as function 
//  function pri(msg,callback){
//     console.log(msg)
//     callback()
//  }
//  function godby(){
//     console.log('i m good !')
//  }
//  pri('Hello')


//*****************************************Higher Order Function******************************* */
//1.Map-Used when we need 2 make new array
let arr=[10,20,30]
let a=arr.map((val,index,array)=>{
    console.log(val,index,array)
    return val +index
})
console.log(a)

//2.Foreach-Used when we need 2 perfrom operation on existing element--works same as map but dont return anything

//3.Filter -Used to filter something
let b=arr.filter((f)=>{
    console.log(f>15)
})

//Reduce method take two input as the parameter