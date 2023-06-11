//WAF to merge 2 array
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
function merge(a1,a2){
    let merge=[]
    for(x of a1){
        merge.push(x)
    }
    for(x of a2){
        merge.push(x)
    }
    console.log(merge)
   
}
merge(arr1,arr2)