import React from 'react'

const ProfileItem = ({item}) => {
  return (
    <>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.location}</td>
        <td>{item.linkedIn}</td>
    </>
  )
}

export default ProfileItem