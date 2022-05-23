import React from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const WishList = () => {
  const wishlistArray = JSON.parse(window.localStorage.getItem('wishlist')) 

  if (wishlistArray) {
    return (
      <section className="cat-container">
        <h1>Wishlist!</h1>
        <div className='cat-detail-grid'>
          {wishlistArray.map(book => {
            console.log(book)
            const { id, title, img } = book
            return (
              <Link to={`/books/${id}`} key={id}>
                <div className='cat-detail-card'>
                  <div className = 'cat-title'>{title}</div>
                  <img src={img} alt ={title}/>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    )
  } else {
    return (
      <section className="cat-container">
        <h1>Favorites</h1>
        <h3>No favorites added! :(</h3>
      </section>
    )
  }
}

export default WishList