
console.log("Hello ji")

let a = 5
console.log(a)

var v = 555;
console.log(v)

let b = 10;
// {
    // let b = 55;
    // console.log(b)
// }
        
console.log(b)
        
let bv = 333;


var v = 444;
console.log(v)

let n = 555555;
console.log(n)

n = 'Hello'
console.log(n)


let _ = 5;
let $aa = 55

let person = {
    name1 : 'himank',
    age : 20,
}

let aa = 5;
let bb = 10;
let c = aa + bb;
console.log(c)

let x = 5;
console.log(x++);

console.log(1 == '1');
console.log(1 === '1');

let ag = 18;
let ss =  (ag >= 18 ?  'you can vote' : 'you cannot vote' );
console.log(ss)

console.log(!true);

console.log(true && 'Himank');

console.log(false && 500 && 5);

console.log(5 & 7);

let rectangle = {
    length : 112121,
    breadth : 5,
    draw: function(){
        console.log('I am a rectangle')
    }
}

console.log(rectangle)
console.log(rectangle.length)
console.log(rectangle.draw)

function createRectangle(length, breadth) {
    return rect = {
        length : length,
        breadth : breadth,
        draw: function(){
            console.log('hero')
        }
    };
}
let rectangle1 = createRectangle(77,78);
console.log(rectangle1)
rectangle1.draw()


function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log('I am a constructor function rectangle')
    }
}
let rectangle2 = new Rectangle(40, 41);
console.log(rectangle2);
rectangle2.draw()

// every function is an object in javascript
// therefore function also has a constructor function  
// which is used to create a function
// this is called as function constructor
// example is given below
let Rectangle1 = new Function(
    'length',
    'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log('I am a constructor function rectangle')
    }`
);
let rectangle3 = new Rectangle1(83, 84);
console.log(rectangle3);

rectangle2.color = 'red';
console.log(rectangle2)

delete rectangle2.length;
console.log(rectangle2)

let f = 10;
let g = f;
f++;
console.log(f)
console.log(g)

let j = {value:10};
let k = j;
j.value++;
console.log(j)
console.log(k)

let q = 66;
function inc (q){
    q++;
}
inc(q);
console.log(q)         // 66
// console.log(inc(q))    // undefined

let r = {value:77};
function incre(q){
    q.value++;
}
incre(r);
console.log(r.value)         // 78
// console.log(incre(r))        // undefined


// for-in and for-of loop
let person1 = {
    name : 'himank',
    age : 20,
    coutry : 'india'
}

for(let key in person1){
    console.log(key, person1[key]);
}

// for-of loops can only be used with iterable objects like arrays, strings etc. because they have a symbol.iterator property in them which is used by for-of loop to iterate over the object but we can use for-in loop with any object because it iterates over the properties of the object and not the values

// for(let key of person1){   --> this will give an error
//     console.log(key);
// }

for(let key of Object.keys(person1)){
    console.log(key);
}

for(let key of Object.entries(person1)){
    console.log(key);
}

// Object Cloning
// method 1 --> Iterating over the object (Iteration)
let dest = {};
for(let key in person1){
    dest[key] = person1[key];
}
console.log(dest);

// method 2 --> using Object.assign() method
let dest1 = Object.assign({}, person1);
console.log(dest1);

// method 3 --> using spread operator
let dest2 = {...person1};
console.log(dest2);

// method 4 --> using JSON.stringify() and JSON.parse() methods
let dest3 = JSON.parse(JSON.stringify(person1));
console.log(dest3);

// Garbage Collection
// in javascript, memory is automatically allocated and deallocated by the javascript engine. we don't have to worry about memory allocation and deallocation. javascript engine automatically allocates memory to the variables and objects and when they are no longer in use, it automatically deallocates the memory. this is called garbage collection.
// In cpp and java, we have to manually allocate and deallocate memory to the variables and objects. this is called manual memory management.

// to check any property is present in an object or not 
console.log('name' in person1);   // --> true
console.log('name1' in person1);  // --> false
if('name1' in person1){
    console.log('Present');
}
else{
    console.log('Not Present');
}

// In-Built Objects
// 1. Math Object
console.log(Math.random());   // --> gives a random number between 0 and 1
console.log(Math.round(1.9));   // --> rounds off the number
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));   // --> gives the maximum number
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));   // --> gives the minimum number
console.log(Math.PI);   // --> gives the value of pi
console.log(Math.E);   // --> gives the value of e
console.log(Math.pow(2,3));   // --> gives the value of 2^3
console.log(Math.sqrt(4));   // --> gives the value of square root of 4
console.log(Math.abs(-4));   // --> gives the value of absolute value of -4
console.log(Math.ceil(7.05));   // --> Nearest integer greater than or equal to 7.05 = 8
console.log(Math.floor(4.9));   // --> Nearest integer less than or equal to 4.9 = 4


// 2. String Object
// Strings can be created using string literals and string objects
// string literals (primitive type)
let str = 'himank';
console.log(str);
// string objects
// string objects are created using the new keyword and String() constructor function 
let str1 = new String('himank');
console.log(str1);

console.log(typeof str);   // --> string
console.log(typeof str1);   // --> object 

// We can convert string objects to string literals using the toString() method while using dot notation, we can access the properties and methods of the string object in string literal.

// String Methods
let message = 'This is my first message';
console.log(message.length);   // --> gives the length of the string
console.log(message[0]);   // --> gives the character at index 0
console.log(message.includes('my'));   // --> checks whether the string contains the given substring or not
console.log(message.startsWith('This'));   // --> checks whether the string starts with the given substring or not
console.log(message.endsWith('message'));   // --> checks whether the string ends with the given substring or not
console.log(message.indexOf('my'));   // --> gives the index of the given substring
console.log(message.indexOf('my', 5));   // --> gives the index of the given substring after the given index
console.log(message.replace('first', 'second'));   // --> replaces the first substring with the second substring
console.log(message.toUpperCase());   // --> converts the string to uppercase
console.log(message.trim());   // --> removes the extra spaces from the string 
console.log(message.split(' '));   // --> splits the string into an array of substrings

// Escape Notation
// \n --> new line
// \t --> tab
// \' --> single quote
// \" --> double quote
// \\ --> backslash

// Template Literals
// It prints the string as it is.
// Template literals are used to create strings. They are enclosed in backticks (` `) instead of single quotes (' ') or double quotes (" "). Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function. The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the processed template literal, which you can then manipulate before outputting. To escape a backtick in a template literal, put a backslash (\) before the backtick.

let message1 = `Hi ${person1.name}
how are
  you?`;
console.log(message1);

// Date Object
let date = new Date();
console.log(date);    //  --> gives the current date and time = Mon Sep 18 2023 20:03:17 GMT+0530 (India Standard Time)

let date1 = new Date('November 15 2003 09:00');
console.log(date1);   //  --> gives the date and time of the given date = Sat Nov 15 2003 09:00:00 GMT+0530 (India Standard Time)

let date2 = new Date(2003, 11, 25, 8);  // --> month starts from 0-11
console.log(date2);   //  --> gives the date and time of the given date = Thu Dec 25 2003 08:00:00 GMT+0530 (India Standard Time)

// We can use getter and setter methods to get and set the date and time of the given date
date2.setFullYear(1947);
console.log(date2);   //  --> gives the date and time of the given date = Fri Dec 25 1947 08:00:00 GMT+0530 (India Standard Time)
console.log(date2.getMonth());   //  --> gives the month of the given date = 11

// Arrays
// Arrays are used to store multiple values in a single variable. Arrays are created using square brackets ( [ ] ) and each item inside an array is separated by a comma. Arrays can store any data types (numbers, strings, objects, functions, other arrays etc.) in a single array. Arrays are zero-indexed, that means the first element of the array is stored at the index 0 and the second element is stored at the index 1 and so on. We can access the elements of an array using the index of the element. We can also change the elements of an array using the index of the element. We can also add and remove elements from an array using various methods.
let arr = [11,12,13,14,15];
console.log(arr);

let arr1 = [11,12,13,14,15,'himank', {name:'himank', age:20}, function(){console.log('hello ji')}];
console.log(arr1);

arr.push(16);
console.log(arr);   //  --> [11, 12, 13, 14, 15, 16] Adds the element at the end of the array

arr.unshift(10);
console.log(arr);   //  --> [10, 11, 12, 13, 14, 15, 16] Adds the element at the beginning of the array

arr.splice(2, 0, 77, 78);
console.log(arr);   //  --> [10, 11, 77, 78, 12, 13, 14, 15, 16] Adds the given elements at index 2

arr.splice(2, 1, 77, 78);
console.log(arr);   //  --> [10, 11, 77, 78, 13, 14, 15, 16] Deletes the element at index 2 and adds the given elements at index 2
// arr.splice (start, deleteCount, item1, item2, ...) --> start is the index from where we want to start deleting the elements, deleteCount is the number of elements we want to delete, item1, item2, ... are the items we want to add at the given index

// Searching in an array
console.log(arr.indexOf(13));    //  --> 4, if the element is not present in the array, it returns -1
console.log(arr.includes(13));   //  --> true, if the element is not present in the array, it returns false
if(arr.indexOf(13) !== -1){      //  --> if the element is present in the array, it returns Present
    console.log('Present');
}

// Above searching methods are applicable for primitive string types...
// For reference types, we have to use find() or findIndex() method
let courses = [
    {id:1, name:'a'},
    {id:2, name:'b'},
    {id:3, name:'c'},
    {id:4, name:'d'},
];

console.log(courses.includes({id:1, name:'a'}));   //  --> false

// Callback Functions --> A callback function is a function that is passed to another function as a parameter and the callback function is called inside the other function. 
// Here callback function is passed to the find() method and the find() method calls the callback function for each element in the array and if the callback function returns true for any element, the find() method returns that element otherwise it returns undefined.
let course1 = courses.find(function(course){
    return course.name === 'a';
});
console.log(course1);   //  --> {id: 1, name: "a"}

let course2 = courses.find(function(course){
    return course.name === 'z';
});
console.log(course2);   //  --> undefined

console.log(courses.findIndex(function(course){
    return course.name === 'c';
}));   //  --> 2

console.log(courses.findIndex(function(course){
    return course.name === 'xyz';
}));   //  --> -1

// Arrow Functions
let course3 = courses.find(course => course.name === 'a');  //  --> {id: 1, name: "a"}
//  --> if the function has only one parameter, we can remove the parenthesis around the parameter and if the function has only one line of code, we can remove the curly braces and the return keyword
// if the function has zero or more than one parameter, we have to use parenthesis around the parameters and if the function has more than one line of code, we have to use curly braces and the return keyword


// Removing Elements from an Array
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let last = arr2.pop();
console.log(arr2);   //  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(last);   //  --> 10

let first = arr2.shift();
console.log(arr2);   //  --> [2, 3, 4, 5, 6, 7, 8, 9]
console.log(first);   //  --> 1

let middle = arr2.splice(2, 3);   //  --> deletes the element at index 2 and deletes 3 elements after index 2 i.e. 4, 5, 6
console.log(arr2);   //  --> [2, 3, 7, 8, 9]
console.log(middle);   //  --> [4, 5, 6]

// Emptying an Array
let numbers = [1,2,3,4,5,6,7,8,9,10];
let numbers1 = numbers;

// Method - 1
numbers = []; //  --> this will not empty the numbers1 array because numbers1 is a reference type and it stores the reference of the numbers array and when we empty the numbers array, it will create a new array in the memory and store the reference of that array in the numbers variable and the numbers1 variable will still store the reference of the old array in the memory. Therefore, numbers1 will not be empty.
console.log(numbers);   //  --> []
console.log(numbers1);   //  --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Method - 2
numbers.length = 0;  //  --> this will empty the numbers1 array because numbers1 is a reference type and it stores the reference of the numbers array and when we empty the numbers array, it will empty the numbers1 array also because both the variables are storing the reference of the same array in the memory.
console.log(numbers);   //  --> []
console.log(numbers1);   //  --> []

// Method - 3
numbers.splice(0, numbers.length);  //  --> this will empty the numbers1 array because numbers1 is a reference type and it stores the reference of the numbers array and when we empty the numbers array, it will empty the numbers1 array also because both the variables are storing the reference of the same array in the memory.
console.log(numbers);   //  --> []

// Combining and Slicing Arrays
let first1 = [1,2,3];
let second = [4,5,6];
let third = first1.concat(second);
console.log(third);   //  --> [1, 2, 3, 4, 5, 6]

let fourth = third.slice(2, 4); //  --> it will slice the array from index 2 to index 4 but it will not include the element at index 4
console.log(fourth);   //  --> [3, 4]

let fifth = third.slice(2); //  --> it will slice the array from index 2 to the end of the array
console.log(fifth);   //  --> [3, 4, 5, 6]

let sixth = third.slice(); //  --> it will slice the whole array
console.log(sixth);   //  --> [1, 2, 3, 4, 5, 6] (Copy of the third array)

// Combining Arrays using Spread Operator 
// We can also use it to combine array objects whereas concat() method cannot be used to combine array objects.
let merged = [...first1, ...second];
console.log(merged);   //  --> [1, 2, 3, 4, 5, 6]

let combine = [...first1, 'a', ...second, 'b', true];
console.log(combine);   //  --> [1, 2, 3, "a", 4, 5, 6, "b", true]

// Iterating an Array
// for-of and for-each loops can be used to iterate over an array
let arr3 = [10,20,30,40,50];

for(let value of arr3){
    console.log(value);
};

// arr3.forEach(function(number){
//     console.log(number);
// });

arr3.forEach( number => console.log(number));

// Joining Arrays
let joined = arr3.join('a');
console.log(joined);   //  --> 10a20a30a40a50 (It will join the elements of the array with the given string)

// Splitting a String
let message2 = 'This is my message';
let parts = message2.split(' ');
console.log(parts);   //  --> ["This", "is", "my", "message"] (It will split the string into an array of substrings)

let joined1 = parts.join(' ');
console.log(joined1);   //  --> This is my message (It will join the elements of the array with the given string)

// Sorting Arrays
// sort method sorts the array of primitive types only not the array of reference types
let arr4 = [10,5,20,15,25,30];
arr4.sort();
console.log(arr4);   //  --> [10, 15, 20, 25, 30, 5] (It will sort the array in ascending order)

arr4.reverse();
console.log(arr4);   //  --> [5, 30, 25, 20, 15, 10] (It will sort the array in descending order)

// 5 comes after 30 because the sort() method converts the elements of the array into strings and then it sorts the array in ascending order.
// if we want to sort the array in ascending order, we have to pass a compare function to the sort() method
arr4.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(arr4);   //  --> [5, 10, 15, 20, 25, 30] (It will sort the array in ascending order)

// If we want to sort the array in descending order, we have to pass a compare function to the sort() method
arr4.sort(function(a, b){
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
});
console.log(arr4);   //  --> [30, 25, 20, 15, 10, 5] (It will sort the array in descending order)


// To sort the array objects, we have to pass a compare function to the sort() method
let courses1 = [
    {id:1, name:'Node.js'},
    {id:2, name:'JavaScript'},
    {id:3, name:'Python'},
    {id:4, name:'Java'},
];
courses1.sort(function(a, b){
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});
console.log(courses1);   //  --> [{id: 4, name: "Java"}, {id: 2, name: "JavaScript"}, {id: 1, name: "Node.js"}, {id: 3, name: "Python"}] (It will sort the array in ascending order)

// Filtering an Array
let arr5 = [5,-4,10,-3,15,-2,0];

// let filtered = arr5.filter(function(value){
//     return value>=0;
// });
// console.log(filtered);   //  --> [5, 10, 15, 0] (It will filter the array and return the elements which are greater than or equal to 0)

let filtered1 = arr5.filter(value => value>=0);
console.log(filtered1);   //  --> [5, 10, 15, 0] (It will filter the array and return the elements which are greater than or equal to 0)

let filtered2 = arr5.filter( value => value===0);
console.log(filtered2);   //  --> [0] (It will filter the array and return the elements which are equal to 0)

// Mapping an Array
let arr6 = [17,18,19,20];

let mapped = arr6.map( value => 'student_no'+value);
console.log(mapped);   //  --> ["student_no17", "student_no18", "student_no19", "student_no20"] (It will map the array and return the elements with the given string)

let numbers2 = [4, 9, 16, 25];
let newArr = numbers2.map(Math.sqrt);
console.log(newArr);   //  --> [2, 3, 4, 5] (It will map the array and return the square root of the elements)

let numbers3 = [65, 44, 12, 4];
let filtered3 = numbers3.filter( value => value>=0);
let mapped1 = filtered3.map( num => {value: num});
console.log(mapped1);   //  --> [{value: 65}, {value: 44}, {value: 12}, {value: 4}] (It will map the array and return the elements with the given object)
 
// Chaining Methods
let arr7 = [1,2,3,4,5,6,7,8,9,10];

// let filtered4 = arr7.filter( value => value>=0);
// let mapped2 = filtered4.map( num => ({value: num}));
// console.log(mapped2);

// Instead of using two variables, we can use chaining methods
let mapped2 = arr7.filter( value => value>=0).map( num => ({value: num}));
console.log(mapped2);   //  --> [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}] (It will map the array and return the elements with the given object)

// Reducing an Array
// Let add the elements of the array
let arr8 = [1,2,3,4,5,6,7,8,9,10];

// Method-1
let total = 0;
for(let n in arr8){
    total += n;
}
console.log(total);   //  --> 00123456789 (It will concatenate the elements of the array because it converts the elements of the array into strings. We have to use for-of loop to add the elements of the array(for iterables).)

// Method-2
let total1 = 0;
for(let n of arr8){
    total1 += n;
}
console.log(total1);   //  --> 55 (It will add the elements of the array)

// Method-3
let sum = arr8.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);   //  --> 55 (It will reduce the array and return the sum of the elements)
// 0 is the initial value of the accumulator, if we don't pass the initial value of the accumulator, it will take the first element of the array as the initial value of the accumulator and current value will be the second element of the array.
// accumalator will work as total and currentValue will work as n.

// reduce vs reduceRight
// reduce() method starts from the left side of the array and reduceRight() method starts from the right side of the array


// Functions

// Hoisting
// Hoisting is a mechanism in javascript in which we can invoke a function before declaring it but we cannot invoke an assigned function before declaring it.
// We can invoke the function before declaring the function because javascript engine first scans the whole code and then executes it. 
console.log(add(9, 15));  //  --> 24

// Function Declaration
function add(a, b){
    return a+b;
}
console.log(add(5, 6));   //  --> 11

// Function Assignment
// 1. Named Function Assignment
// We cannot invoke an assigned function before declaring it because javascript engine first scans the whole code and then executes it.
let stand = function walk(){
    console.log('walking');
}
stand();   //  --> walking
// walk();   //  --> Uncaught ReferenceError: walk is not defined

// 2. Anonymous Function Assignment
let stand1 = function(){
    console.log('walking');
}
stand1();   //  --> walking
let run = stand1;
run();   //  --> walking

// Arguments
// Arguments are the parameters passed to the function. We can pass any number of arguments to the function. We can also pass objects, arrays, functions etc. as arguments to the function.
function sum1(a, b){
    let total = a+b;
    return total;
};
console.log(sum1(5, 6));  //  --> 11
console.log(sum1(5, 6, 7, 8, 9, 10));  //  --> 11 (It will ignore the extra arguments)

function sum2(a, b){
    console.log(arguments);
    return a+b;
};
console.log(sum2(5, 6));   //  --> Arguments(2) [5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ] (It will return the sum of the arguments) and 11
console.log(sum2(5, 6, 7, 8, 9, 10));   //  --> Arguments(6) [5, 6, 7, 8, 9, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ] (It will return the sum of the arguments) and 11

// Variable length arguments
function sum3(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
};
console.log(sum3(5, 6));   //  --> 11
console.log(sum3(5, 6, 7, 8, 9, 10));   //  --> 45

// Rest Operator
// Rest operator is used to pass variable length arguments to the function. Rest operator is used to convert the arguments into an array. It must be the last parameter of the function.
function sum4(value, ...args){
    console.log(value);
    console.log(args);
}
sum4(5, 6, 7, 8, 9, 10);   //  --> (5) [6, 7, 8, 9, 10] (It will convert the arguments into an array)

function sum5(discount, ...prices){
    let total = 0;
    for(let value of prices){
        total += value;
    }
    return total*(1-discount);
};
console.log(sum5(0.1, 5, 6));   //  --> 9.9

// Default Parameters
// Default parameters are used to set the default value of the parameters of the function. If we don't pass the value of the parameter, it will take the default value of the parameter.
// If you set the default value of the parameter, you have to set the default value of all the parameters after that parameter.
function interest(principal, rate, years){
    return principal*rate/100*years;
};
console.log(interest(10000, 3.5, 5));   //  --> 1750
console.log(interest(10000));   //  --> NaN (It will return NaN because rate and years are undefined)

function interest1(principal, rate=5, years=10){
    // rate = rate || 5;
    // years = years || 10;
    return principal*rate/100*years;
}
console.log(interest1(10000));   //  --> 5000 (It will return 5000 because rate and years are set to 5 and 10 respectively)
console.log(interest1(10000, undefined, 5));   //  --> 2500 (It will return 5000 because rate is set to 5 and years is set to 5) 

// Getters and Setters
// Getters are used to get the value of the property and Setters are used to set the value of the property.
let person2 = {
    firstName : 'himank',
    lastName : 'joshi',
    get fullName(){
        return `${person2.firstName} ${person2.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string');
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


// Try and Catch
// Try and Catch are used to handle the errors in the program.

// Throw - It is used to throw an error in the program.
try{
    person2.fullName = true;
}
catch(e){
    // alert('You have sent an invalid value for fullName');
    console.log(e);
}
console.log(person2.fullName);

// Object Freezing
// Object.freeze() method is used to freeze the object. If we freeze the object, we cannot add, update or delete any property of the object.
let person3 = {
    name : 'himank',
    age : 20,
};
Object.freeze(person3);
person3.name = 'himank joshi';
person3.address = 'india';
delete person3.age;
console.log(person3);   //  --> {name: "himank", age: 20} (It will not update the name property and it will not add the address property and it will not delete the age property)


// Scope 
// Scope determines the visibility of the variables and functions in the program. There are two types of scopes in javascript - Global Scope and Local Scope.
// Global Scope - Variables and functions declared outside the function are called global variables and functions. Global variables and functions can be accessed anywhere in the program.
// Local Scope - Variables and functions declared inside the function are called local variables and functions. Local variables and functions can be accessed only inside the function.

// let and const are block scoped whereas var is function scoped.
// let and const are not hoisted whereas var is hoisted.
// let and const are not initialized with undefined whereas var is initialized with undefined.
// let and const are not re-declared whereas var is re-declared.

let x1 = 'a';
let y1 = 'b';
let z1 = 'c';
function scope(){
    let x1 = 'aa';
    let y1 = 'bb';
    let z1 = 'cc';
    let p1 = 'pp';
    console.log(x1, y1, z1);  //  --> aa bb cc
}
scope();
console.log(x1, y1, z1);  //  --> a b c
// console.log(p1);  //  --> Uncaught ReferenceError: p1 is not defined



