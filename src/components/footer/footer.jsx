import React from 'react';
import FooterSubscription from "./footer-subscription/footerSubscription";
import FooterNav from "./footer-nav/footer-nav";
import FooterBanks from "./footer-banks/footer-banks";

const Footer = () => {
    return (
        <div className='footer' data-test-id='footer'>
            <FooterSubscription />
            <div className='wrapper'>
                <FooterNav />
            </div>
            <FooterBanks />
        </div>
    );
};

export default Footer;