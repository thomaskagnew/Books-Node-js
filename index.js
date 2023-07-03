
const express = require('express')
const controller = require('./controller/books')
const app = express()
const port = 3000

app.get('/books', controller.getBooks)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})