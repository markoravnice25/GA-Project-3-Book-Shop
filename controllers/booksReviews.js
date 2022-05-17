import Book from '../models/books.js'

export const addReview = async (req, res) => {
  const { id } = req.params

  try {
    const bookToUpdate = await Book.findById(id)
    if (!bookToUpdate) throw new Error('Book not found')

    const review = req.body
    console.log(req.body)

    bookToUpdate.reviews.push(review)

    await bookToUpdate.save()
    console.log(bookToUpdate)
    return res.status(200).json(review)
  } catch (error) {
    console.log(error)
    return res.status(422).json(error)
  }
}

export const deleteReview = async (req, res) => {
  console.log(req)
  console.log('delete')
  return res.status(200).json({ message: 'Delete review' })
}