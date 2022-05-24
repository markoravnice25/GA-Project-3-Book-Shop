import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ReviewDisplay } from './ReviewDisplay'
import { SimilarBookDisplay } from './SimilarBookDisplay'
// slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


// Bootstrap components76t
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Spinner from '../utilities/Spinner'
import { userIsAuthenticated, userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'
const BookShow = () => {
  const navigate = useNavigate()
  const { id, reviewID, bookId } = useParams()
  const [review, setReview] = useState('')
  const [book, setBook] = useState(null)
  const [errors, setErrors] = useState(false)
  //for section display same subgenre books
  const [similarBooks, setSimilarBooks] = useState([])

  // reviewform
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  })


  // TODO ================================= Start of Wishlist functionality =================================

  // * state
  const [ wishlistItem, setWishlistItem] = useState('🎁')

  //* useEffect for status (has item been added to wishList or not?)
  useEffect(() => {
    const getWishListStatus = async () => {
      const wishlistArray = await axios.get('/account/wishlist')
      console.log(wishlistArray)
      wishlistArray.some(item => item.id === id) ? setWishlistItem('🧨 Remove from Wishlist 🧨') : setWishlistItem('🎁 Add to Wishlist 🎁')
      // if (JSON.parse(window.localStorage.getItem('wishlist'))) {
      //   const wishlistString = JSON.parse(window.localStorage.getItem('wishlist')).map(value => JSON.stringify(value))
      //   wishlistString.indexOf(JSON.stringify(book)) !== -1 ? setWishlistItem('🧨 Remove from Wishlist 🧨') : setWishlistItem('🎁 Add to Wishlist 🎁')
    }
    getWishListStatus()
  }, [book])

  // * function to add wishList item to local storage
  // const addToWishlist = () => {
  //   let wishlistArray = JSON.parse(window.localStorage.getItem('wishlist'))
  //   if (wishlistArray === null) {
  //     wishlistArray = [{ ...book }]
  //     window.localStorage.setItem('wishlist', JSON.stringify(wishlistArray))
  //   } else {
  //     const wishlistArrayString = wishlistArray.map(value => JSON.stringify(value))
  //     if (wishlistArrayString.indexOf(JSON.stringify(book)) === -1) {
  //       wishlistArrayString.push(JSON.stringify(book))
  //     } else {
  //       wishlistArrayString.splice(wishlistArrayString.indexOf(JSON.stringify(book)), 1)
  //     }
  //     wishlistArray = wishlistArrayString.map(value => JSON.parse(value))
  //     window.localStorage.setItem('wishlist', JSON.stringify(wishlistArray))
  //   }
  //   navigate('/account/wishlist')
  // }

  const addOrRemove = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`api/books/account/wishlist/${id}`, {
        Headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/account/wishlist')
    } catch (error) {
      console.log(error)
    }
  }

  // TODO ================================= end of Wishlist functionality =================================
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  // to get single book
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
  // to get all the books
  useEffect(() => {
    const getSimilarBooks = async () => {
      try {
        const { data } = await axios.get('/api/books')
        setSimilarBooks(data)
      } catch (error) {
        setErrors(true)

      }
    }
    getSimilarBooks()
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
      console.log(data._id)
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
              <button className="wishlist-button" onClick={addOrRemove}>{wishlistItem}</button>
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




              {userIsAuthenticated() ?
                <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
                  <h4 className='text'>Write your review</h4>
                  {/* reviewTitle */}
                  <label htmlFor="reviewTitle">ReviewTitle</label>
                  {/* <input type="text" name="reviewTitle" className='input' placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange} /> */}
                  <textarea type="text" name="title" className="input" rows="2" placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange}></textarea>

                  {errors.reviewTitle && <p className='text-danger'>{errors.reviewTitle}</p>}
                  {/* reviewText */}
                  <label htmlFor="reviewText">ReviewText</label>
                  {/* <input type="text" name="reviewText" className='input' placeholder='write your review here' value={formData.reviewText} onChange={handleChange} /> */}
                  <textarea type="text" name="text" className="input" rows="5" placeholder='write your review here' value={formData.reviewText} onChange={handleChange}></textarea>


                  {errors.reviewText && <p className='text-danger'>{errors.reviewText}</p>}

                  {/* Submit */}
                  <button type="submit" className="button small">POST REVIEW</button>
                </form>
                :
                (
                  <div className="add-review-container">
                    <div>
                      <p>🖋<Link to="/login">Sign in </Link>to write a review</p>
                      <p>Not Registered Yet? <Link to="/register">Register</Link> instead</p>
                    </div>
                    {errors.text && (
                      <p>{errors.text}</p>
                    )}


                  </div>
                )}
            </Col>

            <h4>You may also be interested in...</h4>
            <div>
              <Slider {...settings} className='carousel-wrapper'>{
                similarBooks.filter((item) => item.subGenre === book.subGenre && item.id !== book.id).map((item) => {
                  return <SimilarBookDisplay key={item.id} item={item} />
                })
              }
              </Slider>
            </div>


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

