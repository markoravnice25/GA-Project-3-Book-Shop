import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 350 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true ,
})

const bookSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  authors: { type: String },
  yearPublished: { type: String, required: true },
  price: { type: String, required: true },
  reviews: [reviewSchema],
  
})
bookSchema
  .virtual('avgRating')
  .get(function(){
    if (!this.review.length) return 'Not Rated Yet'
    const sum = this.reviews
  })


export default mongoose.model('Book', bookSchema)