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
            <a href="." alt="" title="" className="icon-hover">
                <img src={Design} className="icon-logo" alt="" />
            </a>
            <a href="." alt="" title="" className="icon-hover">
                <img src={Dev} className="icon-logo" alt="" />
            </a>
            <a href="." alt="" title="" className="icon-hover">
                <img src={Ux} className="icon-logo" alt="" />
            </a>
        </div>
    );
}

export default Icons;