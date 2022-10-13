import express from "express"


import { 
    getUsers,
    postUsers,
    UpdateUsers,
    deletUsers,
    getById       
} from '../controller/UsersController.js'
const router = express.Router()

router.get('/users', getUsers );
router.get('/users/:id', getById);
router.post('/users', postUsers); 
router.patch('/users/:id', UpdateUsers); 
router.delete('/users/:id', deletUsers); 

export default router;

//menggunakan singleton
        // design pattern merupakan template/pola penulisan code dengan menggunakan koonsep pembuatan objek menggunkan constructor function, namun dibungkus menggunakan class. Berikut jika code dengan pola functional diatas jika diubah menggunakan menjadi pola singleton:

// class methodroute extends Express.Router {
//     Method ( getproduk,
//         postProduk,
//         UpdateProduk,
//         deletProduk,
//         getById,
//         home) {
//  this.geth = router.get ('/', home);
//  this.getp = router.get('/produk/juragan_ude', getproduk);
//  this.getid = router.post('/Produk/juragan_ude', postProduk);
//  this.post = router.post('/Produk/juragan_ude', postProduk);
//  this.patc = router.patch('/produk/juragan_ude/:id', UpdateProduk);
//  this.delete = router.delete('/produk/juragan_ude/:id', deletProduk)
//     }
// }

// export default methodroute;

// dengan menggunakan principle OOP
// class usersroute extends express.Router{
//     route () {
//         return [
//             router.get('/users', getUsers,),
//             router.get('/users/:id', getById),
//             router.post('/users', postUsers),
//             router.patch('/users/:id', UpdateUsers),
//             router.delete('/users/:id', deletUsers)
              
//         ]
//     }
// }
// export default usersroute;



















// const userController = require('../controller/usersController')
  
//  router.route('/users')
//   .get (userController.index)
//   .post (userController.store)
// //   put yang lama
//   // router.route('/users')
// // .get (req, res) => {
// // res.send ('')
// // }
// // .put (req, res) => {
// //   res.send ('')
// // }


//   //   // put yg lama
//   // router.put ('/users/:id', (req, res) => {
//   //   const id = req.params
//   //   res.send(id)
//   // })
//   // put yang baru
//   router.route ('/users/:id')
//     .put (userController.update)
//     .delete (userController.delete)     
  
//   module.exports = router
  