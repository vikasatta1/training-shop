import React from 'react';
import {SOCIAL_NETWORK} from "../../constants/social-network";
import './social-network.scss';
 const SocialNetwork = ({ size }) => {
  return (
    <div className='social-network'>
      {SOCIAL_NETWORK.map(({ id, imageSrc, href }) => (
        <a href={href} className='social-network-item' key={id}>
          <img src={imageSrc} width={size} alt='imgUser' className='social-network-item-img' />
        </a>
      ))}
    </div>
  );
};
 export default SocialNetwork;

