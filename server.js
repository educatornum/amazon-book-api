const express = require("express")
const dotenv = require("dotenv")
var fs = require('fs')
var morgan = require('morgan')
var rfs = require('rotating-file-stream') // version 2.x
var path = require('path')
// import route

const categoriesRoutes = require("./routes/categories")
dotenv.config({path: "./config/config.env"});

const app = express();

// logger
const logger = require("./middleware/logger")

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
  })
   
  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }))

app.use(logger);
app.use('/api/v1/categories',categoriesRoutes);

app.listen(process.env.PORT, console.log(`Express  server started on ${process.env.PORT} ...`))