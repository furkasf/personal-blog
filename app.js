//modules
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./model/blog.js')
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
  .catch(err => console.log(err))

  //middle ware setings
  app.use(express.static('style'))
  app.use(express.urlencoded({extended : true}))

  //view engine setings
  app.set('view engine', 'ejs')
  
  //routers

  app.get('/', (req, res) => res.render('home', {title : 'home'}))
  app.get('/creat-blog', (req, res) => res.render('creat-blog', {title : 'blog-creat'}))
  app.post('/blog-req', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
      .then(() => res.redirect('/home'))
      .catch(err => console.log(err))
  })
  app.get('/about', (req, res) => res.render('about', {title : 'about'}))
  app.use((req, res) => res.render('404', {title :'401'}))