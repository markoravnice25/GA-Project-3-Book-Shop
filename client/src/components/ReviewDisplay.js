import React from 'react'
import { userIsOwner } from '../helpers/auth'

export const ReviewDisplay = ({ review, handleDeleteBtn })  => {
  console.log('review  -->', review) 
  return (
    <div className='review-card'>
      <h6>&quot;{review.title}&quot;</h6>
      <p>{review.text}</p>
      {/* <p className='posted-by'>{review.owner.firstName}</p> */}
      <button onClick={handleDeleteBtn}>Delete review</button>
      <hr />
    </div>
  )
}

