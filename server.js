const express = require("express")
const db = require('./db')
const app = express();
const logger = require("morgan")
const routes = require('./routes')

const PORT = process.env.PORT || 2000;

app.use(express.json())

app.use('/', routes)

app.use(logger('dev'))

db.on("error", console.error.bind(console, "MongoDB connection error (server msg)"))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));