const express = require('express');
const app = express();
const ejs = require('ejs');
const Post = require('./models/post');
const { default: mongoose } = require('mongoose');

//CONNECT DB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/CleanBlog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts
  });
});
app.get('/index', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.post('/blogs', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda baslatildi...`);
});
