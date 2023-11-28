import React from 'react'

const EducationItem = ({item}) => {
  return (
    <>
        <td>{item.institution}</td>
        <td>{item.qualification}</td>
        <td>{item.gpa}</td>
        <td>{item.startYear}</td>
        <td>{item.endYear}</td>
    </>
  )
}

export default EducationItem