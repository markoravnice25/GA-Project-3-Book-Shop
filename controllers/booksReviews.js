import Book from '../models/books.js'

export const addReview = async (req, res) => {
  const { id } = req.params

  try {
    const bookToUpdate = await Book.findById(id)
    if (!bookToUpdate) throw new Error('Book not found')

    const reviewWithOwner = { ...req.body, owner: req.verifiedUser._id }
    console.log('reviewWithOwner --->', reviewWithOwner)

    bookToUpdate.reviews.push(reviewWithOwner)
    await bookToUpdate.save()
    console.log(bookToUpdate)
    return res.status(200).json(reviewWithOwner)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}

export const deleteReview = async (req, res) => {

  console.log('delete')
  return res.status(200).json({ message: 'Delete review' })
}