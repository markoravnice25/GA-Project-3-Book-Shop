import Review from '../models/reviews.js'
import Book from '../models/books.js'

// Get the reviews the user made
export const getReviews = async (req, res) => {

  try {

    const ownedReviews = await Review.find( { owner: req.verifiedUser._id } ).populate('book')
    if (!ownedReviews) throw new Error('User not found')

    return res.status(200).json(ownedReviews)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}

export const deleteReview = async (req, res) => {
  const { id, reviewId } = req.params
  console.log('id --->', id)
  console.log('req --->', req.params)
  try {
  
    const reviewToDelete = await Review.findById(reviewId)
    console.log('reviewToDelete --->', reviewToDelete)

    const book = await Book.find( { 'reviews._id': reviewId })
    console.log('the book --->', book)

    const reviewToDeleteFromBook = book.reviews.id(reviewId)
    if (!reviewToDeleteFromBook) throw new Error('Review not found')
    
    console.log('review to delete from book again --->,', reviewToDeleteFromBook)

    // console.log('review Id --->', reviewId)
    // if (!reviewToDelete) throw new Error('Review not found')
    
    // await reviewToDelete.remove()
    // await reviewToDeleteFromBook.remove()

    // await book.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}