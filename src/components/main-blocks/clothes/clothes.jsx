import React from 'react';
import { Link } from 'react-router-dom';
import {MAIN_CLOTHES_MENU} from '../../../constants/clothes-menu';
import {CARDS} from "../../../constants/cards";
import './clothes.scss';
import CardsItem from "../../cards-item/cards-item";

const Clothes = ({productType}) => {
    return (
        <div className='clothes' data-test-id={`clothes-${productType}`}>
            <div className='clothes-header'>
                <div className='clothes-title'>{`${productType}’s`}</div>
                <div className='clothes-menu'>
                    {MAIN_CLOTHES_MENU.map(({ id, name }) => (
                        <div className='clothes-menu-item' key={id}>
                            {name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='cards'>
                {CARDS[productType].filter((_, index) => index <= 7)
                    .map((card) => (
                        <CardsItem key={card.id} card={card} productType={productType} />
                    ))}
            </div>
            <Link to={`/${productType}`} className='cards-item-a'>
                <button className='clothes-button' type='button'>
                    SEE ALL
                </button>
            </Link>
        </div>
    );
};

export default Clothes;

