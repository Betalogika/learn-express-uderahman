const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.redirect ( '/users')
})
// app.get ('/users', (req, res)=> {
//   res.send ('ger users')
// })
// app.post('/users', (req, res) => {

//   res.send('POST user')
// })
app.route('/users')
.get ((req, res) => {
      res.send ('get users')
  })
  .post ((req, res) => {
      res.send ('post users')
  })

// app.put('/users/:id', (req, res) => {
//   const id = req.params
//   res.send(id)
// })
// app.delete('/users/:id', (req, res) => {
  
//   res.send(req.params)
// })
app.route('/users/:id')
.put ((req, res) => {
  const id = req.params
  res.send(id)
})
.delete ((req, res)=> {
  res.send (req.params)
}) 


  
app.listen(port, () => {
console.log(`jalan di port ${port}`)
})