import express from 'express'
import { showBooks, showSingleBook } from '../controllers/books.js'
import { registerUser } from '../controllers/auth.js'

const router = express.Router()

// get all book
router.route('/books')
  .get(showBooks)

// get single book
router.route('/books/:id')
  .get(showSingleBook)

router.route('/register')
  .post(registerUser)

export default router