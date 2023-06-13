//Wap to print fibonacci sequence
function fib(term){
    let n1=0,n2=1,next
    for(let i=1;i<=term;i++){
        console.log(n1)
        next=n1+n2
        n1=n2
        n2=next
    }

}
fib(4)
