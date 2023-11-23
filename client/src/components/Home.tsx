import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
    const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api/experience')
      .then(response => response.json()) 
      .then(data => setBackendData(data))
      .catch(err => console.log(err))
   } , []
  )
  return (
    <div>
      {(typeof backendData.experiences === 'undefined') 
        ? (<p>Loading...</p>)
        : (backendData.experiences.map((experience, index) => (
            <p key={index}>{experience}</p>
          )  
          )
        )
      }
    </div>
  )
}

export default Home