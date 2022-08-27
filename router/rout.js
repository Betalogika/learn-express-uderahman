const express = require ('express')
const router = express.Router()


 router.route('/users')
  .get ((req, res) => {
    res.send ('apa')
  })
    .post ((req, res) => {
        res.send ('api')

    })

  //   // put yg lama
  // router.put ('/users/:id', (req, res) => {
  //   const id = req.params
  //   res.send(id)
  // })
  // put yang baru
  router.put ('/users/:id', (req, res) => {
    const id = req.params
    

      res.send (id)
  })
  router.delete ('/users/:id', (req, res)=> {
    let id = req.params
    res.send (id)
  }) 
  
  module.exports = router
  