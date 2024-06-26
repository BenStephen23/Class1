const express = require("express");
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000;
const {errorHandler} = require("./middleware/errMid")
const configDB = require("./config/db")


configDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))