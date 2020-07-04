const bcrypt = require('bcrypt')
const singupRouter = require('express').Router()
const User = require('../models/user')

singupRouter.post('/', async(request, response) => {
  const body = request.body

  // if(!body.password || body.password.length < 3) {
  //     return response.status(400).json({ error: `password (${body.password}) is shorter than the minimum allowed length (3)` })

  // }
  console.log(body)

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)


  const user = new User({
      name: body.name,
      email: body.email,
      passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = singupRouter