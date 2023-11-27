import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

export interface IUser {
    userName: string;
  }    
  
  export interface IRootState {
    user: IUser;
  } 
  
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<any>();
    const { user } = useSelector((state: any) => state.auth)
    console.log("topbar",user); // returns the initial state

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    console.log(user)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">Resume Builder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/education">Education</Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    {user ? 
                        <Button type="button" className="btn btn-secondary" onClick={onLogout}>
                            Logout
                        </Button>
                        : 
                        <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    }
                </Nav>
                <LanguageSelector />
            </Navbar.Collapse>
        </Container>
    </Navbar>
)}

export default Header