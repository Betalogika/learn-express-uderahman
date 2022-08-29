let users = [
    {id: 1, nama : 'ude', email:'hsjqhjdh'},
    {id: 2, nama : 'ris', email:'rise'}
  ]


module.exports ={
  index: (req, res) => {
        if(users.length > 0) {
            res.json ({
            status : true,
            data : users,
            method : req.method,
            url : req.url
            }) 
        } else {
            res.json({
            status : false,
            massage : 'data user masih kosong'

            })
        }
    },
    store: (req, res) => {
        users.push(req.body)
          res.send ({
            status : true,
            data : users,
            massage : 'data user berhasil',
            method : req.method,
            url : req.url
          }) 
        
      },
      update: (req, res) => {
        const id = req.params
        users.filter(user => {
          if(user.id == id) {
            user.id = id
            user.nama = req.body.nama
            user.email = req.body.email
              
            return user
          }
        })
          res.json({
            status : true,
              data : users,
              massage : 'data user diedit',
              method : req.method,
              url : req.url
          })
      },
      delete:(req, res)=> {
        let id = req.params
        users= users.filter(user => user.id != id) // jika user.id tidak sama dgn id
        res.send ({
          status : true,
              data : users,
              massage : 'data user berhasi dihapusl',
              method : req.method,
              url : req.url
        })
      }

}
