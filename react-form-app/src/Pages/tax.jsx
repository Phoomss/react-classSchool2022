import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Button, Label} from 'reactstrap'
const Tax = () => {
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
        navigate("/result", { state: { formData } });
      };
  return (
    <Container>
        <h1>Tax</h1>
        <hr />
        <Form onSubmit={submitForm}>
           <FormGroup>
                <Label for='name'>Name</Label>
                <Input  type="text" name="name" id="name"placeholder="Enter your name"required onChange={handlaChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for='name'>Job</Label>
                <Input  type="text" name="job" id="job"placeholder="Enter your job"required onChange={handlaChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for='name'>Salary</Label>
                <Input  type="text" name="salary" id="salary"placeholder="Enter your salary"required onChange={handlaChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label for='name'>Bonus</Label>
                <Input  type="text" name="bonus" id="bonus"placeholder="Enter your bonus"required onChange={handlaChange}></Input>
            </FormGroup>
            <Button color="primary" >Next </Button>
        </Form>
    </Container>
  )
}

export default Tax