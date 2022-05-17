import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import { PORT, MONGODB_CONNECTION_STRING } from '../config/environment.js'

// METHOD: POST
// Endpoint: /register
// descritption: req.body -> username, email, passwor, password confirmation
export const registerUser = async (req, res) => {
  const { body } = req
  try {
    const newUser = await User.create(body)
    return res.status(200).json({ message: `Welcome to Miami ${newUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}

export const loginUser = async (req, res) => {
  const { body } = req
  try {
    console.log('user body ->', body)
    const { email } = body
    const userToLogin = await User.findOne({ email: email })
    console.log('user to loin -> ', userToLogin)
    return res.status(200).json({ message: `Welcome back ${userToLogin.username}` })
  } catch (error) {
    console.log(error)
    return res.status(422).json({ message: 'unauthorised champ' })
  }
}