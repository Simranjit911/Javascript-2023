let arr=['Snake','Water','Gun']
let cpu=arr[(Math.floor(Math.random() * arr.length))]
let user=prompt('Select One thing from snake,water or gun')
if(cpu==user){
    document.write('Draw!')
}
else if(user=='Gun' && cpu == 'Snake'){
    document.write('User Wins')
    document.write(cpu)
}else if(user=='Snake' && cpu == 'Gun'){
    document.write('Cpu Wins')    
    document.write(cpu)

}else if(user=='Water' && cpu == 'Snake'){
    document.write('User Wins')  
    document.write(cpu)

}else if(user=='Snake' && cpu == 'Gun'){
    document.write('Cpu Wins')    
    document.write(cpu)

}else {
    document.write('User Wins!')
    document.write(cpu)

}