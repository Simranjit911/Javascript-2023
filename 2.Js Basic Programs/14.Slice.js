//Slice the extras charcters like they cut on twitter
    //Counter the characters and tell the user how many they left
    var a=prompt("Enter Your Text")
    var cnt=a.length
    a1=a.slice(0,140)
    alert("You have Written " + cnt + " characters and you have left "+ (140-cnt) + ' characters')
    alert(a1)
    // 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890abc