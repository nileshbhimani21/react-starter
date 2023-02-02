import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useFormik } from "formik";
import * as yup from 'yup';

export default function Step2({ setData, data, setStep }) {
  const initialValues = {
    addressLine1: data?.addressLine1 || '',
    addressLine2: data?.addressLine2 || '',
    city: data?.city || '',
    state: data?.state || '',
    country: data?.country || '',
    pinCode: data?.pinCode || '',
  }
  const addressdetailsSchema = yup.object().shape({
    addressLine1: yup.string().trim().required("AddressLine1 is required field"),
    addressLine2: yup.string().trim().required("AddressLine2 is required field"),
    city: yup.string().trim().required("City is required field"),
    state: yup.string().trim().required("State is required field"),
    country: yup.string().trim().required("Country is required field"),
    pinCode: yup.number().required("PinCode is required field"),
  })
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: addressdetailsSchema,
    onSubmit: async (values, { resetForm }) => {
      const newData = {
        ...data,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        country: values.country,
        pinCode: values.pinCode,
      }
      await setData(newData)
      await setStep(3)
      await resetForm()
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control className={(formik.touched.addressLine1 && formik.errors.addressLine1) && "invalid"} type="text" name="addressLine1" placeholder="Address Line 1" {...formik.getFieldProps("addressLine1")} />
            {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
              <div className="text-danger text-small">
                {formik.errors.addressLine1}
              </div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control className={(formik.touched.addressLine2 && formik.errors.addressLine2) && "invalid"} type="text" name="addressLine2" placeholder="Address Line 2" {...formik.getFieldProps("addressLine2")} />
            {formik.touched.addressLine2 && formik.errors.addressLine2 ? (
              <div className="text-danger text-small">
                {formik.errors.addressLine2}
              </div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Select value="" className={(formik.touched.city && formik.errors.city) && "invalid"} name="city" {...formik.getFieldProps("city")}>
              <option disabled value="">City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Jamnagar">Jamnagar</option>
            </Form.Select>
            {formik.touched.city && formik.errors.city ? (
              <div className="text-danger text-small">
                {formik.errors.city}
              </div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Select value="" className={(formik.touched.state && formik.errors.state) && "invalid"} name="state" {...formik.getFieldProps("state")}>
              <option disabled value="">State</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Delhi">Delhi</option>
            </Form.Select>
            {formik.touched.state && formik.errors.state ? (
              <div className="text-danger text-small">
                {formik.errors.state}
              </div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Select value="" className={(formik.touched.country && formik.errors.country) && "invalid"} name="country" {...formik.getFieldProps("country")}>
              <option disabled value="">Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </Form.Select>
            {formik.touched.country && formik.errors.country ? (
              <div className="text-danger text-small">
                {formik.errors.country}
              </div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control className={(formik.touched.pinCode && formik.errors.pinCode) && "invalid"} type="text" name="pinCode" placeholder="Pin Code" {...formik.getFieldProps("pinCode")} />
            {formik.touched.pinCode && formik.errors.pinCode ? (
              <div className="text-danger text-small">
                {formik.errors.pinCode}
              </div>
            ) : null}
          </Form.Group>
        </Col>       
      </Row>
      <Button variant="primary" type="button" className='me-3' onClick={() => setStep(1) }>
        Back
      </Button>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  )
}
