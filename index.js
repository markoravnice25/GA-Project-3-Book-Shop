import mongoose from 'mongoose'
import express from 'express'
import router from './config/router.js'
import { PORT, MONGODB_CONNECTION_STRING } from './config/environment.js'

const logger = (req, res, next) => {
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}

const startServer = async () => {

  const app = express()

  app.use(logger)
  app.use(express.json())
  app.use(router)


  // app.get('/', (req, res, next) => {
  //   return res.end('Welcome to our API.')
  // })

  await mongoose.connect(MONGODB_CONNECTION_STRING)
  console.log('Connected to MongoDB!')
  app.listen(PORT, () => console.log(`🚀 - Server listening on Port ${PORT}`))
} 

startServer()