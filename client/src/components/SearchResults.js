import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import BookList from '../components/BookList'
import { useParams } from 'react-router-dom'

const SearchResult = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const { term } = useParams()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/books')
      setBooks(data)
      console.log(data)
    }
    getData()
  }, [term])


  useEffect(() => {

    if (books.length) {

      const regexSearch = new RegExp(term, 'i')


      const filtered = books.filter(book => {

        return regexSearch.test(book.title) || regexSearch.test(book.author)



      })
      setFilteredBooks(filtered)
    }
  }, [term, books])

  return (
    <>
      <section className='serchDisplay'>
        <h4>Here are your search results:</h4>
        <Container className='mt-5'>
          <BookList filteredBooks={filteredBooks} />
        </Container>
      </section>
    </>
  )
}
export default SearchResult