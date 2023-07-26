const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const Port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
   const server = express()

//    server.use(express.json())
//    server.use(express.urlencoded({ extended: true }))

server.get("/api/send-mail", (req, res) => {
   console.log('send-mail');
 res.end('listening')
})

   server.get("*", (req, res) => {
    handle(req, res)
   })

   
  
   server.listen(Port, (err) => {
      if(err) throw err
      console.log("listening on port" + Port)
   })
})
.catch((err) => console.error(err))