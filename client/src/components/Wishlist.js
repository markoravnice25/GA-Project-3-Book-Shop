import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const WishList = () => {

  const [ books, setBooks ] = useState([])
  console.log('wishlist check')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/books')
        console.log(response.data)
        setBooks(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log(books)

  return (
    <section>
      <h1>My Wishlist!</h1>
      <p>A wishlist by -------</p>
      { books && books[0] ?
        <Container className='wishlist-all'>
          <hr />
          <Row className='wishlist-one'>
            <Col md='4' sm='6'>
              <img src={books[0].image} alt={books[0].title} />
            </Col>
            <Col md='8' sm='6'>
              <h4>{books[0].title}</h4>
              <h5>{books[0].author}</h5>
              <h4>￡{books[0].price}</h4>
              <h5>{books[0].genre}</h5>
              <p>{books[0].description}</p>
            </Col>
          </Row>
          <hr />
        </Container>
        :
        <h1>No items in WishList yet!</h1>
      }
    </section>
  )
}

export default WishList