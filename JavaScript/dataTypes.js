//Data types in javascript
//{primitive data type}

//string
let name ="Harry";
console.log("My name is "+ name )
console.log("Data type is "+(typeof name))

//Numbers
let marks = 34.4;
console.log("Data type is "+(typeof marks))

//Boolean 
let isDriver = true;
console.log("Data type is "+(typeof isDriver))

//Null
let nullVar = null;
console.log("Data type is "+(typeof nullVar))

//Undefined
let undef = undefined;
console.log("Data type is "+(typeof undef))

//{reference data type}

//Array
let myarr = [1,2,3,4,false,"String"];
console.log("Data type is "+(typeof myarr))

//Object
let stMarks = {
    Harry:34,
    Subham:36,
    Rohan:89
}
console.log(typeof stMarks)


//function
function findName() {
    
}
console.log(typeof findName)

//Date
let date = new Date();
console.log(typeof date);