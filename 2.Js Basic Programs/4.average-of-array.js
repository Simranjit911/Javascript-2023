//WAF to find the average of array
let arr=[1,2,3,4,5]
function avr(nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    console.log(sum/nums.length)
}
avr([1,2,3,4])