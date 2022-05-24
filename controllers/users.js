import User from '../models/users.js'
import Book from '../models/books.js'

// Get the reviews the user made
export const getProfile = async (req, res) => {
  console.log('getProfile')

  try {
    const account = await User.findById(req.verifiedUser._id)  

    if (!account) throw new Error('User not found')
    
    return res.status(200).json(account)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}

// METHOD: POST
// Endpoint: /account/wishlist
// descritption: req.body ->  genre, subGenre, image, author, description, yearPublished, price, reviews
export const addItemToWishlist = async (req, res) => {
  console.log('testing wishlist request')
  const { id } = req.body
  console.log(id)
  try {
    if (!req.verifiedUser || !req.verifiedUser._id) throw new Error('You\'re not logged in')

    const account = await User.findById(req.verifiedUser._id) 
    console.log(account)

    const wishListItem = await Book.findById(id)
    if (!wishListItem) throw new Error('book not found')
    console.log(wishListItem)
   
    // https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
    // User.update(
    //   { _id: req.verifiedUser._id },
    //   { $push: { wishlist: wishListItem } }
    // )
    account.wishlist.push(wishListItem)
    account.save()
    const wishlistArray = account.wishlist
    console.log('wishlistArray ->', wishlistArray)
    return res.status(200).json(wishlistArray)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}