import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  title: { type: String, enum: ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Rev', 'Mx'], required: false },
  firstName: { type: String, required: true, unique: true, maxlength: 30 },
  lastName: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  confirmEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
}, { id: false })

userSchema
  .virtual('passwordConfirmation')
  .set(function(value) {
    this._passwordConfirmation = value
  })

userSchema.virtual('createdReviews', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'owner',
})


userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json){
    delete json.password
    return json
  },
})

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'haven\'t matched password field, try again')
    }
    next()
  })

userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
    }
    next()
  })

userSchema.methods.validatePassword = function(plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password)
}

userSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('User', userSchema)