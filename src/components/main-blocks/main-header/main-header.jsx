import React from 'react';
import './main-header.scss';
import {BIG_IMG}from '../../../constants/bigPhoto'
import Slider from "../../slider/slider";
import MainHeaderNav from "./main-header-nav/main-header-nav";
const MainHeader = () => {
    return (
        <div className='main-header'>
            <Slider array={BIG_IMG} />
            <MainHeaderNav/>
        </div>
    );
};

export default MainHeader;