import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams, Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/auth'
import Spinner from '../utilities/Spinner'

const Account = () => {
  const navigate = useNavigate()
  // const { accountId } = useParams()
  const [account, setAccount] = useState('')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    !userIsAuthenticated() && navigate('/login')

    const getAccount = async () => {
      try {
        const { data } = await axios.get('/api/account', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })

        setAccount(data)
        console.log(data)


      } catch (error) {
        console.log(error)

      }
    }
    getAccount()

  }, [navigate])

  return (
    <section>


      <h1 className='text-center'>Account Dashboard</h1>
      <p>Hi {account.firstName}, welcome to your account dashboard</p>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              
            
              <a href="/account/profile/" className="btn btn-primary">Your Profile</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <a href="/account/wishlist/" className="btn btn-primary">Wish Lists</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              
              <a href="/account/reviews/" className="btn btn-primary">Reviews</a>
            </div>
          </div>
        </div>
      </div>
      

    

    </section>

  )












}



export default Account