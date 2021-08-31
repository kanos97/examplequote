const { Router } = require('express');
const { route } = require('./users');
const router = Router();
const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');


router.route('/')
     .get(getNotes)
     .post(createNote);
     

     router.route('/:id')
     .get(getNote)
     .put(updateNote)
     .delete(deleteNote);


module.exports = router;