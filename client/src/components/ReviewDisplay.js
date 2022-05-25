import React from 'react'
import { userIsAuthenticated } from '../helpers/auth'
export const ReviewDisplay = ({ review })  => {
  console.log('user owner  --->', userIsAuthenticated)
  return (
    <div className='review-card'>
      <h6>&quot;{review.title}&quot;</h6>
      <p>{review.text}</p>
      <p className='posted-by'>{review.owner.firstName}</p>
      <hr />
    </div>
  )

}

