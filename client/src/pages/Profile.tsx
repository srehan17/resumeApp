import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Title from '../components/Title'

const Profile = () => {
  return (
    <Container>
        <Title title="Profile Information" />
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    </Container>
    )
}

export default Profile