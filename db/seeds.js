import mongoose from 'mongoose'
import Book from '../models/books.js'
import 'dotenv/config'
import booksData from './data/books.js'


const seedDatabase = async () => {

  try {
    await mongoose.connect(process.env.DB_URI)
    await mongoose.connection.db.dropDatabase()
    const booksAdded = await Book.create(booksData)
    console.log(`Databades seeded with ${booksAdded.length} books`)
    await mongoose.connection.close()
    
  } catch (error) {
    console.log('🆘 Something went wrong')
    console.log(error)

    // Close the connection to the database
    await mongoose.connection.close()
    console.log('🚨 Connection closed due to failure')
    
  }
}

seedDatabase()

