//WAF to perform linear srch in array
let arr=[-10,52,-23,54,87,-4]
function posarr(n){
    let posnum=[]
    for(let i=0;i<n.length;i++){
        if(n[i]>0){
            posnum.push(n[i])
        }
    }
    console.log(posnum)
}
posarr(arr)