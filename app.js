const express = require('express')
const app = express()
const port = 3000

app.get('/get-time', (request, response) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)
    response.send({ message:`The current time is: ${time}`})
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
