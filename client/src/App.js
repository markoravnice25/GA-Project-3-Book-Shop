import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageNavBar from './common/PageNavBar.js'
import Home from './components/Home.js'
// import Register from './components/auth/Register.js'
// import Login from './components/auth/Login.js'
// import BookShow from './components/BookShow.js'
// import Whishlist from './components/Whishlist.js'
// import Account from './components/Account.js'
// import NotFound from './common/NotFound.js'
import Reviews from './components/Reviews.js'

const App = () => {

  return (
    <main>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path="/books" element={<Home />} />
          <Route path="/account/reviews" element={<Reviews />} />
          {/* <Route path="/books/:id" element={<BookShow />} />
          <Route path="/books/:id/#write-review" element={<BookShow />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />    
          <Route path="/account" element={<Account />} />    
          <Route path="/account/whishlist" element={<Whishlist />} />   */}

          {/* <Route path="*" element={<NotFound />} /> */}
  
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
