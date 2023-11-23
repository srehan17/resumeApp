import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import Title from './Title'

const Education = () => {
    return (
        <Container>
            <Title title="Education" />  
            <Form>       
                <Form.Group className="mb-3" controlId="formEducationalInstitution">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control type="text" placeholder="Institution" />
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
                    <DatePicker />
                </Form.Group>
                <Form.Group className="mb-3" controlId="End Year">
                    <Form.Label>End Year</Form.Label>
                    <DatePicker />
                </Form.Group>
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