require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors')

// Routes
const authRouter = require("./routes/auth");

// Middleware
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())


// my routes
app.use("/api", authRouter );

mongoose.connect(process.env.DATABASE, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
    );

app.listen(process.env.PORT);
