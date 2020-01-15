import React from 'react';
import Design from '../images/my_design.png';
import Dev from '../images/my_dev.png';
import Ux from '../images/ux.png';
import icons from './Icons.json';
import './Icons.css';

function sortIcons() {
    console.log("icons", icons);
    
}

function Icons() {
    sortIcons();
    return (
        <div>
            <a href="google.com" alt="" title="" className="icon-hover"><img src={Design} className="icon-logo" alt="" /></a>
            <img src={Dev} className="icon-logo" alt="" />
            <img src={Ux} className="icon-logo" alt="" />
            {/* <img src={} /> */}
        </div>
    );
}

export default Icons;