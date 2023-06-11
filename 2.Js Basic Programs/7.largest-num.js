//WAF that return largest number
//WAF to perform linear srch in array
let arr=[10,52,23,54,87,4]
function lar(n){
    let max=n[0]
    for(let i=0;i<n.length;i++){
        if(n[i]>max){
            max=n[i]
        }
    }
    console.log(max +" is largest number " )
}
lar(arr)