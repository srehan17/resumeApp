import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { useAppSelector, useAppDispatch } from '../app/hooks'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    const {user, isLoading, isError, isSuccess, message} = useAppSelector(
        (state) => state.auth
    )

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

        const userData = {
            email, password
        }
        dispatch(login(userData))
       
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <Container>
        <Title title="Login to your account" />
        <Form onSubmit={handleSubmit}>
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
            <Form.Group className="mb-3" controlId="formSubmitButton">
                <Button type="submit" className="btn btn-block">Submit</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Login