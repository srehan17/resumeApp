import React, { useEffect, useState } from 'react'

const App = () => {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(response => response.json()) 
      .then(data => setBackendData(data))
      .catch(err => console.log(err))
   } , []
  )

  return (
    <div>
      {(typeof backendData.users === 'undefined') 
        ? (<p>Loading...</p>)
        : (backendData.users.map((user, index) => (
            <p key={index}>{user}</p>
          )  
          )
        )
      }
    </div>
  )
}

export default App