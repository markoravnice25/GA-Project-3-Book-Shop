import React from 'react'

// Bootstrap components
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'

const Register = () => {
  return (
    <section className='section-register'>
      <Form className='register-form'>
        <Row>
          <h3 className='create-account'>CREATE AN ACCOUNT</h3>
        </Row>
        <Row>
          <p className='create-account-paragraph'>Start your Waterstones journey by creating your account. For enhanced rewards,
            <a href="/register"> REGISTER</a> for
            <span className='inline-plus'> plus </span>
            and join our hugely popular email programme.</p>
        </Row>
        <Row>
          <p className='create-account-paragraph-2'>Denotes required field *</p>
        </Row>
        <Row className='form-label'>
          <Col sm={6}>
            <Form.Group className='mb-3' as={Col} controlId="formGridState">
              <Form.Label>Title*</Form.Label>
              <Form.Select className='trigger'>
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
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm email*</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </Row>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Choose a password*</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm password*</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
        </Row>
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