//WAF to reverse a array
let arr=[1,2,3,4,5]
function revar(n){
    let revarr=[]
    for(let i=n.length-1;i>=0;i--){
        revarr.push(n[i])
    }
    console.log(revarr +" is reverse array " )
}
revar(arr)