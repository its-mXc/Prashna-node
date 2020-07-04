import React,  {useState} from 'react';
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'

const LoginForm = ({setNoticeStateFunction}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}
	
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	const handleLogin = (event) => {
		event.preventDefault()
		axios.post('/login', {email, password})
		.then((response) => {
      setNoticeStateFunction({view: true, heading: "Awesome!", message: "Logged in", variant: "success"})
    })
		.catch((error) => {
      setNoticeStateFunction({view: true, heading: "Oh Snap!", message: error.response.data.error_message, variant: "danger"})
		})
	}
  
  return (
    <Form onSubmit={handleLogin} className="w-25 m-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default LoginForm