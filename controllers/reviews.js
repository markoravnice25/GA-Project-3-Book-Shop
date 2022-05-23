import Review from '../models/reviews.js'

// Get the reviews the user made
export const getReviews = async (req, res) => {

  try {
  
    const ownedReviews = await Review.find( { owner: req.verifiedUser._id } )

    if (!ownedReviews) throw new Error('User not found')
    
    return res.status(200).json(ownedReviews)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}

export const deleteReview = async (req, res) => {
  const { reviewId } = req.params
  console.log('reviewId --->,', reviewId)
  try {
  
    const reviewToDelete = await Review.findById(reviewId)

    if (!reviewToDelete) throw new Error('Review not found')
    
    await reviewToDelete.remove()

    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}