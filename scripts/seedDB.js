const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below

    
    mongoose.connect(
      process.env.MONGODB_URI ||
      "mongodb://localhost/reactreadinglist"
    );
    
    const bookSeed = [
      {
        title: "Mongo",
        author: "client/public/images/mongo.png",
        date: new Date(Date.now())
      },
      {
        title: "ExpressJS",
        author: "client/public/images/expressJS.png",
        date: new Date(Date.now())
      },
      {
        title: "NodeJS",
        author: "client/public/images/nodeJS.png",
        date: new Date(Date.now())
      },
     
    ];
    
  
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
