import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Button } from 'reactstrap';

const Result = () => {
  const location = useLocation();
  const {formData} = location.state;
  const navigate = useNavigate();
  let salary = formData.salary*12;
  let bonus = formData.bonus*1;
  let total = salary+bonus;
  let expense  = (total*50)/100;
  let dcount = 60000;
  let income  = total - dcount -expense;

// const income = 150000; // ค่าเงินได้พึงประเมิน

  let taxRate = 0;
  if (income >= 150001 && income <= 300000) {
    taxRate = 0.05;
  } else if (income >= 300001 && income <= 500000) {
    taxRate = 0.1;
  } else if (income >= 500001 && income <= 750000) {
    taxRate = 0.15;
  }else if (income >= 750000 && income <= 1000001) {
    taxRate = 0.2;
  }

  let taxAmount = 0;
  if (income >= 150000) {
    taxAmount = income * taxRate;
  }

// const totalTax = taxAmount - dcount; // dcount คือค่าลดหย่อนที่กำหนดไว้



  return (
   <div className="container">
    <div className="row mt-3">
        <div className="col">
            <h1>Result</h1>
            <hr />
            <p>
                <strong>ชื่อ: {formData.name} </strong>
            </p>
            <p>
                <strong>งาน: {formData.job} </strong>
            </p>
            <p>
                <strong>เงินเดือนทั้งปี: {salary} บาท</strong>
            </p>
            <p>
                <strong>โบนัส: {bonus} บาท</strong>
            </p>
            <p>
                <strong>รวมเงินได้: {total} บาท</strong>
            </p>
            <p>
                <strong>หัก ค่าใช้จ่าย: {expense} บาท</strong>
            </p>
            <p>
                <strong>หัก ค่าลดหย่อน: {dcount} บาท</strong>
            </p>
            <p>
                <strong>เงินได้พึงประเมิน: {income} บาท</strong>
            </p>
            <p>
                <strong>อัตราภาษี: {taxRate}%</strong>
            </p>
            <p>
                <strong>เงินภาษีที่ต้องชำละ: {taxAmount} บาท</strong>
            </p>
            <Form>
                <FormGroup>
                    <Button onClick={() => navigate(-1)}>Back To Page Tax</Button>
                </FormGroup>
            </Form>
        </div>
    </div>
   </div>
  )
}

export default Result