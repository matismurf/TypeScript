//string, boolean, number ...
let x :number = 10;

x = 16;

console.log(x);

//inferencia x annotation
const y = 12;
//y = "teste"

let z: number = 12;

//tipos básicos
let fistName: string = 'Matias'
let age: number = 21
const isAdmin:boolean = true

//object
const myNumbers: number[] = [1,2,3]
console.log(myNumbers)
myNumbers.push(5)

//tuplas
let myTuple: [number, string, string[]]
myTuple = [5, 'teste', ['a','b']]

//object literals -> {prop:value}
const user: {name:string, age:number} = {
    name: "pedro",
    age: 18
}

console.log(user)

//any
let a:any = 0
a = 'teste'
a= true
a=[]

//union type
let id: string | number = "10"
id = 200

//type alias
type myIdType = number | string
const userId:myIdType = 10
const productId:myIdType="00001"