import express from 'express'
import { showBooks } from '../controllers/books.js'

const router = express.Router()

router.route('/books')
  .get(showBooks)

export default router