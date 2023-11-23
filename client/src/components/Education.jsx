import React from 'react'
import { Form, Button, Container, CardTitle } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

const Education = () => {
    return (
        <Container>
            <CardTitle className="text-center text-uppercase my-3">Education</CardTitle>
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
                <Form.Group className="mb-3" controlId="startYear">
                    <Form.Label>Start Year</Form.Label>
                    <Form.Control type="text" placeholder="Start Year" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="End Year">
                    <Form.Label>End Year</Form.Label>
                    <Form.Control type="text" placeholder="End Year" />
                </Form.Group>
                <DatePicker
                // onChange={onChange} value={value} 
                />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Graduated" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </Container>
    )
}

export default Education