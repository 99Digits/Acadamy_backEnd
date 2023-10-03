require('dotenv').config()
require('./db/connection')
const router=require('./router/Router')
const PORT=3200
const express=require('express')
const cors=require('cors')

const server=express()

server.use(cors())


server.use(express.json())
server.use(router)

server.listen(PORT,()=>{
    console.log(`server is listening to port number ${PORT}`);
})