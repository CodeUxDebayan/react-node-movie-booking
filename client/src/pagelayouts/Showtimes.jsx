import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import "./Showtimes.css"
import {motion} from "framer-motion"

import Modal from "react-modal";
import { Bookticket } from '../components/Bookticket';
Modal.setAppElement("#root");
export function Showtimes({preSelectedMovieID}){
  
  const [selectedHall, setSelectedHall] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShowTime, setSelectedShowTime] = useState(null);
  const [dates , setDates] = useState(null);
  const [isDateLoading, setIsDateLoading] = useState(true);
  const [dateOptions, setDateOptions] = useState([]);
  const [selectedMovieId , setSelectedMovieId] = useState(null);
  const[modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
      // Simulating an API call or any asynchronous operation to fetch dates
    setTimeout(() => {
      const generatedDates = generateDates(6);
      setDates(generatedDates);
      setIsDateLoading(false);
      }, 1000); // Simulate a 1-second delay
                  }, []); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        const generatedDates = generateDates(6);
        setDates(generatedDates);
      }, 24 * 60 * 60 * 1000); 
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      // Load initial date options when the component mounts
      const initialDates = generateDates(6); // Call your function to generate dates
      setDateOptions(initialDates);
    }, []);

    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS
    //FETCH AND UPDATE THE ARRAYS

    const hallsData = {
      '1': [
        { value: 1, label: 'Hall KL1' },
        { value: 2, label: 'Hall KL2' },
      ],
      '2': [
        { value: 3, label: 'Hall PN1' },
        { value: 4, label: 'Hall PN2' },
      ],
      '3': [
        { value: 5, label: 'Hall MB1' },
      ],
    };
    
    const showTimesData = {
      1: ["10:00 AM", "2:00 PM", "6:00 PM"],
      2: ["11:30 AM", "3:30 PM", "7:30 PM"],
      3: ["9:00 AM", "1:00 PM", "5:00 PM"],
      4: ["10:00 AM", "2:00 PM", "6:00 PM"],
      5: ["11:30 AM", "3:30 PM", "7:30 PM"],
    };
    const locations = [
      { value: '1', label: 'Kolkata' },
      { value: '2', label: 'Pune' },
      { value: '3', label: 'Mumbai' },
    ];
    
    const movies = [
      {
        movieId: 1,
        movieName: "Interstellar",
        description: "A science fiction film about space exploration.",
        imgUrl: "https://example.com/interstellar.jpg",
        yearDuration: "2014 - Sci-Fi - 2h49m",
      },
      {
        movieId: 2,
        movieName: "Inception",
        description: "A mind-bending heist thriller set within dreams.",
        imgUrl: "https://example.com/inception.jpg",
        yearDuration: "2010 - Sci-Fi - 2h28m",
      },
      {
        movieId: 3,
        movieName: "The Matrix",
        description: "A cyberpunk action film exploring reality and simulation.",
        imgUrl: "https://example.com/matrix.jpg",
        yearDuration: "1999 - Sci-Fi - 2h16m",
      },
      // Add more movie objects as needed
    ];
    
    const selectedMovie = movies.find(movie => movie.movieId === preSelectedMovieID);
    


    const generateDates = (n) => {
      const today = new Date();
      const futureDates = [];
      for (let i = 0; i <= n; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayOfWeek = date.toLocaleDateString(undefined, { weekday: "short" });
        const dayOfMonth = date.getDate();
        futureDates.push({ dayOfWeek, dayOfMonth });
      }
      return futureDates;
    };
  
    const handleLocationChange = (selectedOption) => {
        setSelectedLocation(selectedOption);
        setSelectedHall(null);
      };
    const handleHallChange = (selectedOption) => {
      setSelectedHall(selectedOption);
    };
    
    const handleDateChange = (selectedOption) => {
      setSelectedDate(selectedOption);
    };
    
    const handleShowTimeChange = (selectedOption) => {
      setSelectedShowTime(selectedOption);
    }

    const handleBookTicket=(movieId) => {
      setSelectedMovieId(movieId);
      openModal();
    }


    
    const selectedHalls = selectedLocation ? hallsData[selectedLocation.value] : [];
    const showTimes = selectedHall ? showTimesData[selectedHall.value] : [];
    

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
          cursor: state.isFocused ? 'text' : 'text',
                                    }),
      singleValue: (provided, state) => ({
          ...provided,
          color:'white',
                                          }),
      dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && "rotate(180deg)",
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

    if(selectedHall || selectedShowTime || selectedMovieId){
    console.log(selectedHall.label, selectedShowTime, selectedMovieId);
    }

    if(selectedDate){
      console.log(`${selectedDate.dayOfWeek} ${selectedDate.dayOfMonth}`);
    }
    
    


  return (
        <div className="showtimes">
            <div className="showtime-select">
                <div className="SHOWTIME-TITLE-venue">
                    <motion.div initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y:0 }}  
                    className="show-header">Showtimes</motion.div>
                    <motion.div initial={{ opacity: 0, y:-50 }} whileInView={{ opacity: 1, y:0 }} 
                    transition={{ duration: 1.5}} className="movie-hall-selector">
                    <FaSearch className="hall-search-icon"/>
                    <Select styles={customStyles} value={selectedLocation} onChange={handleLocationChange} 
                    options={locations} isClearable placeholder="Select a Location"/>
                    </motion.div>
                    </div>
                    <div
                    className="show-dates">
                    {isDateLoading ? (<div></div>) 
                    :(
                         dates.map((date, index) => (
                         <motion.div
                         initial={{ opacity: 0, x:50 }} 
                         whileInView={{ opacity: 1, x:0 }} 
                         className={ date === selectedDate ? "show-day-selected" : "show-day"}
                         onClick={() => handleDateChange(date)}  key={index}>
                         <div>{date.dayOfWeek}</div>
                         <div>{date.dayOfMonth}</div>
                         </motion.div>
                                                     ))
                      )}
                    </div>
                    </div>

                    { selectedMovie ? (
  <div key={selectedMovie.movieId} className="showtime-mov">
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="showtime-mov-box">
      <div className="mov-img"></div>
      <div className="mov-text-container">
        <div className="mov-title">{selectedMovie.movieName}</div>
        <div className="mov-year">{selectedMovie.yearDuration}</div>
        <div className="mov-description">{selectedMovie.description}</div>
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="movie-hall-selector">
          <FaSearch className="hall-search-icon" />
          <Select styles={customStyles} value={selectedHall} onChange={handleHallChange} options={selectedHalls} isClearable placeholder="Select a Movie Hall" />
        </motion.div>
        {selectedHall ? (
          <div className="show-times">
            {showTimes.map((time, index) => (
              <div onClick={() => handleShowTimeChange(time)} key={index} className={selectedShowTime === time ? "mov-time-select-selected" : "mov-time-select"}>
                {time}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <div onClick={() => handleBookTicket(selectedMovie.movieId)} className="showtime-btn-tkt">Confirm Showtime</div>
      </div>
    </motion.div>
  </div>
):(movies.map((movie) => (
                    <div key={movie.movieId} className="showtime-mov">
                    <motion.div initial={{ opacity: 0, y:50 }} whileInView={{ opacity: 1, y:0 }} 
                    transition={{ duration: 1}} className="showtime-mov-box">
                    <div className="mov-img" ></div>
                    <div className="mov-text-container">
                        <div className="mov-title">{movie.movieName}
                        </div>
                        <div className="mov-year">{movie.yearDuration}
                        </div>
                        <div className="mov-description">{movie.description}
                        </div>
                        <motion.div initial={{ opacity: 0, y:-50 }} whileInView={{ opacity: 1, y:0 }} 
                           transition={{ duration: 1.5}} className="movie-hall-selector">
                        <FaSearch className="hall-search-icon"/>
                        <Select styles={customStyles} value={selectedHall} onChange={handleHallChange} 
                          options={selectedHalls} isClearable placeholder="Select a Movie Hall"/>
                        </motion.div>
                        {selectedHall ?(
                        <div className="show-times">
                        {showTimes.map((time, index) => (
                        <div onClick={() => handleShowTimeChange(time)} key={index} className={ selectedShowTime === time ? 
                           "mov-time-select-selected" : "mov-time-select"} >
                          {time}
                        </div>))}
                        </div>):(                    
                        <div></div>
                                )}
                        <div onClick={() => handleBookTicket(movie.movieId)} className="showtime-btn-tkt">Confirm Showtime</div>
                        </div>
                        </motion.div>
            </div>
            )))}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" }}}>

              <Bookticket 
              selectedHall={selectedHall} 
              selectedDate={selectedDate}
              selectedShowTime={selectedShowTime}
              selectedMovieId={selectedMovieId}

              dateOptions={dateOptions}
              
              selectedHalls={selectedHalls}
              closeModal={closeModal}  />
            </Modal>
         </div>
    )
}
