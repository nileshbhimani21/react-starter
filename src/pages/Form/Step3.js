import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useFormik } from "formik";
import * as yup from 'yup';
import StarRating from '../../component/StarRating';
import RangeSlider from '../../component/RangeSlider';

export default function Step3({ setData, data, setStep }) {
  const initialValues = {
    html: data?.html || "",
    css: data?.css || "",
    es6: data?.es6 || "",
    react: data?.react || "",
    redux: data?.redux || "",
    english: data?.english || "",
    hindi: data?.hindi || "",
    gujarati: data?.gujarati || "",
    termAndCondition: data?.termAndCondition || "",
  }
  const skillsSchema = yup.object().shape({
    html: yup.number().required("Rate your HTML Skill"),
    css: yup.number().required("Rate your CSS Skill"),
    es6: yup.number().required("Rate your ES6 Skill"),
    react: yup.number().required("Rate your React Skill"),
    redux: yup.number().required("Rate your Redux Skill"),
    english: yup.number().required("English selection required"),
    hindi: yup.number().required("Hindi selection required"),
    gujarati: yup.number().required("Gujarati your ES6 Skill"),
    termAndCondition: yup.string().trim().required("You must have to accept T & C"),
  })
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: skillsSchema,
    onSubmit: async (values, { resetForm }) => {
      const newData = {
        ...data,
        html: values.html,
        css: values.css,
        es6: values.es6,
        react: values.react,
        redux: values.redux,
        english: values.english,
        hindi: values.hindi,
        gujarati: values.gujarati,
        termAndCondition: values.termAndCondition,
      }
      await setData(newData)
      await setStep(4)
      await resetForm()
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={12}>
          <Form.Label>RATE YOUR SKILLS</Form.Label>
          <Row>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.html && formik.errors.html) && "text-danger"}`}>HTML</Form.Label>
                <StarRating
                  initialRating={formik.values.html}
                  onChange={e => {
                    formik.setFieldValue("html", e)
                  }}
                />
                {formik.touched.html && formik.errors.html ? (
                  <div className="text-danger text-small">
                    {formik.errors.html}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.css && formik.errors.css) && "text-danger"}`}>CSS</Form.Label>
                <StarRating
                  initialRating={formik.values.css}
                  onChange={e => {
                    formik.setFieldValue("css", e)
                  }}
                />
                {formik.touched.css && formik.errors.css ? (
                  <div className="text-danger text-small">
                    {formik.errors.css}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.es6 && formik.errors.es6) && "text-danger"}`}>ES6</Form.Label>
                <StarRating
                  initialRating={formik.values.es6}
                  onChange={e => {
                    formik.setFieldValue("es6", e)
                  }}
                />
                {formik.touched.es6 && formik.errors.es6 ? (
                  <div className="text-danger text-small">
                    {formik.errors.es6}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.react && formik.errors.react) && "text-danger"}`}>React</Form.Label>
                <StarRating
                  initialRating={formik.values.react}
                  onChange={e => {
                    formik.setFieldValue("react", e)
                  }}
                />
                {formik.touched.react && formik.errors.react ? (
                  <div className="text-danger text-small">
                    {formik.errors.react}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.redux && formik.errors.redux) && "text-danger"}`}>Redux</Form.Label>
                <StarRating
                  initialRating={formik.values.redux}
                  onChange={e => {
                    formik.setFieldValue("redux", e)
                  }}
                />
                {formik.touched.redux && formik.errors.redux ? (
                  <div className="text-danger text-small">
                    {formik.errors.redux}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <Form.Label className='mt-3'>RATE YOUR LANGUAGE PROFICIENCY LEVEL</Form.Label>
          <Row>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.english && formik.errors.english) && "text-danger"}`}>English</Form.Label>
                <RangeSlider value={formik.values.english} onChange={(e) => formik.setFieldValue("english", e)} />
                {formik.touched.english && formik.errors.english ? (
                  <div className="text-danger text-small">
                    {formik.errors.english}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.hindi && formik.errors.hindi) && "text-danger"}`}>Hindi</Form.Label>
                <RangeSlider value={formik.values.hindi} onChange={(e) => formik.setFieldValue("hindi", e)} />
                {formik.touched.hindi && formik.errors.hindi ? (
                  <div className="text-danger text-small">
                    {formik.errors.hindi}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className='mb-3'>
                <Form.Label className={`w-100 mb-0 text-small ${(formik.touched.gujarati && formik.errors.gujarati) && "text-danger"}`}>Gujarati</Form.Label>
                <RangeSlider value={formik.values.gujarati} onChange={(e) => formik.setFieldValue("gujarati", e)} />
                {formik.touched.gujarati && formik.errors.gujarati ? (
                  <div className="text-danger text-small">
                    {formik.errors.gujarati}
                  </div>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <Form.Group className='mb-3'>
            <Form.Check
              type="checkbox"
              label="Term and Condition"
              name="termAndCondition"
              value="Yes"
              checked={formik.values.termAndCondition === 'Yes'}
              onChange={e => {
                formik.setFieldValue("termAndCondition", e.target.value)
              }}
            />
            {formik.touched.termAndCondition && formik.errors.termAndCondition ? (
              <div className="text-danger text-small">
                {formik.errors.termAndCondition}
              </div>
            ) : null}
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="button" className='me-3' onClick={() => setStep(2)}>
        Back
      </Button>
      <Button variant="primary" type="submit">
        Finish
      </Button>
    </Form>
  )
}
