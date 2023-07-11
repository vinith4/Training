import React from 'react'
import { Cardproject}  from '../../card/Card'

export const Projects = () => {
  return (
    <div className={`mb-2`}>
      <Cardproject
    content ="project 1"
    />
    <Cardproject
    content ="project 2"
    /></div>
  )
}
