const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async(request, response) => {
  const body = request.body

  if(!body.password || body.password.length < 3) {
      return response.status(400).json({ error_message: `Password is shorter than the minimum allowed length (3)` })

  }
  const user = await User.findOne({ email: body.email})
  console.log(user.passwordHash, body.password)
  let a = await bcrypt.compare(body.password, user.passwordHash)
  if(await bcrypt.compare(body.password, user.passwordHash)) {
    response.status(200).json(user)
  }
  else{
    response.status(401).json({error_message: "Invalid user name or password"})
  }
})

module.exports = loginRouter