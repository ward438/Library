
const db= {};
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const dbConfig = require("./models/db.config.js");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up heroku static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/library", {  
    useNewUrlParser: true,
    useFindAndModify: false
  });

// Define API routes here

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// api route
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
