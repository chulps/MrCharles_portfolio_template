const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

const User = require("./models/user.js")
const app = express()
const PORT = process.env.PORT || 3001

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve up static assets
app.use(express.static("front-end-client/build"))

//Adding CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

// Set up promises with mongoose
mongoose.Promise = global.Promise

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio_template",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.get("/getUser/:id", function(req, res) {
  User.findOne({ userName: req.params.id }).then(data => {
    res.json(data)
  })
})

app.post("/save", function(req, res) {
  User.create(req.body)
    .then(() => {
      console.log("success")
      res.json(true)
    })
    .catch(err => {
      // if not, we can at least catch the error
      console.log("err", error)
      res.json(error)
    })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`)
})
