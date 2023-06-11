//WAF to perform linear srch in array
let arr=[10,52,23,54,87,4]
function srch(n,k){
    for(let i=0;i<n.length;i++){
        if(n[i]==k){
            console.log(k +" found at index " + i)
        }
    }
}
srch(arr,4)