import React, { useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { userIsAuthenticated, userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'

const bookAddReview = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  // reviewform
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  })

  // State that tracks errors on specific fields
  const [errors, setErrors] = useState({})

  // ? Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }
  // this function will addreview 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/api/books/${id}/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate(`/books/${data._id}`)
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }
  return (
    <>
      {userIsAuthenticated ?
        <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
          <h4 className='text'>Write your review</h4>
          {/* reviewTitle */}
          <label htmlFor="reviewTitle">ReviewTitle</label>
          {/* <input type="text" name="reviewTitle" className='input' placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange} /> */}
          <textarea type="text" name="reviewTitle" className="input" rows="2" placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange}></textarea>

          {errors.reviewTitle && <p className='text-danger'>{errors.reviewTitle}</p>}
          {/* reviewText */}
          <label htmlFor="reviewText">ReviewText</label>
          {/* <input type="text" name="reviewText" className='input' placeholder='write your review here' value={formData.reviewText} onChange={handleChange} /> */}
          <textarea type="text" name="reviewText" className="input" rows="5" placeholder='write your review here' value={formData.reviewText} onChange={handleChange}></textarea>


          {errors.reviewText && <p className='text-danger'>{errors.reviewText}</p>}

          {/* Submit */}
          <button type="submit" className="button small">POST REVIEW</button>
        </form>
        :
        (
          <div className="add-review-container">
            <div>
              <textarea
                readOnly
                placeholder="🖋Sing in to write a review"
                name="text"
                className="comment-textarea"
              />
              <div
                className="button">
                <Link to="/login">
                  <button className="button small">
                    Login
                  </button></Link>
              </div>

              <h5>Not Register Yet? <Link to="/register">Register</Link> instead</h5>
            </div>
            {errors.text && (
              <p>{errors.text}</p>
            )}


          </div>
        )}
    </>
  )

}
export default bookAddReview