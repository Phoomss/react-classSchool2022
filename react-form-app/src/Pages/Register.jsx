import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Button, Label} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handlaChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    // submit formData to a server
    navigate("/preview", { state: { formData } });
  };
  return (
    <Container>
      <h1>Register</h1>
      <hr />
      <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input  type="text" name="name" id="name"placeholder="Enter your name"required onChange={handlaChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="xxx@yyy.zzz" required onChange={handlaChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="password" name="password" id="password" placeholder="Minimum 8 characters" required onChange={handlaChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Salary</Label>
        <Input  type="salary" name="salary" id="salary"placeholder="Enter your salary"required onChange={handlaChange}/>
      </FormGroup>
      <Button color="primary">Sign Up</Button>
    </Form>
    </Container>
  )
}

export default Register