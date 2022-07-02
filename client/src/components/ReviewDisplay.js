import React from 'react'
import axios from 'axios'
import { userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'
import { useParams } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'

export const ReviewDisplay = ({ review, getBook })  => {

  const { id } = useParams()
  const handleDeleteBtn = async (e) => {
    const reviewId = e.target.value
    console.log('value --->', e.target.value)
    try {
      const { data } = await axios.delete(`/api/books/${id}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })

    } catch (error) {
      console.log(error.response)
    }
    getBook()
  }

  return (
    <div className='review-card'>
      <h5 className='posted-by'><BiUser />{review.owner.firstName}</h5>
      <h6>&quot;{review.title}&quot;</h6>
      <p>{review.text}</p>
      { userIsOwner(review) && <button value={review._id} onClick={handleDeleteBtn}>Delete review</button> }
      <hr />
    </div>
  )
}