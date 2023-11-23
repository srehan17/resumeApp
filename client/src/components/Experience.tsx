import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import Title from './Title'

const Experience = () => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
        <Container>
            <Title title="Experience" />
            <Form>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" />
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
                    <DatePicker 
                        value={startDate}
                        onChange={(v) => setStartDate(v as Date)}  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEndDate">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker                         
                        value={endDate}
                        onChange={(v) => setEndDate(v as Date)} 
                    />
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