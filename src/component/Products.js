import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Products({ data }) {
    return (
        <Col lg={3} className="mb-3">
            <div className='shadow rounded h-100 d-block'>
                <img src={data?.image} alt="Products" />
                <div className='px-3 py-2'>
                    <Link to={`products/${data?.id}`} className='text-green-hover d-block text-decoration-none text-dark h-55px overflow-hidden fs-20 fw-600'>{data?.name}</Link>
                    <div className='d-flex align-items-center fs-16  mt-3'>
                        <span className='fs-22 fw-600'>${data?.price}</span>
                        <span className='opacity-75'>(${data?.priceKg}/KG)</span>
                    </div>
                    <Button variant='primary'  className='w-100 mt-3 mb-3'>ADD TO CART</Button>
                </div>
            </div>
        </Col>
    )
}
