const express = require ('express')
const router = express.Router()

const userController = require('../controller/usersController')
  
 router.route('/users')
  .get (userController.index)
  .post (userController.store)
  //   // put yg lama
  // router.put ('/users/:id', (req, res) => {
  //   const id = req.params
  //   res.send(id)
  // })
  // put yang baru
  router.put ('/users/:id', userController.update)
  router.delete ('/users/:id', userController.delete) 
  
  module.exports = router
  