import React from 'react';
import adjustments from './assets/adjustments.svg';
import cross from './assets/cross.svg';
import viewList from './assets/view-list.svg';
import viewGrid from './assets/view-grid.svg';
import arrow from './assets/arrow.svg';
import './products-settings.scss'
const ProductsSettings = ({ onToggleFilter, isFilterVisible }) => {
    return (
        <div className='products-settings'>
            <button className='filter' onClick={onToggleFilter} type='button'>
                {!isFilterVisible ? (
                    <img src={adjustments} alt='filter' className='filter-img' />
                ) : (
                    <img src={cross} alt='cross' className='cross' />
                )}
                FILTER
            </button>
            <div className='view'>
                <img src={viewList} alt='view-list' className='view-list-img' />
                <img src={viewGrid} alt='view-grid' className='view-grid-img' />
            </div>
            <div className='bestsellers'>
                BESTSELLERS
                <img src={arrow} alt='arrow' className='arrow-img' />
            </div>
        </div>
    );
};

export default ProductsSettings;