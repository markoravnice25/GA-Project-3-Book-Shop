import jwt from 'jsonwebtoken'
import User from '../models/users.js'
import { SECRET } from '../config/environment.js'
export const secureRoute = async (req, res, next) => {
  try {
    console.log('HEADER.headers->', req.headers)
    if (!req.headers.authorization) throw new Error('Missing header')
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token->', token)
    const payload = jwt.verify(token, SECRET)
    console.log('payload ->', payload)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not found')
    req.verifiedUser = userToVerify
    next()
    
  } catch (error) {

    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
    
  }


}