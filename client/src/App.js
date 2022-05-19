import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageNavBar from './common/PageNavBar.js'
// import Home from './components/Home.js'
// import Register from './components/auth/Register.js'
// import Login from './components/auth/Login.js'
import BookShow from './components/BookShow.js'
// import Whishlist from './components/Whishlist.js'
// import Account from './components/Account.js'
// import NotFound from './common/NotFound.js'


const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/books/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <BrowserRouter>
      <PageNavBar />
      <Routes>
        <Route path="/books/:id" element={<BookShow />} />
 
      </Routes>
    </BrowserRouter>
  )
}

export default App
