import React from 'react';
import star from './assets/star.svg';
import starYellow from './assets/star-yellow.svg';

import './rating.scss'
const SIZES_STARS = {
    s: '14px',
    m: '22px',
};

const MAX_RATING = 5;

const Rating = ({ size, rating }) => {
    const arrRating = Array.from(Array(MAX_RATING).keys());
    return (
        <div className='rating'>
            {arrRating.map((item, index) => (
                <img
                    key={index.toString()}
                    src={item < rating ? starYellow : star}
                    width={SIZES_STARS[size]}
                    alt='star'
                    className='rating-img'
                />
            ))}
        </div>
    );
};

export default Rating;