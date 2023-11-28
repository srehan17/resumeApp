import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import Title from '../components/Title'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { createExperience, getExperience, reset } from '../features/experience/experienceSlice'
import { useNavigate } from 'react-router-dom'

const Experience = () => {

    const initialState = {
        company: "",
        position: "",
        responsibilities: "",
        startYear: "",
        endYear: ""
    }

    const [formData, setFormData] = useState(initialState)

    // const [startDate, setStartDate] = useState<Date | null>(null)
    // const [endDate, setEndDate] = useState<Date | null>(null)
    // const [startDate, setStartDate] = useState<Date>(new Date())
    // const [endDate, setEndDate] = useState<Date>(new Date())
    
    const {company, position, responsibilities, startYear, endYear} = formData

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [isChecked, setIsChecked] = useState(false)
    
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const { user } = useAppSelector((state) => state.auth)
    const {experience, isLoading, isError, isSuccess, message} = useAppSelector(
        (state) => state.experience)
    
    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    // useEffect(() => {
    //     if (isError) {
    //       console.log(message)
    //     }

    //     // if (!user) {
    //     //     navigate('/login')
    //     // }

    //     dispatch(getExperience())
    //   }, [
    //     user, navigate, isError, message, dispatch])

    let handleSubmit = async (e) => {
        e.preventDefault();

        const experienceData = {
            company, position, responsibilities, startYear, endYear
        }
        
        dispatch(createExperience(experienceData))
        navigate('/')

        // reset form data fields when form is submitted
        setFormData(initialState)
      };

    return (
        <Container>
            <Title title="Experience" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={company} 
                        name= "company"
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={position} 
                        name="position"
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formResponsibilities">
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control 
                        type="text" 
                        as="textarea" 
                        rows={3} 
                        name="responsibilities"
                        value={responsibilities} 
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStartYear">
                    <Form.Label>Start Year</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={startYear} 
                        name="startYear"
                        onChange={onChange}
                    />
                    {/* <DatePicker className="mx-3"
                        value={startDate}
                        onChange={(v) => setStartDate(v as Date)} 
                    /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEndYear">
                    <Form.Label>End Year</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={endYear} 
                        name="endYear"
                        onChange={onChange}
                        disabled={isChecked}
                    />
                    {/* <DatePicker className="mx-3"                    
                        value={endDate}
                        onChange={(v) => setEndDate(v as Date)} 
                        disabled={isChecked}
                    /> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Current Job" 
                        data-toggle="toggle"
                        checked={isChecked}
                        onChange={checkHandler}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </Container >
    )
}

export default Experience