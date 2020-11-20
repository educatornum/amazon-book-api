const express = require("express")
const dotenv = require("dotenv")
// import route

const categoriesRoutes = require("./routes/categories")
dotenv.config({path: "./config/config.env"});

const app = express();

app.use('/api/v1/categories',categoriesRoutes);

app.listen(process.env.PORT, console.log(`Express  server started on ${process.env.PORT} ...`))