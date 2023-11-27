import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Container, Form } from 'react-bootstrap'
import Title from '../components/Title'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { useAppSelector, useAppDispatch } from '../app/hooks'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    const {name, email, password, password2} = formData

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    const {user, isLoading, isError, isSuccess, message} = useAppSelector(
        (state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch]) 
    
    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error("Passwords do not match")
        }
        else {
            const userData = {
                name, email, password
            }
            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <Container>
        <Title title="Register to Create an Account" />
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Re-enter Password" 
                    id="Password2" 
                    name="password2" 
                    value={password2}
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubmitButton">
                <Button type="submit" className="btn btn-block">Submit</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Register