import express from 'express'
import Book from '../models/book.js';

const router = express.Router();

//Get All Book
router.get('/', (req , res) => {   // promise
  Book.findAll()
  .then((book) => {
    if (!book.length) return res.status(404).send({ err: 'books not found' });
    res.json(book);
  })
  .catch(err => res.status(500).send(err));
});

//Get Single Book by id
router.get('/select/:bookid', (req , res) => { 
  Book.findOneByBookid(req.params.bookid)
  .then((book) => {
    if (!book) return res.status(404).send({ err: 'book not found' });
    res.send(`findOne successfully: ${book}`);
  })
  .catch(err => res.status(500).send(err));
});

// Create new book document
router.post('/', (req, res) => {
  const book = new Book({
    title : req.body.title,
    author : req.body.author,
  });
  book.save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    });
});

// Update by bookid
router.put('/update/:bookid', (req, res) => {
  Todo.updateByBookid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by bookid
router.delete('/delete/:bookid', (req , res) => { 
  Book.deleteByBookid(req.params.bookid)
  .then(() => res.sendStatus(200))
  .catch(err => res.status(500).send(err));
});

module.exports = router;