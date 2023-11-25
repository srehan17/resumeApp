import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import LanguageSelector from './LanguageSelector'

const Navigation = () => {
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
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
                <LanguageSelector />
            </Navbar.Collapse>
        </Container>
    </Navbar>
)}

export default Navigation