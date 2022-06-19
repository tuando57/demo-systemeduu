
const express = require('express');
const morgan = require('morgan');
const app = express()
const path = require('path')  
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})