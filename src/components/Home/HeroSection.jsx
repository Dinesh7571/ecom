import React from 'react';

import './HeroSection.css';
import iphone from '../../assets/iphone-14-pro.webp';
import { Link } from 'react-router-dom';

const HeroSection = ({title ,subtitle ,link ,image}) => {
  return (
    <section className="hero_section">
        <div className="align_center">
            <h2 className="hero_title">{title}</h2>
            <p className="hero_subtitle">{subtitle}</p>
            <Link to={link} className="hero_link">Buy Now</Link>
        </div>
        <div className="align_center">
            <img src={image} alt="" className="hero_image" />
        </div>
    </section>
  )
}

export default HeroSection