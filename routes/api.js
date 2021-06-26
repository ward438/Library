const router = require("express").Router();
const Books = require("../models/Books.js");
require('dotenv').config();
// const mongoose = require('mongoose');

router.post("/api/Books", ({ body }, res) => {
  Books.create(body)
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});



router.get("/api/Books", (req, res) => {
  Books.find()
  .then(dbBooks => {
    res.json(dbBooks);
  })
  .cath(err => {
    res.status(404).json(err);
  })
  console.log("get")

  //   console.log("GET TEST")
  // if (location.host === "http://localhost:3000" || location.hostname === "localhost") {
  //   console.log("apiBooks")
  //   Books.find({}).sort({ date: -1 })
  //     .then(dbBooks => {
  //       res.json(dbBooks);
  //     })
  //     .catch(err => {
  //       res.status(404).json(err);
  //     });
  // }

});

module.exports = router;