import React from 'react';
import SocialNetwork from "../../social-network/social-network";
import './footer-subscription.scss';
const FooterSubscription = () => {
    return (
        <div className='footer-subscription'>
            <div className='wrapper'>
                <span className='footer-text'>BE IN TOUCH WITH US:</span>
                <div className='footer-email'>
                    <input type='text' placeholder='Enter your email' className='footer-input' />
                    <button className='footer-btn' type='button'>
                        JOIN US
                    </button>
                </div>
                <SocialNetwork size='18px' />
            </div>
        </div>
    );
};

export default FooterSubscription;