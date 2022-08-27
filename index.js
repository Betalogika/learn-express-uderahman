const express = require('express')
const routerUsers = require('./router/rout')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/about', (req, res) => {
  res.send ( 'apa')
})
  


app.use(routerUsers)

app.listen(port, () => {
console.log(`jalan di port ${port}`)
})