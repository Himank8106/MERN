const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const counter = document.querySelector("#counter");
const clear = document.querySelector("#clear");
const range = document.querySelectorAll("input"); 

inc .addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1;
});

dec.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) - 1;
});

function increment() {
    if(range[0].value === ""){
        return alert("Please enter a number for increment!");
    }
    if(range[1].value < 0 ){
        return alert("Please enter a positive number for increment!");
    }
    counter.innerText = parseInt(counter.innerText) + parseInt(range[0].value);
    range[0].value = "";
}

function decrement() {
    if(range[1].value === ""){
        return alert("Please enter a number for decrement!");
    }
    if(range[1].value < 0 ){
        return alert("Please enter a positive number for decrement!");
    }
    counter.innerText = parseInt(counter.innerText) - parseInt(range[1].value);
    range[1].value = "";
}

clear.onclick = () => counter.innerText = 0;
