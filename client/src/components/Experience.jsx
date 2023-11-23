import React from 'react'
import { Form, Button, Container, CardTitle } from 'react-bootstrap'

const Experience = () => {
    return (
        <Container>
            <CardTitle className="text-center text-uppercase my-3">Experience</CardTitle>
            <Form>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company name" />
                    {/* <Form.Text className="text-muted"></Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="Position" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formResponsibilities">
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control type="text" as="textarea" rows={3} placeholder="Responsibilities" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="text" placeholder="Start Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formResponsibilities">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="text" placeholder="End Date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Current Job" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </Container >
    )
}

export default Experience