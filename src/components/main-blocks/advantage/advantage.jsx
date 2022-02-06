import React from 'react';
import {ADVANTAGE} from "../../../constants/advantage";
import AdvantageItem from "./advantage-item/advantage-item";
import './advantage.scss';
const Advantage = () => {
    return (
        <div className={'advantage'}>
            {ADVANTAGE.map(({ id, imageSrc, title, text, name }) => (
                <AdvantageItem key={id} img={imageSrc} title={title} text={text} name={name} />
            ))}
        </div>
    );
};

export default Advantage;