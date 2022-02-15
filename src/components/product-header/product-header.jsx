import React from 'react';
import './product-header.scss'
import {Link} from "react-router-dom";
import Rating from "../rating/rating";
import share from './assets/share.svg'
const ProductHeader = ({ productType, name, rating }) => {
    return (
        <div className='product-page-header'>
            <div className='header-abowe wrapper'>
                <div className='back'>
                    <Link to='/' className='home'>
                        <span className='home'>Home</span>
                    </Link>
                    <span className='arr'>►</span>
                    <Link to={`/${productType}`} className='product-back'>
                        {productType}
                    </Link>
                    <span className='arr'>►</span>
                    <span className='product'>{name}</span>
                </div>
                <div className='share'>
                    <img src={share} alt='share' className='share-img' />
                    Share
                </div>
            </div>
            <div className='header-below wrapper'>
                <span className='title'>{name}</span>
            </div>
            <div className='header-bottom wrapper'>
                <div className='rating'>
                    <Rating rating={rating} />
                    <span className='reviews'>2 Reviews</span>
                </div>
                <div className='count'>
        <span className='sku'>
          SKU: <span className='bold'>777</span>
        </span>
                    <span className='availability'>
          Availability: <span className='bold'>In Stock</span>
        </span>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;