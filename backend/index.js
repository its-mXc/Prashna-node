// import express from 'express';
const express = require('express')
const app = new express()
const mongoose = require("mongoose")
const signupRouter = require("./controllers/signup")
const loginRouter = require("./controllers/login")
const cors = require("cors")

mongoose.connect('mongodb+srv://uday:toor@cluster0-r8zae.mongodb.net/prashna?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.error('error connection to MongoDB:', error.message)
})

app.use(cors())
app.use(express.json())

  
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
    

const PORT = 3001

app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`)
})