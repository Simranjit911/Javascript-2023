//Image1 code
let randomno1=Math.floor(Math.random()*6 )+1 

let diceimg1='dice' + randomno1 + '.png';
let imgsrc1='images/' + diceimg1

let img1=document.querySelectorAll('img')[0]
img1.setAttribute('src',imgsrc1)

//Image2 code
let randomno2=Math.floor(Math.random()*6 )+1 

let diceimg2='dice' + randomno2 + '.png';
let imgsrc2='images/' + diceimg2

let img2=document.querySelectorAll('img')[1]
img2.setAttribute('src',imgsrc2)

//Winning code
if(randomno1>randomno2){
    document.querySelector('h1').innerHTML="Player 1 Wins!"
}else if(randomno1===randomno2){
    document.querySelector('h1').innerHTML="Draw! \n Try Again "    
}
else{
    document.querySelector('h1').innerHTML="Player 2 Wins!"
    
}