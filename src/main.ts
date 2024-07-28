
let age : number = 21//type string is not assigned to number 

if (age < 50)
    age += 20;
console.log(age)

let sales: number = 1234_3535
let  course: string = 'Typescript'
let level;
level =1 
level = 'a'
//best practice is to limit using any 

function render(document:any){
    console.log(document)
}

//arrays 

let numbers: number[] = [1,2,3,]

//when using an empty array 
let numberx: number[] = []
numbers[0]=5

//great feature to add some code functionality to your arrays 
//numbers.forEach(n=>n.toLocaleString)

//tuples 
//fixed length array that respondes to a particular type
//key value pairs 
let names: [number, string]=[1,'Ian']

names[1]
names.push(1);//f
//internally expressed as plain js arrays 


//ENUMS
const small = 1 
const medium =2
const large =3 

const enum Size{Small=1 ,Medium , Large}
//enum Size{Small = 's',Medium = 'm', Large='l'}this can also be expressed in this format this sets the value to members 
//using an enums we can represent a list of related constants 
//using a const generates a more optimized code 

let mySize: Size = Size.Medium
console.log(mySize)
