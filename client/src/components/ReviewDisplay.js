import React from 'react'

export const ReviewDisplay = ({ review }) => {
  return (

    <div className='reviews-card'>
      <p>{review.title}</p>
      <p>{review.text}</p>
     
      

    </div>
  )

}

