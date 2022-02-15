import React from 'react';
import share from './assets/share.svg'
import {Link} from "react-router-dom";
import './products-header.scss'
const ProductsHeader = ({ productType }) => {
    return (
        <div className='clothes-page-header'>
            <div className='header-abowe wrapper'>
                <div className='back'>
                    <Link to='/' className='home'>
                        <span className='home'>Home</span>
                    </Link>
                    ►<span className='name-page'>{productType}</span>
                </div>
                <div className='share'>
                    <img src={share} alt='share' className='share-img' />
                    Share
                </div>
            </div>
            <div className='header-below wrapper'>
                <span className='title'>{productType}</span>
            </div>
        </div>
    );
};

export default ProductsHeader;