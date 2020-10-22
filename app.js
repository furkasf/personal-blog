//modules
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./model/blog.js')
//building express server
const app = express();

//databse conection
const key = '';
mongoose.connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log( 'Database Connected' ))
  .catch(err => console.log(err))

  //middle ware setings
  app.use(express.static('style'))
  app.use(express.urlencoded({extended : true}))

  //view engine setings
  app.set('view engine', 'ejs')
  
  //routers

  app.get('/', (req, res) => {
    Blog.find()
    .then((result) => res.render('home', {title : 'home', blog : result}))
    .catch(err => console.log(err))
  })
  app.get('/creat-blog', (req, res) => res.render('creat-blog', {title : 'blog-creat'}))
  app.post('/blog-req', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  })
  app.delete('blog/:id', (req, res) =>{
    const id = req.params.id;
    
    //delete blog from data base
    Blog.findByIdAndDelete(id)
      .then(() => res.json({redirect : '/'}))
      .catch(err => console.log(err))
  })
  app.get('/blog/:id', (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
      .then(result => res.render('detail',{title : 'blog', blog : result}))
      .catch(err => console.log(err))
  })
  app.get('/about', (req, res) => res.render('about', {title : 'about'}))
  app.use((req, res) => res.render('404', {title :'401'}))