//Generate the random no.
// let n=Math.random()
// n=n*6
// n=Math.round(n)
// console.log(n)
//Calculator
// let n1=prompt("Enter name 1")
// let n2=prompt("Enter name 2")ṁ
let n=Math.random()*100
// n=n*99
n=Math.floor(n)
console.log(n+" %")
if(n<=25)
{
    console.log('Score is too low')
    
}
else if(n<=50){
    console.log('Not too much  low')
}
else if(n<=75 || n<=85){
    console.log('Yeah! good score')
}
else{
    console.log('Yeah! Perfect score')
}