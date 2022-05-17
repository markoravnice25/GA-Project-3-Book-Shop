import Book from '../models/books.js'

// METHOD: GET
// Endpoint: /books
export const showBooks = async (req, res) => {
  const books = await Book.find()
  console.log('get books')
  return res.status(200).json(books)
}