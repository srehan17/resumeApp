import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import Title from '../components/Title'

const Education = () => {

    const initialState = {
        institution: "",
        qualification: "",
        gpa: "",
        startYear: "",
        endYear: ""
    }

    const [formData, setFormData] = useState(initialState)

    // const [startDate, setStartDate] = useState<Date | null>(null)
    // const [endDate, setEndDate] = useState<Date | null>(null)
    
    const { institution, qualification, gpa, startYear, endYear} = formData

    const [isChecked, setIsChecked] = useState(false)
    
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

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
                    <Form.Control type="text" placeholder="GPA"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="startYear">
                    <Form.Label>Start Year</Form.Label>
                    {/* <DatePicker className="mx-3"
                        value={startDate}
                        onChange={(v) => setStartDate(v as Date)}  
                    /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="End Year">
                    <Form.Label>End Year</Form.Label>
                    {/* <DatePicker className="mx-3"
                        value={endDate}
                        onChange={(v) => setEndDate(v as Date)}  
                        disabled={isChecked}
                    /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                        type="checkbox" 
                        label="Graduated" 
                        data-toggle="toggle"
                        checked={isChecked}
                        onChange={checkHandler}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </Container>
    )
}

export default Education