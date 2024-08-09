const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get("/:id", function (req, res) {
    const {
        id
    } = req.params

    function GoID() {
        if (id == "dog") {
            res.send({
                "강아지": "멍멍"
            })
        } else if (id == "cat") {
            res.send({
                "고양이": "야옹"
            })
        } else if (id == "pig") {
            res.send({
                "돼지": "꿀꿀"
            })
        } else if (id == "cow") {
            res.send({
                "소": "음메"
            })
        } else {
            res.send("알수없음.")
        }
    }

    GoID()
})


app.listen(3000)