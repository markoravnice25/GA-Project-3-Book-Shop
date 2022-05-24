import User from '../models/users.js'

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
  console.log(req)
  const { body: editProfile, verifiedUser } = req
  try {
    
    const updatedProfile = User.findById(verifiedUser._id)  

    // Update the document
    Object.assign(updatedProfile, editProfile)

    // Save the document
    await updatedProfile.save()

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


// export const showUsers = async (req, res) => {
//   const users = await User.find()
//   console.log('get users')
//   return res.status(200).json(users)
// }

// export const deleteUser = async (req, res) => {

//   const { id } = req.params
//   console.log(req.params)

//   try {
//     const user = await User.findById(id)

//     if (!user) throw new Error('Book not found')


//     await user.remove()

//     return res.sendStatus(204)
//   } catch (error) {
//     console.log(error)
//     return res.status(401).json({ message: 'Unauthorised' })
//   }
// }