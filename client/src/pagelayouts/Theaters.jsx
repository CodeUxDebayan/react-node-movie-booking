import React, { useState } from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import "./Showtimes.css";
import "./Theaters.css";

export const Theaters = () => {
    
    const [selectedHall, setSelectedHall] = useState(null);
      
    const handleSelectChange = (selectedOption) => {
      setSelectedHall(selectedOption);
    };



    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: 'transparent',
          borderRadius: '10px',
          display: 'flex',
          width: '250px',
          height: '20px',
          color: state.isFocused ? 'white' : 'gray',
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
       border: state.isFocused ? 0 : 0
  },
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color:'white',
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && "rotate(180deg)"
          }),
          menu: (provided, state) => ({
            ...provided,
            width: "250px",
            zIndex: 100,
            backgroundColor: state.isFocused ? 'red' : 'black',
          }),
          input: (provided, state) => ({
            ...provided,
            color:'white',
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? 'white' : 'white',
            backgroundColor: state.isSelected ? 'red' : 'black',
          }),
      
    
    };


    const movieHalls = [
        { value: 'hall1', label: 'Movie Hall 1' },
        { value: 'hall2', label: 'Movie Hall 2' },
        { value: 'hall3', label: 'Movie Hall 3' },
        { value: 'hall4', label: 'Movie Hall 4' },
        { value: 'hall5', label: 'Movie Hall 5' },
      ];
    



    return (
        <div className="theaters">
            <div className="theaters-header">
                <div className='theaters-title'>Theaters</div>
                <div className="movie-hall-selector">
                    
                    <FaSearch className="hall-search-icon"/>
                    
                    <Select styles={customStyles} value={selectedHall} onChange={handleSelectChange} options={movieHalls} isClearable placeholder="Select a Movie Hall"/>
                    </div>
            </div>
            <div className="theaters-container">
              
              <div className="theaters-image"></div>
              <div className="theaters-content">
              <div className="theaters-title">Inox Pvt Ltd</div>
              <div className="theaters-types-available"><span>3d</span>
<span >| 2d</span>
<span >| Imax 2d</span></div>
              
              <div className="theaters-description">We are a good place</div>
              <div className="theaters-location-container">
              <div className="theaters-location">Mumbai</div>
              <div className="theaters-location">Kolkata</div>
              <div className="theaters-location">Delhi</div>
              <div className="theaters-location">Chennai</div>
</div>
<div className="theaters-website">Visit Website</div>
              </div>
            </div>
        </div>
        
    )
}