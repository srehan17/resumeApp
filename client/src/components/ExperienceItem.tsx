import React from 'react'

const ExperienceItem = ({item}) => {
  return (
    <>
        <td>{item.company}</td>
        <td>{item.position}</td>
        <td>{item.responsibilities}</td>
        <td>{item.startYear}</td>
        <td>{item.endYear}</td>
    </>
  )
}

export default ExperienceItem