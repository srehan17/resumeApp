import React, {FC} from 'react'
import { useState, useEffect } from 'react'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'

interface BackendData {
  experiences: string[];
}

const Home = () => {
  const [backendData, setBackendData] = useState<BackendData | null>(null)

  useEffect(() => {
    fetch('/api/experience')
      .then(response => response.json()) 
      .then(data => setBackendData(data))
      .catch(err => console.log(err))
   } , []
  )
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)}

export default Home
    {/* <div>
      {(backendData?.experiences.length === 0) 
        ? (<p>Loading...</p>)
        : (backendData?.experiences.map((experience, index) => (
            <p key={index}>{experience}</p>
          )  
          )
        )
      }
    </div> */}

