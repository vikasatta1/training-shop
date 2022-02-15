import React from 'react';
import arrUp from './assets/arr-up.svg'
import arrDown from './assets/arr-down.svg'
import './product-slider.scss'
import Slider from "../slider/slider";
const ProductSlider = ({ array }) => {
    return (
        <div className='slider-product'>
            <div className='side-block'>
                <div className='arr-up-down'>
                    <img src={arrUp} alt='arr-up' className='arr-up' />
                    <img src={arrDown} alt='arr-down' className='arr-down' />
                </div>
                <div className='small-img'>
                    {array.map(({ id, imageSrc, nameImg }) => (
                        <img key={id} src={imageSrc} className='small-img' alt={nameImg} />
                    ))}
                </div>
            </div>
            <Slider array={array} />
        </div>
    );
};

export default ProductSlider;