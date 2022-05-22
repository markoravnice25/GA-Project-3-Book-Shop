import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const WishList = () => {

  const [books, setBooks] = useState([])


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/books/') // * <-- replace with your endpoint
      setBooks(data)
    }
    getData()
  }, [])
  console.log(books)

  return (
    <>
      <h1>My Wishlist!</h1>
      <p>A wishlist by -------</p>
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

    </>
  )
}

export default WishList