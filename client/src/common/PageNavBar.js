import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { userIsAuthenticated } from '../helpers/auth'
import logo from './../images/book.png'

const PageNavbar = () => {

  const [ term, setTerm ] = useState('')
  const [errors, setErrors] = useState(false)
  
  const navigate = useNavigate()
  // console.log(userIsAuthenticated())

  const handleLogout = () => {

    window.localStorage.removeItem('project-3-waterstones')

    navigate('/login')
  }

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      navigate(`/books/search/${term}`)
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }


  return (
    <Navbar  expand="sm">

      <Container>

        <Navbar.Brand as={Link} to='/'>
          Home
          <img src={logo}/>
         
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <input type="text" name="searchTerm" placeholder='🔍Search Book here...' onChange={handleChange} />
        <button type="submit" className="btn btn-dark btn-sm" onClick={handleSubmit}>Submit</button>

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

          <Nav.Link as={Link} to="/account/wishlist">♥️Wish List</Nav.Link>
          {/* <Nav.Link as={Link} to="/books">Books</Nav.Link> */}
          {userIsAuthenticated() ?
            <>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>

            :
            <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )

   
}

export default PageNavbar