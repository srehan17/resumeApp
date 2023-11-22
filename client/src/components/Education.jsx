import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Education = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formEducation">
                <Form.Label>Institution</Form.Label>
                <Form.Control type="text" placeholder="Enter institution name" />
                {/* <Form.Text className="text-muted">
                    We'll never share your institution name with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQualification">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGpa">
                <Form.Label>GPA</Form.Label>
                <Form.Control type="text" placeholder="GPA" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Graduated" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    )
}

export default Education