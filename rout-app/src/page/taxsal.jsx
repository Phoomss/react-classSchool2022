import React from 'react'
import { useParams } from 'react-router-dom'
const Taxsal = () => {
    const {sal, p} = useParams()
    let tax = (sal * p)/100
  return (
    <div>
        Salary: {sal}
        <br />
        tax: {tax}
    </div>
  )
}

export default Taxsal