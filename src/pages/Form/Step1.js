import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useFormik } from "formik";
import * as yup from 'yup';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

export default function Step1({ setData, data, setStep }) {
    const initialValues = {
        firstName: data?.firstName || '',
        middleName: data?.middleName || '',
        lastName: data?.lastName || '',
        mobileNo: data?.mobileNo || '',
        email: data?.email || '',
        birthday: data?.birthday || '',
        age: data?.age || '',
        bloodGroup: data?.bloodGroup || '',
        height: data?.height || '',
        weight: data?.weight || '',
        gender: data?.gender || '',
        maritalStatus: data?.maritalStatus || ''
    }
    const mobileRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const userInformationSchema = yup.object().shape({
        firstName: yup.string().trim().required("FirstName is required field"),
        middleName: yup.string().trim().required("MidleName is required field"),
        lastName: yup.string().trim().required("LastName is required field"),
        mobileNo: yup.string().trim().required("MobileNo is required field").matches(mobileRegExp, 'MobileNo must be a valid MobileNo'),
        email: yup.string().trim().required("Email is required field").email("Email must be a valid email"),
        birthday: yup.string().trim().required("Birthday is required field"),
        age: yup.number().required("Age is required field"),
        bloodGroup: yup.string().trim().required("Blood group is required field"),
        height: yup.number().required("Height is required field"),
        weight: yup.number().required("Weight group is required field"),
        gender: yup.string().trim().required("Please select your Gender"),
        maritalStatus: yup.string().trim().required("Please select Marital Status"),
    })
    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema: userInformationSchema,
        onSubmit: async (values, { resetForm }) => {
            const newData = {
                ...data,
                firstName:values.firstName,
                middleName:values.middleName,
                lastName:values.lastName,
                mobileNo:values.mobileNo,
                email:values.email,
                birthday:values.birthday,
                age:values.age,
                bloodGroup:values.bloodGroup,
                height:values.height,
                weight:values.weight,
                gender:values.gender,
                maritalStatus:values.maritalStatus,
            }
            await setData(newData)
            await setStep(2)
            await resetForm()
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.firstName && formik.errors.firstName) && "invalid"} type="text" name="firstName" placeholder="First Name" {...formik.getFieldProps("firstName")} />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-danger text-small">
                                {formik.errors.firstName}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.middleName && formik.errors.middleName) && "invalid"} type="text" name="middleName" placeholder="Middle Name" {...formik.getFieldProps("middleName")} />
                        {formik.touched.middleName && formik.errors.middleName ? (
                            <div className="text-danger text-small">
                                {formik.errors.middleName}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.lastName && formik.errors.lastName) && "invalid"} type="text" name="lastName" placeholder="Last Name" {...formik.getFieldProps("lastName")} />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-danger text-small">
                                {formik.errors.lastName}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.mobileNo && formik.errors.mobileNo) && "invalid"} type="text" name="mobileNo" placeholder="Mobile" {...formik.getFieldProps("mobileNo")} />
                        {formik.touched.mobileNo && formik.errors.mobileNo ? (
                            <div className="text-danger text-small">
                                {formik.errors.mobileNo}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.email && formik.errors.email) && "invalid"} type="text" name="email" placeholder="Email" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger text-small">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <DatePicker name="birthday"
                            selected={formik.values.birthday}
                            onChange={(date) => {
                                if (date) {
                                    formik.setFieldValue("birthday", date.getTime());
                                } else {
                                    formik.setFieldValue("birthday", "");
                                }
                            }}
                            className={`form-control ${(formik.touched.email && formik.errors.email) && "invalid"}`}
                            maxDate={new Date()}
                            showYearDropdown={true}
                            yearDropdownItemNumber={30}
                            placeholderText="Birthday" />
                        {formik.touched.birthday && formik.errors.birthday ? (
                            <div className="text-danger text-small">
                                {formik.errors.birthday}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.age && formik.errors.age) && "invalid"} type="text" name="age" placeholder="Age" {...formik.getFieldProps("age")} />
                        {formik.touched.age && formik.errors.age ? (
                            <div className="text-danger text-small">
                                {formik.errors.age}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Select value="" className={(formik.touched.bloodGroup && formik.errors.bloodGroup) && "invalid"} name="bloodGroup" {...formik.getFieldProps("bloodGroup")}>
                            <option disabled value="">Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </Form.Select>
                        {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                            <div className="text-danger text-small">
                                {formik.errors.bloodGroup}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.height && formik.errors.height) && "invalid"} type="text" name="height" placeholder="Height" {...formik.getFieldProps("height")} />
                        {formik.touched.height && formik.errors.height ? (
                            <div className="text-danger text-small">
                                {formik.errors.height}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Control className={(formik.touched.weight && formik.errors.weight) && "invalid"} type="text" name="weight" placeholder="Weight" {...formik.getFieldProps("weight")} />
                        {formik.touched.weight && formik.errors.weight ? (
                            <div className="text-danger text-small">
                                {formik.errors.weight}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label className={(formik.touched.gender && formik.errors.gender) && "text-danger"}>Gender</Form.Label>
                        <div className='d-flex align-items-center flex-wrap'>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                className='me-3'
                                checked={formik.values.gender === "Male"}
                                onChange={e => formik.setFieldValue("gender", "Male")}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                checked={formik.values.gender === "Female"}
                                onChange={e => formik.setFieldValue("gender", "Female")}
                            />
                        </div>
                        {formik.touched.gender && formik.errors.gender ? (
                            <div className="text-danger text-small">
                                {formik.errors.gender}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label className={(formik.touched.maritalStatus && formik.errors.maritalStatus) && "text-danger"}>Marital Status</Form.Label>
                        <div className='d-flex align-items-center flex-wrap'>
                            <Form.Check
                                type="radio"
                                label="Single"
                                name="maritalStatus"
                                className='me-3'
                                checked={formik.values.maritalStatus === "Single"}
                                onChange={e => formik.setFieldValue("maritalStatus", "Single")}
                            />
                            <Form.Check
                                type="radio"
                                label="Married"
                                name="maritalStatus"
                                className='me-3'
                                checked={formik.values.maritalStatus === "Married"}
                                onChange={e => formik.setFieldValue("maritalStatus", "Married")}
                            />
                            <Form.Check
                                type="radio"
                                label="Divorced"
                                name="maritalStatus"
                                className='me-3'
                                checked={formik.values.maritalStatus === "Divorced"}
                                onChange={e => formik.setFieldValue("maritalStatus", "Divorced")}
                            />
                            <Form.Check
                                type="radio"
                                label="Widowed"
                                name="maritalStatus"
                                checked={formik.values.maritalStatus === "Widowed"}
                                onChange={e => formik.setFieldValue("maritalStatus", "Widowed")}
                            />
                        </div>
                        {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                            <div className="text-danger text-small">
                                {formik.errors.maritalStatus}
                            </div>
                        ) : null}
                    </Form.Group>
                </Col>
            </Row>
            <Link to='/' className="btn btn-primary me-3">Back</Link>
            <Button variant="primary" type="submit">
                Next
            </Button>
        </Form>
    )
}
