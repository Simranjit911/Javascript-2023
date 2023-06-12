//Check leap yr of not
function leapyr(num){
    if(num%4==0 ){
       if(num%100==0){
        if(num%400==0){

            console.log('This is leap Year')
        }
        else{
            console.log('This is not leap Year')

        }
        
    }
    else{
           console.log('This is leap Year')
        
       }

    }
    else{

        console.log('This not leap Year')
    }
}
leapyr(2003)