import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import Title from '../components/Title'

const Experience = () => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    const [isChecked, setIsChecked] = useState(false)
    
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const [company, setCompany] = useState<string>()
    const [position, setPosition] = useState<string>()
    const [responsibilities, setResponsibilities] = useState<string>()
    const [message, setMessage] = useState<string>()

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({
              company,
              position,
              responsibilities,
              startDate
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setCompany("");
            setPosition("");
            setResponsibilities("");
            setStartDate(null);
          } else {
            setMessage("Some error occured");
          }
          console.log("RESJSON: ",resJson);
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <Container>
            <Title title="Experience" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" value={company}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="Position" value={position}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formResponsibilities">
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control type="text" as="textarea" rows={3} placeholder="Responsibilities" value={responsibilities}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker className="mx-3"
                        value={startDate}
                        onChange={(v) => setStartDate(v as Date)}  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEndDate">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker className="mx-3"                    
                        value={endDate}
                        onChange={(v) => setEndDate(v as Date)} 
                        disabled={isChecked}
                    />
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