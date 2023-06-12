//capitolize the first lettter of enterd name by user
let name=prompt('Enter ur name')
let fstletter=name.slice(0,1)
let restofletter=name.slice(1,name.length)
restofletter=restofletter.toLowerCase()
fstletter=fstletter.toUpperCase()
name=fstletter+restofletter
alert('Hi ' + name)
