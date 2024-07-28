//functions when writing ts code 
// its important practice to annotate the proper return type eg number or void 
//always annotate through and its great practice to check through the config files for various ways of configurign the settings such as adding a noImplicitReturns or and noUnsedParameters noUnsedLocals in the tsConfig.json
//adding the 
function calculateTax(income: number, taxYear = 2022): number {
    //if((taxYear || 2022)<  2022) try
    if(taxYear < 2022)
        return income * 1.2;
    //undefined if 
    return income*1.3
}
calculateTax(10000,2021)


//objects 
/*let employee: {
    id: number,
    name: string
    retire: (date:Date)=> void
} = {id:1, name:'Claire',retire:(date:Date)=>{console.log(date)}}*/
/*
}= {id:1 }
//make code make sense
employee.name = 'Ian'*/

//defining an object 
//signature, type of the method, number 

//allies 
//making various objects from one single object more like inheritance from java 
type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date)=> void

}
//union types 
let employee: Employee ={id:1, name:'Claire',retire:(date:Date)=>{console.log(date)}}

function kgToLbs(weight:number|string):number {
    //Narrowing-> making it to a simpler data type
    if(typeof weight === 'number')
        return weight * 2.2
    else;
        return parseInt(weight)*2.2
}
kgToLbs(10)


//intersection 
type Draggable = {
    drag: ()=> void
}

type Resizable  ={
    resize: ()=> void
}

type UIWidget = Draggable & Resizable
let TextBox : UIWidget = {
    //implemention of drag and resize methods 
    drag: ()=>{},
    resize: ()=> {}
}


//literal types -annoting with an exact, specific 

type Quantity= 50 |100
let quantity : 50;
let quant : 50|100=100

type Metric = 'cm' | 'inches'


//Nullable Types 

function greet(name:string|null |undefined){//used to define the datatypes that you see fit to be placed in the 
    if(name)
    console.log(name.toUpperCase());
    else
    console.log('Hola!')
    
}
//greet()

//optional Chaining 

type Customer = {
    birthday?: Date
}

function getCustomer(id:number): Customer |null {
    return id === 0 ? null : {birthday: new Date()};

}

let customer = getCustomer(0);
//if(customer != null && customer !== undefined)
//optional property access operator 
    console.log(customer?.birthday?.getFullYear());//? chaining action is called when the optional chaing operator is called
    
//Optional element access operator
//if (customer !== null && customer !== undefined)
   // customer?.[0]


//Optional Call 
let log: any = null;
log?.('a');//will get executed if the log
