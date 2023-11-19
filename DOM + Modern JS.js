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