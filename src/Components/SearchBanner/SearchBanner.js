import React from 'react';
import img from '../../bannerbackground.png';
import './SearchBanner.css'
const SearchBanner = () => {
    return (
        
        <div className="searchBanner">
            <img src={img} alt=""/>
            <br/>
            <div className="navigateItems">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>

        </div>
        
    );
};

export default SearchBanner;