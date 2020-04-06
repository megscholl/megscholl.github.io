import React from 'react';
import './Icons.css'
import L from '../images/icons/linkedin.png'
import P from '../images/icons/pinterest.png'

let linkedin = 'https://www.linkedin.com/in/meg-scholl/';
let pinterest = 'https://www.pinterest.com/meghscholl/code-design-ux/';

const SocialIcons = () => {
    return (
        <div>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" alt=""><img src={L} alt="" className="social-icons"/></a>
            <a href={pinterest} target="_blank" rel="noopener noreferrer" alt=""><img src={P} alt="" className="social-icons"/></a>
        </div>
    )
}

export default SocialIcons;