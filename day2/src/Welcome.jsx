import React from 'react'

const Welcome = (props) => {
  return (
    <>
     <h2>Welcome, {props.name}</h2>
     <h3>Gender {props.gender}</h3>
    </>
  ) 
}

export default Welcome