//q1-FInd the length of string
let name='Sa\'m'
console.log(name.length)

//q2-Use include function
let sent='Hello my name is '+ name
console.log(sent.includes('Sa\'m'))

//q3-Convert to lowercase and uppercase
sent=sent.toLowerCase()
console.log(sent)
sent=sent.toUpperCase()
console.log(sent)

//q4-Extract the string
console.log(sent.slice('Hello my name is '.length))

let name2='Simran'
name2[0]='h'//This will not change character bcoz string is immutable
console.log(name2)