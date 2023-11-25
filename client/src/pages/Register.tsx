import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Title from '../components/Title'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <Container>
        <Title title="Register to Create an Account" />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={onChange}
                />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formPassword2">
                <Form.Label>Password2</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Password2" 
                    id="Password2" 
                    name="password2" 
                    value={password2}
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

export default Register