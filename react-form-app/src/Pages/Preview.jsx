import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Button} from 'reactstrap'

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {formData} = location.state;
  let maskedPassword = "*".repeat(formData.password.length);
  let bonus = formData.salary*2;
  
  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col">
          <h1>Preview Data</h1>
          <p>
            <strong>Name: {formData.name}</strong>
          </p>
          <p>
            <strong>Email: {formData.email}</strong>
          </p>
          <p>
            <strong>Password: {maskedPassword}</strong>
          </p>
          <p>
            <strong>Salary: {formData.salary}</strong>
          </p>
          <p>
            <strong>Bonus: ${bonus}</strong>
          </p>
          <p>
            <Button color="warning" onClick={() => navigate(-1)}>
              Edit
            </Button>{" "}
            &nbsp;
            <Button color="success" onClick={() => navigate("/success")}>
              Save
            </Button>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Preview