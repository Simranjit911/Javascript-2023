function createcar(_name,_company,_color){
    this.name=_name
    this.company=_company
    this.color=_color
    this.drive=()=>{
        console.log(`I am driving ${this.name} and its in ${this.color}`)
    }
}
let PB65EM0008=new createcar('Fortuner','Toyoya','Black')
let PBX1=new createcar('G-63','Mercedes','Black')
console.log(PBX1)
console.log(PB65EM0008)
PBX1.drive()