let rand = Math.floor(Math.random() * 100)
let ans
let cnt = 100
let gues
while (ans != rand) {
    cnt -= 1
    gues = gues+1
    ans = Number(prompt('Guess num'))
    if (ans == rand) {
        console.log('Congo! You guess the num' + 'you score is ' + cnt)
        console.log('You take ' +  gues + ' no. of gueses')
        console.log(rand)

    }
    else if ( ans<rand && rand<100) {
        console.log('You have entered ' + ans)
        console.log('No. is greater than answer')
        console.log(rand)
    }
    else {
        console.log('You have entered ' + ans)
        console.log('NO. is less than answer')
        console.log(rand)

    }

}