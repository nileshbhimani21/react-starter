import React from 'react'
import Rating from 'react-rating'
import { StarFillIcon, StarIcon } from './Icons'

export default function StarRating({ initialRating, onChange }) {
    return (
        <Rating
            initialRating={initialRating}
            emptySymbol={<StarIcon />}
            fullSymbol={<StarFillIcon />}
            onChange={onChange}
        />
    )
}
