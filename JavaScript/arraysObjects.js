// Arrays and Objects
let marks = [34,23,24,93,73,25];
const fruit = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];
const arr = new Array(23,123,21,'Orange');

console.log(marks);
console.log(mixed);
console.log(arr);
console.log(fruit[1]);

console.log(arr.length);
console.log(Array.isArray("23"))
console.log(Array.isArray(mixed[2]))
console.log(Array.isArray(arr))

arr[0]="manya";
console.log(arr)

let value = marks.indexOf(73);
console.log(value)

//mutating or modifying arrays
marks.push(3445);
console.log(marks)
marks.unshift(1009);
console.log(marks)
marks.pop();
console.log(marks)
marks.shift();
console.log(marks)
marks.splice(2,3);
console.log(marks)
marks.reverse();
let marks2 = [1,2,3,7]
marks = marks.concat(marks2);
console.log(marks)


let myObj = {
    'first name' : 'manya',
    channel : "manya-space",
    isActive :true,
    marks : [1,5,3,6]
}

console.log(myObj)
console.log(myObj.isActive)
console.log(myObj['first name'])
console.log(myObj['channel'])
