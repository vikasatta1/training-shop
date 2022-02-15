import React from 'react';
import {REVIEWS} from "../../constants/reviews";
import Rating from "../rating/rating";

import './reviews.scss'

const Reviews = () => {
    return (
        <div className='reviews'>
            {REVIEWS.map(({id, name, time, text, rating}) => (
                <div key={id} className='reviews-text'>
                    <div className='title'>
                        <div className='name'>{name}</div>
                        <div className='time-rating'>
                            {time}
                            <Rating rating={rating}/>
                        </div>
                    </div>
                    <div className='text'>{text}</div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;