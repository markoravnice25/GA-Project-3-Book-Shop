import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// Bootstrap components
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import { useState } from 'react'

const Register = () => {

  const navigate = useNavigate()

  const [ formData, setFormaData ] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  })

  const [ errors, setErrors ] = useState({})

  const handleChange = (e) => {
    console.log('pre-set -> ', formData)
    setFormaData({ ...formData, [e.target.name]: e.target.value })
    console.log('post-set -> ', formData)
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setErrors(error)
    }
  }


  return (
    <section className='section-register'>
      {/* Heading */}
      <Form className='register-form' onSubmit={handleSubmit}>
        <Row>
          <h3 className='create-account'>CREATE AN ACCOUNT</h3>
        </Row>
        {/* Description */}
        <Row>
          <p className='create-account-paragraph'>Start your Waterstones journey by creating your account. For enhanced rewards,
            <a href="/register"> REGISTER</a> for
            <span className='inline-plus'> plus </span>
            and join our hugely popular email programme.</p>
        </Row>
        <Row>
          <p className='create-account-paragraph-2'>Denotes required field *</p>
        </Row>
        {/* Title */}
        <Row className='form-label'>
          <Col sm={6}>
            <Form.Group className='mb-3' as={Col} controlId="formGridState">
              <Form.Label>Title*</Form.Label>
              <Form.Select className='trigger' name='title' value={formData.title} onChange={handleChange} >
                <option>Please select</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Miss</option>
                <option>Dr</option>
                <option>Prof</option>
                <option>Rev</option>
                <option>Mx</option>
              </Form.Select>
              {errors.title && <p className='text-danger'>{errors.title}</p>}
            </Form.Group>
          </Col>
        </Row>
        {/* Name */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name*</Form.Label>
            <Form.Control type="text" name='firstName' value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className='text-danger'>{errors.firstName}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="text" name='lastName' value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className='text-danger'>{errors.lastName}</p>}
          </Form.Group>
        </Row>
        {/* Email */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm email*</Form.Label>
            <Form.Control type="email" name='confirmEmail' value={formData.confirmEmail} onChange={handleChange} />
            {errors.confirmEmail && <p className='text-danger'>{errors.confirmEmail}</p>}
          </Form.Group>
        </Row>
        {/* Password */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Choose a password*</Form.Label>
            <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm password*</Form.Label>
            <Form.Control type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
          </Form.Group>
        </Row>
        {/* Checkboxes and register button */}
        <Form.Group className="mb-3 form-label" id="formGridCheckbox">
          <Form.Check className='checkbox' type="checkbox" label="Recieve reading recommendations and be the first to hear about our special editions and author events, straight to your inbox" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3 form-label" id="formGridCheckbox">
            <Form.Check className='checkbox2' type="checkbox" label="I agree to the Waterstones.com Terms and Conditions." />
          </Form.Group>
          <Form.Group as={Col}>
            <Button className='button-register' type="submit">
              REGISTER
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </section>
  )
}
export default Register