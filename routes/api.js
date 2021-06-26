const router = require("express").Router();
const Books = require("../models/Books.js");
require('dotenv').config();
// const mongoose = require('mongoose');

router.post("/api/books", ({ body }, res) => {
  console.log(body)
  Books.create(body)
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/books", (req, res) => {
  Books.find()
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  
});

module.exports = router;