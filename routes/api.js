const router = require("express").Router();
const Books = require("../models/Books.js");

router.post("/api/Books", ({body}, res) => {
  Books.create(body)
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// router.post("/api/Books/bulk", ({body}, res) => {
//   Books.insertMany(body)
//     .then(dbBooks => {
//       res.json(dbBooks);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.get("/api/Books", (req, res) => {
//   // if(location.host === "http://localhost:3000" || location.hostname === "localhost"){
//      Books.find({}).sort({date: -1})
//     .then(dbBooks => {
//       res.json(dbBooks);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
//   // }
  
// });

module.exports = router;