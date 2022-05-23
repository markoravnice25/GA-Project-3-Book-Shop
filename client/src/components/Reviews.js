import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reviews = () => {

  const [ reviews, setReviews ] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get('api/account/reviews')
        console.log(data)
        setReviews(data)
      } catch (error) {
        console.log(error)
      }
    }
    getReviews()
  })

  return (
    <>
      <h1>Reviews</h1>
      <div className='reviews-wrapper'>
        {reviews.map(item => {
          const { title, text, _id } = item
          return (
            <div key={_id} className='review-box'>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </>
  )

}

export default Reviews