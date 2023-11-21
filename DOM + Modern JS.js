// Window - Global object (represent the browser window)
// window - dom + bom + js core 
window.console.log('Hello World');

// DOM - Document Object Model
// DOM - document, element, text, comment, attribute, event, node, nodelist, htmlcollection

// BOM - Browser Object Model 
// BOM -  window, location, history, document, navigator, screen, frames, XMLHttpRequest

// DOM - 
// (It is a tree like structure)
// characcter -> tags -> tokens -> nodes -> nodelist -> htmlcollection -> DOM

// Access Elements in DOM -
// 1. document.getElementById('id')
// 2. document.getElementsByTagName('tagname')
// 3. document.getElementsByClassName('classname')

// getElementById -
// Example - document.getElementById('id')
// it is called on document object and it returns element object

// getElementsByTagName -
// Example - document.getElementsByTagName('tagname')
// it is called on document object and it returns nodelist object

// getElementsByClassName -
// Example - document.getElementsByClassName('classname')
// it is called on document object and it returns htmlcollection (array-like) object

// $0 - it is a global variable which is used to access the last selected element in the DOM

// Query Selector -
// Example - document.querySelector('#header');  // it will select the first element with id header
// Example - document.querySelector('.header');  // it will select the first element with class header
// Example - document.querySelector('header');   // it will select the first header tag

// Query Selector All -
// Example - document.querySelectorAll('.header');  // it will select all the elements with class header


// Update Existing Elements in DOM -

// 1. innerHTML - To get/set the html of an element
// Example - document.querySelector('#header').innerHTML = '<h1>Hello World</h1>';

// 2. outerHTML - To get/set the html of an element including the element itself
// Example - document.querySelector('#header').outerHTML = '<h1>Hello World</h1>';

// These two methods are used to update the text of an element
// These two methods are not recommended to use because it will remove all the event listeners attached to the element
// 3. textContent - To get/set the text of an element
// Example - document.querySelector('#header').textContent = 'Hello World';

// 4. innerText - To get/set the text of an element
// Example - document.querySelector('#header').innerText = 'Hello World';

// innerHTML renders the text but textContent treats the text as a text
// innerText hides the text if the element is hidden but textContent does not hide the text if the element is hidden


// Add New Elements/Content in DOM -
// 1. Create Element - document.createElement('tagname')
let newPara = document.createElement('p');

// 2. Create Text Node - document.createTextNode('text')
let newParaText = document.createTextNode('Hello World');
newPara.appendChild(newParaText);

// 3. Insert Adjacent Element - element.insertAdjacentElement(position, element)
// position - beforebegin, afterbegin, beforeend, afterend
// beforebegin - before the element itself
// afterbegin - just inside the element, before its first child
// beforeend - just inside the element, after its last child
// afterend - after the element itself
document.querySelector('#header').insertAdjacentElement('afterend', newPara);

// removeChild - element.removeChild(child)
// child - the child node to be removed
// document.querySelector('#header').removeChild(newPara);

// To style the element
// 1. element.style.property = 'value'
document.querySelector('#header').style.color = 'red';

// 2. element.setAttribute('style', 'property: value')
document.querySelector('#header').setAttribute('style', 'color: red');

// 3. element.classList.add('classname')
document.querySelector('#header').classList.add('header');
// returns an array of class list
// add(), remove(), toggle(), contains() 

// 4. element.style.cssText = 'property: value; property: value'
document.querySelector('#header').style.cssText = 'color: red; background-color: black';

// 5. element.className = 'classname'
document.querySelector('#header').className = 'header';


// Browser Events -
// 1. onclick - it is a property of element object
// Example - 
document.querySelector('#header').onclick = function() {
    console.log('Hii par click kiya hai');
}

// 2. addEventListener - it is a method of element object
// Example -
document.querySelector('#header').addEventListener('click', function() {
    console.log('Hii par click kiya hai');
});

// 3. removeEventListener - it is a method of element object
// Example -
document.querySelector('#header').removeEventListener('click', function() {
    console.log('Hii par click kiya hai');
});
// To remove the event listener, we need to pass the same function which we passed while adding the event listener. The example above will not work because the function is different. Instead we can do this -
function clickHandler() {
    console.log('Hii par click kiya hai');
}
document.querySelector('#header').addEventListener('click', clickHandler);
document.querySelector('#header').removeEventListener('click', clickHandler);

// dispatchEvent - it is a method of element object
// Example -
document.querySelector('#header').dispatchEvent(new Event('click'));

// 4. event object - it is a parameter of event handler function
// Example -
document.querySelector('#header').addEventListener('click', function(event) {
    console.log(event);
});

// 5. event.target - it is a property of event object
// Example -
document.querySelector('#header').addEventListener('click', function(event) {
    console.log(event.target);  // it will return the element on which the event is fired
});

// 6. event.preventDefault() - it is a method of event object
// Example -
document.querySelector('#third').addEventListener('click', function(event) {
    event.preventDefault();  // it will prevent the default behaviour of the event
});

// monitorEvents - it is a method of window object
// Example -
// monitorEvents(document);  // it will monitor the event on the element


// Phases of an Event -
// 1. Capturing Phase - it is the first phase of an event
// 2. Target Phase - it is the second phase of an event
// 3. Bubbling Phase - it is the third phase of an event

// Capturing phase - it is the phase in which the event is fired on the parent element and then it is fired on the child element
// Target phase - it is the phase in which the event is fired on the target element
// Bubbling phase - it is the phase in which the event is fired on the child element and then it is fired on the parent element


// Event Object - 
const content =  document.querySelector('#abc');
content.addEventListener('click', function(event) {
    console.log(event);
});


// Optimizing the code -

// Reflow - it is the process of calculating the geometry of the layout that where to place the elements on the screen
// Repaint - it is the process of drawing that layout pixel-by-pixel on the screen

// Repaint is faster than reflow
// Reflow is expensive than repaint

// 100 reflow and repaint occurs when we append the element to the DOM
// Normal way -
let myDiv = document.createElement('div');
for(let i=101; i<=200; i++){
    let newPara = document.createElement('p');
    newPara.textContent = 'This is para ' + i;

    newPara.addEventListener('click', function(event) {
        console.log('I have clicked on para');
    });
    myDiv.appendChild(newPara);
}
document.body.appendChild(myDiv);

// Optimized way -
let myDiv1 = document.createElement('div');
function paraStatus(event){
    console.log('Clicked!! ' + event.target.textContent);
}
myDiv1.addEventListener('click', paraStatus);
for(let i=101; i<=200; i++){
    let newPara = document.createElement('p');
    newPara.textContent = 'This is para ' + i;
    myDiv1.appendChild(newPara);
}
document.body.appendChild(myDiv1);


let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN'){
        console.log('Clicked on span ' + event.target.textContent);
    }
});


// Performance
// (measure speed of code)

// Normal way - 
const t1 = performance.now();
for(let i=201; i<=300; i++){
    let newElement = document.createElement('p');   
    newElement.textContent = 'This is para ' + i;
    document.body.appendChild(newElement);  
}
const t2 = performance.now();
console.log('Time taken is ' + (t2-t1) + ' milliseconds');   // 0.6000000014901161 milliseconds

// Optimized way -
const t3 = performance.now();
let myDiv2 = document.createElement('div');
for(let i=201; i<=300; i++){
    let newPara = document.createElement('p');
    newPara.textContent = 'This is para ' + i;
    myDiv2.appendChild(newPara);
}
document.body.appendChild(myDiv2);
const t4 = performance.now();
console.log('Time taken is ' + (t4-t3) + ' milliseconds');   // 0.10000000149011612 milliseconds


// Document Fragment -
// it is a lightweight version of document object
// it is used to store the elements temporarily
// it is used to improve the performance of the code

// No reflow and repaint occurs when we use document fragment, only one reflow and repaint occurs when we append the document fragment to the DOM
let fragment = document.createDocumentFragment();
for(let i=301; i<=400; i++){
    let newPara = document.createElement('p');
    newPara.textContent = 'This is para ' + i;
    fragment.appendChild(newPara);
}
document.body.appendChild(fragment);


// Call Stack -
// it is a data structure which stores the function calls
// it follows the LIFO (Last In First Out) principle
// it is used to keep track of the function calls

// Event Loop - (Async process)
// it is a process which checks the call stack and event queue
// it checks if the call stack is empty or not
// if the call stack is empty then it checks the event queue
// if the event queue is not empty then it pushes the event handler function to the call stack

// setTimeout - it is a method of window object
// Example -
setTimeout(function() {
    console.log('Hello World');
}, 1000);   // it will execute the function after 1 second
// The delay is not guaranteed, it is just a minimum delay which means that the function may executed after 1 second but not before 1 second. 
// This Async code will only execute when the call stack is empty.

setTimeout(function() {
    console.log('Hello World');
}, 0);  // It is a hack to execute the code after the call stack is empty


// API - Application Programming Interface
// it is a set of functions which allows us to interact with the application or the browser


// Promises -
// it is an object which represents the eventual completion or failure of an asynchronous operation and its resulting value
// A promise can be in one of the three states - pending, fulfilled, rejected

// Example -
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Promise');
//     }, 1000);
// });
// promise.then(function(data) {
//     console.log(data);
// });

// Example -
let meraPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside Promise');
    }, 5000);
    resolve(2255);
});
console.log(meraPromise);  // {<fulfilled>: 2255}

// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I sm inside Promise');
//     }, 5000);
//     reject(new Error('Bhai sahab error aaya hai'));
// });
// console.log(meraPromise1);  // {<rejected>: Error: Bhai sahab error aaya hai}

let meraPromise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('meraPromise2');
    }, 5000);
});

let meraPromise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('meraPromise3');
    }, 3000);
});

// meraPromise3 will be executed first and then meraPromise2 will be executed
// Promises are used to execute code parallelly

// then() - it is a method of promise object which is used to handle the success case of the promise 
// catch() - it is a method of promise object which is used to handle the failure case of the promise

// Example -
let meraPromise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am meraPromise4');
    }, 2000);
    resolve(123456);
});

meraPromise4.then((value) => {console.log(value)});  // 123456 (It will print before 'I am meraPromise4' because it is an async code)

let meraPromise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am meraPromise5');
    }, 2000);
    reject(new Error('Bhai error hai'));
});

meraPromise5.catch((error) => {console.log("Received an error")});

// we can also use then() to handle the failure case of the promise
// meraPromise4.then((value) => {console.log(value)}, (error) => {console.log("Received an error")});   
// OR
meraPromise4.then((value) => {console.log(value)}).catch((error) => {console.log("Received an error")});


// Multiple Promises -
// Promise.all() - it is a method of promise object which is used to handle multiple promises

let wadaa1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('setTimeout1 started');
    }, 2000);
    resolve(true);
});

let output = wadaa1.then(() => {
    let wadaa2 = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('setTimeout2 started');
        }, 3000);
        resolve("wadaa2 resolved");
    });
    return wadaa2;
});

output.then((value) => console.log(value));


// Async/Await -
// (next promise will be executed only when the previous promise is completed)
// returns a promise

// it is used to write async code in a synchronous way (sequential way) 
// it is used to handle multiple promises in a sequential way 

async function util(){
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi weather is 22 degree celsius");
        }, 6000);
    });

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mumbai weather is 25 degree celsius");
        }, 8000);
    });

    let dw = await delhiWeather;  
    let mw = await mumbaiWeather; // it will be executed only when delhiWeather is completed

    return [dw, mw];
}
console.log(util());  
/* 
Promise {<pending>}  
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : Array(2)
0 : "Delhi weather is 22 degree celsius"
1 : "Mumbai weather is 25 degree celsius"
length : 2
etc...}
*/


// Fetch API -
// it is used to make http requests to the server (GET, POST, PUT, DELETE) to get(retrieve) the data from the server or to post the data to the server or to update the data on the server or to delete the data from the server
// returns a promise

// GET request -
async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}
utility();  // {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}

// POST request -
async function utility1(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    let output = await content.json();
    console.log(output);
} 
utility1();  // {title: "foo", body: "bar", userId: 1, id: 101}


// Closure -
// it is a function which has access to the outer function's variables even after the outer function has returned 
// it is used to create private variables and methods 
// reference to the outer function's variables is stored in the closure
// Every time we call the outer function, a new closure is created (every function in javascript is a closure)

function init(){
    let name = 'Himank';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let myFunc = init();
myFunc();  // Himank
// myFunc() is a closure which has access to the outer function's variables even after the outer function has returned because the reference to the outer function's variables is stored in the closure
