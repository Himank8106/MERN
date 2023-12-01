// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'ABC'
    }
    ,
    {
        No : 2,
        Name : 'AB'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"ABC "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "AB");
console.log(obj);