import arrPrev from './assets/arr-prev.svg';
import arrNext from './assets/arr-next.svg';
import './slider.scss';

import React from 'react';

const Slider = ({array}) => {
    return (
        <div className='slider'>
            {array.map(({ id, imageSrc, title, text, nameImg }) => (
                <div key={id} className='slider-block'>
                    <img src={arrPrev} alt='arr-prev' className='arr-prev-img' />
                    <img src={arrNext} alt='arr-next' className='arr-next-img' />
                    <img src={imageSrc} alt={nameImg} className='slider-img' />
                    {title && text && (
                        <div className='btn'>
                            <div className='title'>{title}</div>
                            <div className='text'>{text}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;