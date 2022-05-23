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
      <Container>
        <h1>Wishlist!</h1>
        <hr />
        <div>
          {wishlistArray.map(book => {
            console.log(book)
            const { id, title, image, author, description, genre, price, subGenre, yearPublished } = book
            return (
              <>
                <Row>
                  <Col>
                    <Link to={`/books/${id}`} key={id}>
                      <img src={image} alt={title} />
                    </Link>
                  </Col>
                  <Col>
                    <Link to={`/books/${id}`} key={id}>
                      <div>{title}</div>
                    </Link>
                    <p>{author}</p>
                    <p>{`￡${price}`}</p>
                    <p>{genre}</p>
                    <p>{subGenre}</p>
                    <p>{yearPublished}</p>
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