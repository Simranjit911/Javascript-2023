//Using Switch Statement Check number is divisible by 5 and 15
 let num=5
 switch(true){
    case num%5==0 && num%15==0:
        console.log("Divisible by 5 And 15")
        break
    case num%5==0:
        console.log("Divisible by 5")
        break
    case num%15==0:
        console.log("Divisible by 15")
        break
    default:
        console.log('No one')
 }