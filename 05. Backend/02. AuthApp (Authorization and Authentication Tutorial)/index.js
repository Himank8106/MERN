const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

require('./config/database').connect();

// route
const user = require('./routes/user');  
app.use('/api/v1', user);

// activate server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

// default route
app.get("/", (req,res) => {
    res.send("<h1>Auth App</h1>")
})