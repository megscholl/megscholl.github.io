import React from 'react';
import { Link } from 'react-router-dom';
import Design from '../images/my_design.png';
import Dev from '../images/my_dev.png';
// import Ux from '../images/ux_2.png';
import Blog from '../images/blog.png'
import './Icons.css';

function Icons() {
    return (
        <div>
            <Link to="/design" alt="Design Work" title="Design Work" className="icon-hover">
                <span><img src={Design} className="icon-logo" alt="Design Work" title="Design Work" /></span>
            </Link>
            <Link to="/dev" alt="Development Work" title="Development Work" className="icon-hover">
                <span><img src={Dev} className="icon-logo" alt="Development Work" title="Development Work" /></span>
            </Link>
            {/* <a href="." alt="" title="" className="icon-hover">
                <img src={Ux} className="icon-logo" alt="" />
            </a> */}
            <Link to="/blog" alt="Blog Page" title="Blog Page" className="icon-hover">
                <span><img src={Blog} className="icon-logo" alt="Blog Page" title="Blog Page"  /></span>
            </Link>
        </div>
    );
}

export default Icons;