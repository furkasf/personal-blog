//modules
const express = require('express')
const mongoose = require('mongoose')

//building express server
const app = express();

//databse conection
const key = 'mongodb+srv://furkan:iYCD1EkbrUPwbAUj@blog.xondd.mongodb.net/blog?retryWrites=true&w=majority';
mongoose.connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => app.listen(3000))

  //middle ware setings

  //view engine setings

  //routers

  app.get('/', (req, res) => res.send('request taken and response made'))
