import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default function Form() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(null)
  console.log(data,'data')
  return (
    <Container>
      <Card className='shadow border-0'>
        <Card.Body>
          <div className='stepNav d-flex align-items-start justify-content-around position-relative mb-4'>
            <div className={`stepItem d-flex flex-column justify-content-center align-items-center ${step === 1 && "active"} ${(step === 2 || step === 3 || step ===4) && "done"}`}>
              <div className='steNumber'>1</div>
              <div className='stepName'>USER INFORMATION</div>
            </div>
            <div className={`stepItem d-flex flex-column justify-content-center align-items-center ${step === 2 && "active"} ${(step === 3 || step ===4) && "done"}`}>
              <div className='steNumber'>2</div>
              <div className='stepName'>ADDRESS DETAILS</div>
            </div>
            <div className={`stepItem d-flex flex-column justify-content-center align-items-center ${step === 3 && "active"} ${(step ===4) && "done"}`}>
              <div className='steNumber'>3</div>
              <div className='stepName'>SKILLS</div>
            </div>
            <div className={`stepItem d-flex flex-column justify-content-center align-items-center ${step === 4 && "active"}`}>
              <div className='steNumber'>4</div>
              <div className='stepName'>Thank You</div>
            </div>
          </div>
          {step === 1 && <Step1 setData={setData} data={data} setStep={setStep} />}
          {step === 2 && <Step2 setData={setData} data={data} setStep={setStep} />}
          {step === 3 && <Step3 setData={setData} data={data} setStep={setStep} />}
          {step === 4 && <Step4 data={data} />}
        </Card.Body>
      </Card>
    </Container>
  )
}