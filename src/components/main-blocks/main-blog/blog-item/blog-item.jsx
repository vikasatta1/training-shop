import React from 'react';
import './blog-item.scss'
import {Link} from "react-router-dom";
const BlogItem = ({ img, name, title, text, href }) => {
    return (
        <div className='blog-item'>
            <img src={img} alt={name} className='item-img' />

            <div className='description-block'>
                <div className='item-title'>{title}</div>
                <div className='item-text'>{text}</div>
                <Link to={href} className='more'>
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;