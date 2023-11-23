import React from 'react'
import { CardTitle } from 'react-bootstrap'

interface TitleProps {
    title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <CardTitle className="text-center display-6 my-3">
    {title}
    </CardTitle>
  )
}

export default Title