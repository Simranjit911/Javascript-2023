//Loops Questions
/*
Types of loops in Javascript
1.while
2.do-while
3.for
4.forEach()
5.map()
6.for…in
7.for…of
*/
//1.While loop-Print Even number upto 60 using for loop
// let i=1
// while(i<=10){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++;
// }

//2.For Loop
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//3.Do-While Loop
// let i=10;
// do{
//     console.log('hi')
//     i++
// }while(i<10)

// *************************************************Sums********************************************
//1.Factorial
// let n=5
// let fac=1
// for(let i=1;i<=n;i++){
//      fac=fac*i
// }
// console.log(fac)



// 2.Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

        const pin=7508
        const guess=' Please make your guess: '
        const wrong='Sorry that was wrong'
        const right='That\'s correct'
        const max=4
        let cur=1
        console.log(guess)
        for(let i=1;i<=max;i++){
            console.log()
            const ui=parseInt(prompt("Enter Num"+"Attempts available"+ max-cur))
            if(ui===pin){
                console.log(right)
                break
            }else{
                console.log(wrong)
            }
            cur++
            // if(cur===max){
            //     console.log('You finish limit')

            // }
        }