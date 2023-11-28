import React from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import Spinner from '../components/Spinner'
import { getExperience, reset } from '../features/experience/experienceSlice'
import ExperienceItem from '../components/ExperienceItem'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  // const { user } = useAppSelector((state) => state.auth)
  const {experience, isLoading, isError, message} = useAppSelector(
    (state) => state.experience)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    // if (!user) {
    //   navigate('/login')
    // }
    // dispatch(getExperience())

    return () => {
      dispatch(reset())
    }
  }, [
    // user, 
    navigate, isError, message, dispatch])
  
  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <Container>
      <Title title="Let's Build Your Resume"/>
      {/* <h2 className="h2">Hello {user && user.name}!</h2> */}
      <div className="mt-5">
        <Button className="btn mx-2" onClick={() => navigate('/profile]')}>Add Profile</Button>
        <Button className="btn mx-2" onClick={() => navigate('/experience')}>Add Experience</Button>
        <Button className="btn mx-2" onClick={() => navigate('/education')}>Add Education</Button>
      </div>
     
      <section className='content'>
        {/* {experience.length > 0 ? (
          <div className='experience'>
            {experience.map((item, index) => (
              <ExperienceItem key={index} item={item} />
            ))} 
          </div>
        ) : (
          <h3>You have not added any experience</h3>
        )} */}
      </section>
    </Container>
  )
}

export default Dashboard