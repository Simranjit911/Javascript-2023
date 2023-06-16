//WAP to find sqroot of num and tells its even or not
//Imperative Way 
let num=10
let sqr=Math.pow(num,2)
console.log(sqr)
if(sqr%2==0)
    console.log('Even')
else{
    console.log("Odd")
}
console.log('Declarative Way:')
//Declarative Way
const check = (x) =>(x*x%2==0 ? true :false)//using ternanry operator
console.log(check(10))