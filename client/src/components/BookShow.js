import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ReviewDisplay } from './ReviewDisplay'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Spinner from '../utilities/Spinner'
import { userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'
const BookShow = () => {
  const navigate = useNavigate()
  const { id, reviewID } = useParams()
  const [review, setReview] = useState('')
  const [book, setBook] = useState(null)
  const [errors, setErrors] = useState(false)
  // reviewform
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  })

  useEffect(() => {
    const getBook = async () => {
      try {
        const { data } = await axios.get(`/api/books/${id}`)
        setBook(data)
        setFormData(data)

      } catch (error) {
        setErrors(true)

      }
    }
    getBook()
  }, [id])

  // This useEffect checks to see if the user is the owner
  useEffect(() => {
    if (review) {
      // On page load we want to check the user is owner !userIsOwner(review) && 
      navigate(`/api/books/${id}/reviews/`)
    }
  }, [review, navigate])
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
      return ('you have submit your review')
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }


  return (
    <Container className="mt-4">
      <Row>
        {book ?
          <>

            <Col xs="12">
              <h3>{book.title}</h3>
              <hr />
            </Col>
            <Col md="6">
              <img src={book.image} alt={book.name} />
            </Col>
            <Col md="6">

              <h4>Author</h4>
              <p>{book.author}</p>
              <hr />
            
              <h4>price</h4>
              <p>£{book.price}</p>
              <hr />
              <h4>YearPublished</h4>
              <p>{book.yearPublished}</p>
              <hr />
              <h4>Description</h4>
              <p>{book.description}</p>
              <hr />
              <h4>Authors</h4>
              <p>{book.authors}</p>
              <hr />
              <h4>Review</h4>
              <div>{
                book.reviews.map((review) => {
                  return <ReviewDisplay key={review.id} review={review} />
                })
              }</div>
              <hr />

              
            

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
                <textarea type="text" name="reviewText" className="input"  rows="5" placeholder='write your review here' value={formData.reviewText} onChange={handleChange}></textarea>


                {errors.reviewText && <p className='text-danger'>{errors.reviewText}</p>}

                {/* Submit */}
                <button type="submit" className="btn btn-warning w-100">POST REVIEW</button>
              </form>


            </Col>
          </>
          :
          <h2 className='text-center'>
            {/* {errors ? 'Something went wrong! Please try again later!' : <Spinner />} */}
          </h2>
        }



      </Row>

    </Container>

  )






}
export default BookShow

