const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


const list_of_students=

[ { "name":"Obi",
"age":10 
},
{ "name":"Judith" ,
  "age":13
 },
 { "name":"Dan" ,
 "age":15
},
{ "name":"Ezekiel" ,
  "age":14
 },
 { "name":"Kofi" ,
 "age":18
},
]

app.get('/', (request, response) => {
 response.send('Hello world' )
 })

 app.get('/login', (request, response) => {
   response.send('not authorized' )
   })

   app.get('/logout', (request, response) => {
    })

    app.get('/list-of-students', (request, response) => {
      response.send(list_of_students)
      })


      app.get('/random-students', (request, response) => {
        let random_number=Math.floor(Math.random() * 4);
         response.send(list_of_students[random_number])
         })









  



app.get('/get-time', (request, response) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)
    response.send({ message:`The current time is: ${time}`})
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
