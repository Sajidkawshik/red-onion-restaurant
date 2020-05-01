import React from 'react';
import img from '../../bannerbackground.png';
import './SearchBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBanner = () => {
    return (
        
        <div className="searchBanner">
           
            <img src={img} alt=""/>    
                  
            <input placeholder="Search your cravings..."></input>
            <button><FontAwesomeIcon icon={faSearch}/></button>
           
            <br/>
            

        </div>
        
    );
};

export default SearchBanner;