//Rules for creating javascript Variables
/*
1.cannot start with numbers
2.can start with letter,number,_ or $
3.are case sensitive
*/
// comment off only one multiline comment at a time

/*
// var Keyword
var name = "manish"; 
console.log(name)

channel = 'myyoutubechannel'
console.log(channel)

var marks = 3454;
var marks = 0; //redeclaration
console.log(marks);

var city = 'mumbai'
{
    var city = 'delhi'
    city = 'kolkata' // updation
    console.log(city)
}
console.log(city)
*/

/*
// let Keyword
let name = "manish"; 
console.log(name)

let marks = 3454;
// let marks = 0; //not have redeclaration
console.log(marks);

let city = 'mumbai'
{
    let city = 'delhi' // not use var here -[ cannot redeclare block scoped variable ]
    city = 'kolkata' // updation
    console.log(city)
}
console.log(city)

let cty = 'mumbai'
{
    cty = 'kolkata' // updation
    console.log(cty)
}
console.log(cty)
*/

/*
// const Keyword
const ownersName = "hare ram"
// const ownersName = "hari om" //cannot redeclare
// ownersName = "Harry" // cannot update
console.log(ownersName);

const fruit = "Orange";
{
    const fruit = "Apple";
    console.log(fruit);
}
console.log(fruit);

const arr1 = [12,23,43,45];
arr1.push(46);
console.log(arr1)
*/