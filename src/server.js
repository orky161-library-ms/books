require('dotenv').config("./env");
const express = require('express')
const cors = require('cors')
const {checkConnection} = require("./dal/books")
const bodyParser = require('body-parser')
const bookRoutes = require("./routes/books")

const app = express()
const port = 30001

app.use(cors())
app.use(bodyParser.json())
app.use("/api/book", bookRoutes)

app.get('/ping', function (req, res) {
    res.status(200).json({msg: "ping"})
})

app.get('/health', async function (req, res) {
    await checkConnection()
    res.status(200).json({msg: "health"})
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

