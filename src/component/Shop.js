import React from 'react'
import { Col } from 'react-bootstrap'
import { MappinIcon, StarFillIcon, StarIcon } from './Icons'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

export default function Shop({ data }) {
    return (
        <Col lg={3} className="mb-3">
            <div className='shadow rounded'>
                <img src={data?.image} alt="shop" />
                <div className='px-3 py-2'>
                    <div className='fs-20 fw-600'>{data?.name}</div>
                    <div className='d-flex align-items-center fs-16 mt-2'><MappinIcon className="me-2" />{data?.address}</div>
                    <div className='d-flex align-items-center justify-content-between fs-16  mt-3'>
                        <Rating
                            initialRating={data?.review}
                            readonly
                            emptySymbol={<StarIcon />}
                            fullSymbol={<StarFillIcon />}
                        />
                        <span className='opacity-75'>{data?.reviewTotal} reviews</span>
                    </div>
                    <Link to={`shop/${data?.id}`} className='btn btn-primary w-100 mt-3 mb-3'>VIEW ALL {data?.itemTotal} ITEMS</Link>
                </div>
            </div>
        </Col>
    )
}
