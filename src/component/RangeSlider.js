import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function RangeSlider({ onChange, value }) {
    return (
        <>
            <Slider value={value} onChange={onChange} />
        </>
    )
}
