import React from 'react';
import {MainHeader} from "../../components/main-blocks/main-header/main-header";
import Advantage from "../../components/main-blocks/advantage/advantage";
import News from "../../components/news/news";
import Subscribe from "../../components/subscribe/subscribe";


const MainPage = () => {
    return (
        <>
            <div className='wrapper'>
                <MainHeader />
                <Advantage/>
               {/* <Clothes productType='women' />
                <Clothes productType='men' />*/}
                <News/>
            </div>
            <Subscribe/>

        </>
    );
};

export default MainPage;