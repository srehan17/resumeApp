import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Title from '../components/Title'

const Profile = () => {
    
    const initialState = {
        name: "",
        phone: "",
        email: "",
        location: "",
        linkedIn: ""
    }

    const [formData, setFormData] = useState(initialState)

  return (
    <Container>
        <Title title="Profile Information" />
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLinkedIn">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    </Container>
    )
}

export default Profile