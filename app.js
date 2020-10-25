const mongoose = require('mongoose');

// This creates a new Express server.

const express = require("express");
const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Now, let's setup a basic route so that we can render some information on our page. Add the following to your file:

app.get("/", (req, res) => res.send("MERN Twitter"));

// Before we can run the server, we need to tell our app which port to run on.

const port = process.env.PORT || 5000;

// Tell Express to start a socket and listen for connections on the path.

app.listen(port, () => console.log(`Server is running on port ${port}`));