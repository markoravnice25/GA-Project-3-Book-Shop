import express from 'express'
import { showBooks, showSingleBook } from '../controllers/books.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { addReview } from '../controllers/booksReviews.js'
import { secureRoute } from './secureRoute.js'
import { getProfile, updateProfile, deleteUser } from '../controllers/users.js'
import { addItemToWishlist } from '../controllers/users.js'
import { getReviews, deleteReview } from '../controllers/reviews.js'

const router = express.Router()

// get all book
router.route('/books')
  .get(showBooks)

// get single book
router.route('/books/:id')
  .get(showSingleBook)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/books/:id/reviews')
  .post(secureRoute, addReview)

// router.route('/books/:id/reviews/:reviewId')
//   .put(secureRoute, updateReview)

router.route('/account')
  .get(secureRoute, getProfile)

router.route('/account/profile')
  .put(secureRoute, updateProfile)

router.route('/account/reviews')
  .get(secureRoute, getReviews)

router.route('/account/reviews/:reviewId')
  .delete(secureRoute, deleteReview)

// router.route('/users')
//   .get(showUsers)

router.route('/users/:id')
  .delete(deleteUser)
// add item to wishlist
router.route('/account/wishlist')
  .post(secureRoute, addItemToWishlist)

export default router