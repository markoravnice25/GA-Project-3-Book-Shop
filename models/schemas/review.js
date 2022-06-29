// import mongoose from 'mongoose'
// import mongooseUniqueValidator from 'mongoose-unique-validator'

// const reviewSchema = new mongoose.Schema({
//   title: { type: String, required: true, maxlength: 30 },
//   text: { type: String, required: true, maxlength: 350 },
//   // rating: { type: Number, required: true, min: 1, max: 5 },
//   owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
// }, {
//   timestamps: true ,
// })

// reviewSchema.virtual('book', {
//   ref: 'Book',
//   localField: '_id',
//   foreignField: 'reviews._id',
// })

// reviewSchema.set('toJSON', {
//   virtuals: true,
//   transform(_doc, json){
//     console.log('json --->', json)
//     return json
//   },
// })

// reviewSchema.plugin(mongooseUniqueValidator)
// export default reviewSchema