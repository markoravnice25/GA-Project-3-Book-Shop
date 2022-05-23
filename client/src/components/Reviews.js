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
    console.log(e.target.value)

    const id = e.target.value
    console.log('id --->', id)
    try {
      const { data } = await axios.delete(`/api/account/reviews/${id}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log('reviews --->', data)
      // let toDelete = null
      setReviews(reviews.filter(item => {
        if (item.id === id) console.log('to delete', item)
      }))

    } catch (error) {
      console.log(error)
    }
  }

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
              <button value={_id} onClick={handleDeleteBtn}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )

}

export default Reviews