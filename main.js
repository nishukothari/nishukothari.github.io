const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/public/docs/index.html')
})

app.use(express.static(`public`))

app.listen(2000)
console.log("http://localhost:2000")