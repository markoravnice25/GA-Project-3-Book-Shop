import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { getTokenFromLocalStorage } from '../helpers/auth'

const Reviews = () => {

  const [ reviews, setReviews ] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get('/api/account/reviews', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        console.log('reviews --->', data)
        setReviews(data)
      } catch (error) {
        console.log(error)
      }
    }
    getReviews()
  }, [])

  const handleDeleteBtn = async (e) => {

    console.log('value --->', e.target.value)
    const id = e.target.value
    console.log('id --->', id)
    try {
      const { data } = await axios.delete(`/api/account/reviews/${id}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })

    } catch (error) {
      console.log(error)
    }
    setReviews(reviews.filter(item => item._id !== e.target.value))
  }

  return (
    <>
      <div className='reviews-wrapper'>
        <h1>Reviews</h1>
        {reviews.map(item => {
          const { title, text, _id, book } = item
          return (
            <>
              <div key={_id} className='reviews-page-box'>
                <div className='reviews-page-img-wrapper'>
                  <h5>{book[0].title}</h5>
                  <img className='reviews-page-img' src={book[0].image} />
                </div>
                <div className='reviews-page-body'>
                  <div className='reviews-page-text'>
                    <h4>&quot;{title}&quot;</h4>
                    <p>{text}</p>
                  </div>
                  <button value={_id} onClick={handleDeleteBtn}>Delete review</button>
                </div>
              </div>
              <hr />
            </>
          )
        })}
      </div>
    </>
  )

}

export default Reviews