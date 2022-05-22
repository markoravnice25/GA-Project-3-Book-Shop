import Button from 'react-bootstrap/esm/Button'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/login', formData)
      navigate('/account')
    } catch (error) {
      console.log(error.response.data.errors)
      setErrors(error.response.data.errors)
      console.log('checking setErrors')
    }
  }


  return (
    <section className='section-register'>
      <Form className='register-form' onSubmit={handleSubmit}>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group>
            <Button className='button-register' type="submit">
              Login
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </section>
  )
}

export default Login