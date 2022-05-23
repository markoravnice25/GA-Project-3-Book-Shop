import User from '../models/users.js'
import Review from '../models/reviews.js'

// Get the reviews the user made
export const getProfile = async (req, res) => {
  console.log('getProfile')

  try {
    const profile = await User.findById(req.verifiedUser._id)  
  
    const ownedReviews = await Review.find( { owner: req.verifiedUser._id } )

    if (!profile) throw new Error('User not found')
    
    return res.status(200).json(ownedReviews)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}