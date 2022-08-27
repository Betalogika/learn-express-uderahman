const express = require('express')
const routerUsers = require('./router/users')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/about', (req, res) => {
  res.redirect ( '/users')
})
  

app.use(routerUsers)

app.listen(port, () => {
console.log(`jalan di port ${port}`)
})