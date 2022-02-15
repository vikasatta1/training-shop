import React, {useState} from 'react';
import CardsItem from "../../components/cards-item/cards-item";
import {CARDS} from "../../constants/cards";

import ProductsHeader from "../../components/products-header/products-header";
import './products-page.scss'
import ProductsSettings from "../../components/products-settings/products-settings";
import Filter from "../../components/filter/filter";
const ProductsPage = ({productType}) => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const onToggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <div className='products-page' data-test-id={`products-page-${productType}`}>
            <ProductsHeader productType={productType}/>
            <div className='wrapper'>
                <ProductsSettings onToggleFilter={onToggleFilter} isFilterVisible={isFilterVisible}/>
                {isFilterVisible && <Filter/>}
                <div className='cards'>
                    {CARDS[productType].map((card) => (
                        <CardsItem key={card.id} card={card} productType={productType}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;