const express = require('express')
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

const blog = require('./routes/blog')

// mount
app.use('/api/v1', blog)

const connectWithDb = require('./config/database')
connectWithDb();

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})