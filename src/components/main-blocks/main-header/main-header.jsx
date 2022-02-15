import React from 'react';
import {MAIN_BIG_PHOTO} from '../../../constants/mainBigPhoto';
import Slider from "../../slider/slider";
import './main-header.scss';
import {MainNav} from "./main-header-nav/main-header-nav";

export const MainHeader = () => {
    return (
        <div className='main-header'>
            <Slider array={MAIN_BIG_PHOTO}/>
            <MainNav/>
        </div>
    );
};
