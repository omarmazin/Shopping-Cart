const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Products = require('./Products.json')
app.use(cors)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/products',(req,res)=>{
  res.send(Products)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})
