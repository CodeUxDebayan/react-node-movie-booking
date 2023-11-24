import React, { useState } from 'react';
import "./styles/navbar.css";
import Select from 'react-select';
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import {motion } from "framer-motion";
import Modal from "react-modal";
import { Account } from './Account';
Modal.setAppElement("#root");
export function NavBar() {
  const[modalIsOpen, setIsOpen] = useState(false);
  const[onSearchBarFocus, setSearchBarFocus] = useState(false);

  function handleSearchBarFocus(){
    setSearchBarFocus(true);
    console.log(onSearchBarFocus);
  }
  function handleSearchBarBlur(){
    setSearchBarFocus(false);
    console.log(onSearchBarFocus);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    if (location.pathname === "/") {
      initialLocation = 'Home';
   }
   else{ initialLocation = location.pathname.slice(1);}
   setSelectedItem(initialLocation);
  }
  
  const location = useLocation();
  var initialLocation ='';
  if (location.pathname === "/") {
     initialLocation = 'Home';
  }
  else{ initialLocation = location.pathname.slice(1);}
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(initialLocation);
  const [selectedOption, setSelectedOption] = useState(null);
  
  
  let logger = localStorage.getItem('token');
  

 
  

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item);
    if(item === 'Home'){
      navigate('/');
    }
    else{
      if(item !== 'Account'){
    navigate(`/${item}`);
    //change the focus area//
    }
  }
};



const handleSearchButtonClick = () => {
  if (selectedOption) {
    const storedOption = selectedOption.value;
    console.log('Selected option:', storedOption);
  } else {
    console.log('No option selected.');
  }
};

function handleAccountClick(){
    handleItemClick('Account');
    openModal();
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderRadius: '10px',
    display: 'flex',
    width: state.isFocused ? '600px' : '100px',
    height: '10px',
    color: state.isFocused ? 'white' : 'gray',
border: state.isFocused ? 0 : 0,
boxShadow: state.isFocused ? 0 : 0,
'&:hover': {
 border: state.isFocused ? 0 : 0
},
cursor: state.isFocused ? 'text' : 'text',
transition: 'width 0.3s ease',
  }),
  singleValue: (provided, state) => ({
      ...provided,
      color:'white',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    menu: (provided, state) => ({
      ...provided,
      width:'560px',
      zIndex: 100,
      backgroundColor: state.isFocused ? 'red' : 'black',
      display: state.selectProps.inputValue ? 'block' : 'none',
    }),
    input: (provided, state) => ({
      ...provided,
      color:'white',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'white',
      backgroundColor: state.isSelected ? 'red' : 'black' ,
      width: '560px',
    }),


};

//fetch the options from database//

const options = [
  { value: "blues", label: "Oppenheimer" },
  { value: "rock", label: "Intersteller" },
  { value: "jazz", label: "LaLa Laand" },
  { value: "orchestra", label: "Orchestra" }
];

  return (
      <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,  }}
      transition={{ duration: 2 }}  className="navbar-container">
          <div className="navbar">
          <div className="logo" onClick={() => handleItemClick('Home')} >Cineplaza</div>
          <div className='nav-links'>
        {onSearchBarFocus ?(<div></div>):
        (<ul >
          <li
            className={selectedItem === 'Home' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('Home')}
          >
            Home
          </li>
          <li
            className={selectedItem === 'Showtimes' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('Showtimes')}
          >
            Showtimes
          </li>
          <li
            className={selectedItem === 'Theaters' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('Theaters')}
          >
            Theaters
          </li>
          <li
            className={selectedItem === 'AboutUs' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('AboutUs')}
          >
            AboutUs
          </li>
          <li
            className={selectedItem === 'Contact' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('Contact')}
          >
            Contact
          </li>
          { logger ?
          (<li
            className={selectedItem === 'Account' ? 'selected-navlink' : ''}
            onClick={() => handleAccountClick() }
          >
            Account
            
          </li>)
          :
          (<li
            className={selectedItem === 'Login' ? 'selected-navlink' : ''}
            onClick={() => handleItemClick('Login')}
          >
            Login
          </li>)
          }
          
        </ul>)} 
        <div className={onSearchBarFocus ? "search-FOCUSSED" :"search"}>
          <button className='search-button' onClick={()=> handleItemClick('Search') && handleSearchButtonClick()}>
            <FaSearch className={selectedItem === 'Search' ? "search-icon-selected" : "search-icon"} />
          </button>
          <Select onFocus={handleSearchBarFocus} onBlur={handleSearchBarBlur} styles={customStyles} value={selectedOption} onChange={setSelectedOption} isClearable placeholder="Search" className='select-search'  options={options}   />
        </div>
        </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" }}}> 
            
        <Account closeModal={closeModal} />
            
            
            </Modal>
      </motion.div>
  );

}
