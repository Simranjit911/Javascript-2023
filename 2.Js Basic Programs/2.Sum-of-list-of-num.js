// WAF to to add sum of list of numbers
function sum(...num){
    let t=0
    for(let x=0;x<num.length;x++){
        t=t+num[x]
    }
    console.log(t)
}
sum(1,2,3,4,5)