import React from 'react';
import './filter-item.scss'
const FilterItem = ({ text, id, type }) => {
    return (
        <label className='checkbox-label' htmlFor={`${type}-${id}`} key={id}>
            <input type='checkbox' className='checkbox-input' id={`${type}-${id}`} />
            <span className='checkbox-text'>{text}</span>
        </label>
    );
};

export default FilterItem;