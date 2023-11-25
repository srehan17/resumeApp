import React, { useState } from 'react'
import Title from '../components/Title'
import { Container, Form, Button } from 'react-bootstrap'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <Container>
        <Title title="Login to your account" />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubmitButton">
                <Button type="submit" className="btn btn-block">Submit</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Login