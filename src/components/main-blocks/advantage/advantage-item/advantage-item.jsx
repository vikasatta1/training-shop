import React from 'react';
import './advantage-item.scss';
const AdvantageItem = ({ img, title, text, name }) => {
    return (
        <div>
            <div className='advantage-item'>
                <img src={img} alt={name} className='advantage-item-img' />
                <div className='advantage-item-description'>
                    <div className='title'>{title}</div>
                    <div className='text'>{text}</div>
                </div>
            </div>
        </div>
    );
};

export default AdvantageItem;