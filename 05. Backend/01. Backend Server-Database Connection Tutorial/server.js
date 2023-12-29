// server instantiation
const express = require('express');
const app = express();

// Used to parse request.body in express -> For post or put requests
const bodyParser = require('body-parser');
// Specifically parse JSON data and add it to the body of the request object (request.body)
app.use(bodyParser.json());

// server configuration (activate the server on port 3000)
app.listen(3000, () => {
    console.log("Server started at port no. 3000")
});

// routes
app.get('/', (request, response) => {
    response.send("Hello World")
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car created successfully")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection Successful")
})
.catch((err) => {
    console.log("Received an error" + err)       
})