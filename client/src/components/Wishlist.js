// packages
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// bootstrap
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

// Authorization
import { getTokenFromLocalStorage } from '../helpers/auth'


const WishList = () => {

  const [wishlist, setWishlist] = useState([])

  // get request from API
  useEffect(() => {
    const getWishlist = async () => {
      const { data } = await axios.get('/api/account/wishlist/', {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      setWishlist(data)
    }
    getWishlist()
  }, [])

  // control flow to display wishlist or be prompted to login
  if (wishlist && wishlist[0]) {
    return (
      <Container className='container-styling'>
        <Row className='heading-div'>
          <h2 className='heading'>My wish list</h2>
          <p className='heading-paragraph'>A wishlist by {}</p>
        </Row>
        <hr className='hr-line-first' />
        <div>
          {wishlist.map(book => {
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
                        <p className='title-whish'>{title}</p>
                      </div>
                    </Link>
                    <div className='col-two-items author-whishlist'>
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
      <Container className='container-styling'>
        <Row className='heading-div'>
          <h2 className='heading'>My wish list</h2>
          <p className='heading-paragraph'>A wishlist by ________</p>
        </Row>
      </Container>
    )
  }
}

export default WishList