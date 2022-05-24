import React from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const WishList = () => {
  const wishlistArray = JSON.parse(window.localStorage.getItem('wishlist'))
  // get from API

  if (wishlistArray) {
    return (
      <Container className='container-styling'>
        <Row className='heading-div'>
          <h2 className='heading'>My wish list</h2>
          <p className='heading-paragraph'>A wishlist by ________</p>
        </Row>
        <hr className='hr-line-first'/>
        <div>
          {wishlistArray.map(book => {
            console.log(book)
            const { id, title, image, author, description, genre, price, subGenre, yearPublished } = book
            return (
              <>
                <Row className='row-styling'>
                  <Col sm='3' md='3' lg='2' className='column-one'>
                    <Link to={`/books/${id}`} key={id}>
                      <img className='book-image' src={image} alt={title} />
                    </Link>
                  </Col>
                  <Col sm='9' md='9' lg='10' className='column-two'>
                    <Link className='text-decoration-none' to={`/books/${id}`} key={id}>
                      <div>
                        <p className='title'>{title}</p>
                      </div>
                    </Link>
                    <div className='col-two-items author'>
                      <p>{author}</p>
                    </div>
                    <div className='col-two-items'>
                      <p className='price'>￡<span className='price-number'>{price}</span></p>
                    </div>
                    <div className='col-two-items sub-genre'>
                      <p>{subGenre}</p>
                    </div>
                    <div className='col-two-items description'>
                      <p>{description}</p>
                    </div>
                  </Col>
                  <hr />
                </Row>

              </>


            )
          })}
        </div>
      </Container>
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