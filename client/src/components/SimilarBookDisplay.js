import React from 'react'
import { Link } from 'react-router-dom'


export const SimilarBookDisplay = ({ item }) => {
  const { title, author, image, price, _id } = item
  return (
    <div className='subgenre-row '>
      <div key={_id}>
        <Link to={`/books/${_id}`}>
          <div className="image-wrapper">
            <img src={image} />
          </div>
          <div className='card-body'>
            <div className='card-title'>
              <h4>{title}</h4>
            </div>
            <div className='author'>
              <h5>{author}</h5>
            </div>
            <h4 className="price">£ {price}</h4>
          </div>
        </Link>
      </div>
    </div>
  )

}

