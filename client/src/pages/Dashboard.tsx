import React from 'react'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../components/Title';

interface BackendData {
  experiences: string[];
}

const Dashboard = () => {
  const [backendData, setBackendData] = useState<BackendData | null>(null)

  useEffect(() => {
    fetch('/api/experience')
      .then(response => response.json()) 
      .then(data => setBackendData(data))
      .catch(err => console.log(err))
  } , []
  )
  return (
    <Container>
      <Title title="Let's Build Your Resume!"/>
      {/* {(backendData?.experiences.length !== null) 
        ? (<p>Loading...</p>)
        : (backendData?.experiences.map((experience, index) => (
            <p key={index}>{experience}</p>
          )  
          )
        )
      } */}
    </Container>
  )
}

export default Dashboard