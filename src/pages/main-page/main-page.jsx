import React from 'react';
import {MainHeader} from "../../components/main-blocks/main-header/main-header";
import Advantage from "../../components/main-blocks/advantage/advantage";


const MainPage = () => {
    return (
        <>
            <div className='wrapper'>
                <MainHeader />
                <Advantage/>
            </div>

        </>
    );
};

export default MainPage;