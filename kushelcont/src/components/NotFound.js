import React from 'react'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
        <div  className='notFound'>
           <h1> 404 | Not Found</h1>
           <NavLink exact to="/">Back to the home page</NavLink>
        </div>
  )
}

export default NotFound