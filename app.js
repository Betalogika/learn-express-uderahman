const express = require('express')
const routerUsers = require('./router/users')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
}) 

app.get('/about', (req, res) => { 
  res.redirect ( '/users')
})
  

app.use(routerUsers)

app.listen(port,() => {
console.log(`jalan di port ${port}`)
})

/**
 * ude kalo ada error gitu tinggal uninstall aja node modules nya
 * oke yah
 */