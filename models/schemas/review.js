import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 30 },
  text: { type: String, required: true, maxlength: 350 },
  // rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true ,
})
export default reviewSchema