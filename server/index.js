const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); // Use to access backend API from React.

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Defines the route.
app.get("/", (req, res) => {
  res.send("Hola Mundo");
})

app.listen(8080, () => {
  console.log("Server is running on port 8080!");
})
