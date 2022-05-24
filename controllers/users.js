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

export const updateProfile = async (req, res) => {
  const { body: editProfile, verifiedUser } = req

  try {
    
    const updatedProfile = await User.findById(verifiedUser._id)  
    console.log('updatedProfile', updatedProfile)
    // Update the document
    Object.assign(updatedProfile, editProfile)

    // Save the document
    await updatedProfile.save()

    console.log('updatedProfileAGAIN', updatedProfile)

    if (!updatedProfile){
      return res.status(404).json({
        message: 'User not found',
      })
    }
    return res.status(200).json(updatedProfile)
  } catch (err) {
    console.log('ERRRR ==>', err)
    return res.status(404).json(err)
  }
}


export const showUsers = async (req, res) => {
  const users = await User.find()
  console.log('get users')
  return res.status(200).json(users)
}

export const deleteUser = async (req, res) => {

  const { id } = req.params
  console.log(req.params)

  try {
    const user = await User.findById(id)

    if (!user) throw new Error('Book not found')


    await user.remove()

    return res.sendStatus(204)
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
  console.log('destructured id ->', id)
  try {
    if (!req.verifiedUser || !req.verifiedUser._id) throw new Error('You\'re not logged in')

    const userAccount = await User.findById(req.verifiedUser._id) 
    console.log('Account pre push of new wishListItem ->', userAccount)

    const wishListItem = await Book.findById(id)
    if (!wishListItem) throw new Error('book not found')
    console.log('Single wishListItem ->', wishListItem)
   
    // https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
    // User.update(
    //   { _id: req.verifiedUser._id },
    //   { $push: { wishlist: wishListItem } }
    // )
    userAccount.wishlist.push(wishListItem)
    userAccount.save()
    console.log('Account after push of new wishListItem ->', userAccount)
    console.log('userAccount.wishlist ->', userAccount.wishlist)
    return res.status(200).json(userAccount.wishlist)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}
