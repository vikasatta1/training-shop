import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import CardsItem from "../../components/cards-item/cards-item";
import {CARDS} from '../../constants/cards'
import ProductHeader from "../../components/product-header/product-header";
import ProductSlider from "../../components/product-slider/product-slider";
import Rating from "../../components/rating/rating";
import Reviews from "../../components/reviews/reviews";
import {SLIDER_PRODUCT_PAGE} from "../../constants/slider-product-page";
import {CHECKOUT_IMG, RIGHT_IMG} from "../../constants/product-page";
import hanger from './assets/hanger.svg';
import heart from './assets/heart.svg';
import scale from './assets/scale.svg';
import truck from './assets/truck.svg';
import refresh from './assets/refresh.svg';
import mail from './assets/mail.svg';
import annotation from './assets/annotation.svg';
import left from './assets/navigate/left.svg'
import right from './assets/navigate/right.svg'

import './product-page.scss'

const ProductPage = ({productType}) => {
    const {id} = useParams();
    const [card, setCard] = useState();

    useEffect(() => {
        setCard(CARDS[productType].find((item) => item?.id === id));
    }, [productType, id]);

    return (
        <div className='page-product' data-test-id={`product-page-${productType}`}>
            <ProductHeader productType={productType} name={card?.name} rating={card?.rating}/>
            <div className='page-product-main wrapper'>
                <ProductSlider array={SLIDER_PRODUCT_PAGE}/>
                <div className='params'>
          <span>
            COLOR:<span className='bold'>Blue</span>
          </span>
                    <div className='right-img'>
                        {RIGHT_IMG.map(({id: idImg, imageSrc}) => (
                            <img key={idImg} src={imageSrc} alt='suit'/>
                        ))}
                    </div>
                    <div className='size'>
                        SIZE:<span className='bold'>S</span>
                    </div>
                    <div className='size-btn'>
                        <button type='button'>XS</button>
                        <button type='button'>S</button>
                        <button type='button'>M</button>
                        <button type='button'>L</button>
                    </div>
                    <div className='hanger'>
                        <img src={hanger} alt='hanger' className='hanger-img'/>
                        <span>Size guide</span>
                    </div>
                    <div className='pay'>
                        <div className='cost'>$ {card?.price}</div>
                        <button type='button' className='pay-btn'>
                            ADD TO CARD
                        </button>
                        <img src={heart} alt='heart' className='heart-img'/>
                        <img src={scale} alt='scale' className='scale-img'/>
                    </div>
                    <div className='scope'>
                        <div className='truck'>
                            <img src={truck} alt='truck' className='truck-img'/>
                            <span>Shipping & Delivery</span>
                        </div>
                        <div className='refresh'>
                            <img src={refresh} alt='refresh' className='refresh-img'/>
                            <span>Returns & Exchanges</span>
                        </div>
                        <div className='mail'>
                            <img src={mail} alt='mail' className='mail-img'/>
                            <span>Ask a question</span>
                        </div>
                    </div>
                    <div className='checkout'>
            <span className='checkout-title'>
              GUARANTEED SAFE CHECKOUT <hr/>
            </span>
                        <div className='checkout-img'>
                            {CHECKOUT_IMG.map(({id: idImage, imageSrc, imgName}) => (
                                <img key={idImage} src={imageSrc} alt={imgName}/>
                            ))}
                        </div>
                    </div>
                    <div className='description'>
                        <div className='title'>DESCRIPTION</div>
                        <div className='text'>
                            <div className='text-title'>ADDITIONAL INFORMATION</div>
                            <div className='specifications'>
                                <div className='text-color'>
                                    Color:<span className='black'> Blue, White, Black, Grey</span>
                                </div>
                                <div className='text-size'>
                                    Size:<span className='black'>XS, S, M, L</span>
                                </div>
                                <div className='text-material'>
                                    Material:<span className='black'>100% Polyester</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviews'>
                        <div className='reviews-above'>
                            <div className='title'>REVIEWS</div>
                            <div className='subtitle-text'>
                                <div className='rating-reviews'>
                                    <Rating rating={card?.rating} size='m'/>
                                    <span className='amount-reviews'>2 Reviews</span>
                                </div>
                                <div className='annotation'>
                                    <img src={annotation} alt='annotation' className='annotation-img'/>
                                    <span className='write-reviews'>Write a review</span>
                                </div>
                            </div>
                        </div>
                        <div className='reviews-below'>
                            <Reviews/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products wrapper'>
                <div className="related-product__header">
                    <div className="related-product__title">RELATED PRODUCTS</div>
                    <div className="related-product__control">
                        <div className="slider-related__prev">
                            <img src={left} alt="prev" />
                        </div>
                        <div className="slider-related__next">
                            <img src={right} alt="next" />
                        </div>
                    </div>
                </div>
                <div className='products-cards'>
                    {CARDS[productType]
                        .filter((_, index) => index <= 3)
                        .map((cardItem) => (
                            <CardsItem card={cardItem} productType={productType} key={cardItem.id}/>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;