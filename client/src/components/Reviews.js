import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reviews = () => {

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get('api/profile')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getReviews()
  })

  return <h1>Reviews</h1>

}

export default Reviews