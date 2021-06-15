const express = require("express")
const logger = require("morgan")
const cors = require("cors");
const db = require('./db')
const routes = require('./routes')
const app = express();

const PORT = process.env.PORT || 2000;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({extended: false}));

app.use(logger('dev'))

app.use('/', routes)

db.on("error", console.error.bind(console, "MongoDB connection error (server msg)"))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));