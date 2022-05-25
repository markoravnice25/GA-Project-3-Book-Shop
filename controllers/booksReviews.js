import Book from '../models/books.js'
export const addReview = async (req, res) => {
  const { id } = req.params

  try {
    const bookToUpdate = await Book.findById(id)
    if (!bookToUpdate) throw new Error('Book not found')

    const reviewWithOwner = { ...req.body, owner: req.verifiedUser._id }

    // const newReview = await Review.create(reviewWithOwner)
    //book.reviews.push(reviewWithOwner)

    bookToUpdate.reviews.push(reviewWithOwner)
    await bookToUpdate.save()
    return res.status(200).json(reviewWithOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}

export const deleteReview = async (req, res) => {

  const { id, reviewId } = req.params

  try {
    const book = await Book.findById(id)

    if (!book) throw new Error('Book not found')

    const reviewToDelete = book.reviews.id(reviewId)
    if (!reviewToDelete) throw new Error('Review not found')

    await reviewToDelete.remove()

    await book.save()
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}

// export const updateReview = async (req, res) => {

//   const { id, reviewId } = req.params
//   console.log(req.params)
//   console.log('update review')
//   try {
//     const book = await Book.findById(id)

//     if (!book) throw new Error('Book not found')

//     const reviewToUpdate = book.reviews.id(reviewId)
//     if (!reviewToUpdate) throw new Error('Review not found')

//     const update = req.body

//     Object.assign(reviewToUpdate, update)

//     console.log('updated --->', reviewToUpdate)
    
//     await reviewToUpdate.save()
//     await book.save()
//     return res.sendStatus(204)
//   } catch (error) {
//     console.log(error)
//     return res.status(401).json({ message: 'Unauthorised' })
//   }
// }