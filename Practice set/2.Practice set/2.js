//q1-Use logical operator to find age between 10 &20
// let age=prompt('Enter age')
let age='19'
age=Number(age)
if(age>=10 && age<=20){
    console.log('Age is b/w 10 and 20')
}
else{
    console.log('Not b/w 10 and 20')
}
//q2-Use Switch case Statement
let marks=90
switch(marks){
    case 90:
        console.log('Good Marks')
        break;
    case marks>=80:
        console.log('Not Bad Marks')
        break
    default:
        console.log('Do Some Hardwork')
        
}

//q3 Tell if num is divisible by 2 and 3 or not
let n=6
if(n%2==0 && n%3==0){
    console.log(`${n} is divisible by 2 and 3`)
}
else{
    console.log('Not divisible by 2 and 3')
}

//q4 Tell if num is divisible by 2 or 3 or not
let n1=9
if(n1%2==0 || n1%3==0){
    console.log(`${n1} is divisible by 2 or 3`)
}
else{
    console.log('Not divisible by 2 and 3')
}
//Use ternary operator to make condition
let age1=2
console.log(age1>=18?' U can drive':'u can not drive')