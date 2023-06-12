//WAF to implement FizzBuzz Challenge
let arr=[]
let cnt=1
function fizzbuzz(){
    if(cnt%3==0 && cnt%5==0){
        arr.push('FizzBuzz')
    }
    else if(cnt%5==0){
        arr.push('Buzz')
    }
    else if(cnt%3==0 ){
        arr.push('Fizz')
    }
    else{
        arr.push(cnt)
    }
    cnt++
    if(cnt==21){
        
    }
    else{
        fizzbuzz()        

    }
}
fizzbuzz()

console.log(arr)