import React, { useState } from "react";
import Select from "react-select";
import { MdChair } from "react-icons/md";
import { LuArmchair } from "react-icons/lu";
import "./styles/bookticket.css";
import {ImCross} from "react-icons/im";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Bookticket({
  selectedHall,
  selectedDate,
  dateOptions,
  selectedShowTime,
  closeModal,
}) {
  const [bookticketHall, setBookticketHall] = useState(selectedHall);
  const [bookticketDate, setBookticketDate] = useState(selectedDate);
  const [bookticketShowTime, setBookticketShowTime] = useState(selectedShowTime);
  const [selectedHallValue, setSelectedHallValue] = useState(null);
  const showToast = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  console.log(dateOptions);
  function Modal(){
    closeModal();
  }
  const handleBookticketHallChange = (Hall) => {
    setSelectedHallValue(Hall.value);
    setBookticketHall(Hall);
  };
  const handleBookticketDateChange = (Date) => {
    
    setBookticketDate(Date);
  };
  const handleBookticketShowTimeChange = (ShowTime) => {
    setBookticketShowTime(ShowTime);
  };
  console.log(bookticketHall, bookticketDate, bookticketShowTime);
  
  const handleConfirm = () => {
    
    const bookTicketUrl = `/bookticket?movieId=${selectedMovieId}&hall=${bookticketHall}&date=${bookticketDate}&showTime=${bookticketShowTime}`;
    showToast('🤖 Request Sent!');
    console.log(bookTicketUrl);
    
  };

  const movies = [
    {
      movieId: 1,
      movieName: "Interstellar",
      description: "A science fiction film about space exploration.",
      imgUrl: "https://example.com/interstellar.jpg",
      yearDuration: "2014 - Sci-Fi - 2h49m"
    },
    {
      movieId: 2,
      movieName: "Inception",
      description: "A mind-bending heist thriller set within dreams.",
      imgUrl: "https://example.com/inception.jpg",
      yearDuration: "2010 - Sci-Fi - 2h28m"
    },
    {
      movieId: 3,
      movieName: "The Matrix",
      description: "A cyberpunk action film exploring reality and simulation.",
      imgUrl: "https://example.com/matrix.jpg",
      yearDuration: "1999 - Sci-Fi - 2h16m"
    }
    // Add more movie objects as needed
  ];

  const hallsData = 
    [
      { value: 1, label: 'Hall KL1' },
      { value: 2, label: 'Hall KL2' },
   
    
      { value: 3, label: 'Hall PN1' },
      { value: 4, label: 'Hall PN2' },
   
      { value: 5, label: 'Hall MB1' },
    ];


    const showTimesData = {
      1: ["10:00 AM", "2:00 PM", "6:00 PM"],
      2: ["11:30 AM", "3:30 PM", "7:30 PM"],
      3: ["9:00 AM", "1:00 PM", "5:00 PM"],
      4: ["10:00 AM", "2:00 PM", "6:00 PM"],
      5: ["11:30 AM", "3:30 PM", "7:30 PM"],
    };
  
  //if prop not being used
  const selectedMovieId = 2;
  const selectedMovie = movies.find(
    (movie) => movie.movieId === selectedMovieId
  );

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      borderRadius: "10px",
      display: "flex",
      width: "300px",
      height: "20px",
      color: state.isFocused ? "white" : "gray",
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0
      },
      cursor: state.isFocused ? "text" : "text"
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white"
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && "rotate(180deg)"
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "300px",
      zIndex: 100,
      backgroundColor: state.isFocused ? 'red' : 'black',
      
    }),
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",  // IE and Edge
      "scrollbar-width": "none",  // Firefox
    }),
  
  
    input: (provided, state) => ({
      ...provided,
      color: "white"
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "white",
      backgroundColor: state.isSelected ? "red" : "black",
    })
  };

  const Seat = ({ seat, onSeatClick }) => {
    const seatStyles = {
      width: "30px",
      height: "30px",
      cursor: "pointer"
    };

    const getSeatIcon = () => {
      switch (seat.status) {
        case "available":
          return <LuArmchair color="green" size={30} />;
        case "selected":
          return <MdChair color="red" size={30} />;
        case "unavailable":
          return <MdChair color="gray" size={30} />;
        default:
          return null;
      }
    };

    return (
      <div style={seatStyles} onClick={() => onSeatClick(seat)}>
        {getSeatIcon()}
      </div>
    );
  };
//fetched from db
  const rows = 8;
  const columns = 12;
  const pricePerSeat = 240;
  const initialSeats = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, colIndex) => ({
      id: `${rowIndex}-${colIndex}`,
      status: "available"
    }))
  );

  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (clickedSeat) => {
    const updatedSeats = seats.map((row) =>
      row.map((seat) =>
        seat.id === clickedSeat.id
          ? {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected"
            }
          : seat
      )
    );
    setSeats(updatedSeats);
  };

  const selectedSeats = seats
    .flat()
    .filter((seat) => seat.status === "selected");
  const totalPrice = selectedSeats.length * pricePerSeat;
 
  const dates = dateOptions.map((date) => `${date.dayOfMonth} ${date.dayOfWeek}`);
  const convertedDateOptions = dates.map(date => {
    // eslint-disable-next-line no-unused-vars
    const [value, label] = date.split(' ');
    return { value: parseInt(value, 10), label: date };
  });
  
  
  const showTimes = selectedHall ? showTimesData[selectedHallValue] : [];

  const convertedTimeOptions = showTimes ? showTimes.map(time => {
    // eslint-disable-next-line no-unused-vars
    const [value, label] = time.split(' ');
    return { value: parseInt(value, 10), label: time };
  }) : [];


  return (
    <div className="bookticket">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bookticket-hall-time-date">
        <Select
        className="bookticket-hall"
          styles={customStyles}
          value={bookticketHall}
          onChange={handleBookticketHallChange}
          options={hallsData}
          isClearable
          placeholder={bookticketHall}
        />

        <Select
        className="bookticket-hall"
          styles={customStyles}
          value={bookticketDate}
          onChange={handleBookticketDateChange}
          options={convertedDateOptions}
          isClearable
          placeholder={bookticketDate}
        />

        <Select
        className="bookticket-hall"
          styles={customStyles}
          value={bookticketShowTime}
          onChange={handleBookticketShowTimeChange}
          options={convertedTimeOptions}
          isClearable
          placeholder={bookticketShowTime}
        />
        <div className="bookticket-close" onClick={Modal}><ImCross/></div>
      </div>
      <div className="bookticket-movie-seats-container">
        <div className="bookticket-movie-image"></div>
        <div className="bookticket-movie-title-container">
          <div className="bookticket-movie-title">
            {selectedMovie.movieName}
          </div>
          <div className="bookticket-movie-description">
            {selectedMovie.description}
          </div>
        </div>
        
          <div className="bookticket-movie-seat"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
            }}
          >
            {seats.map((row) =>
              row.map((seat) => (
                <Seat 
                 key={seat.id} seat={seat} onSeatClick={handleSeatClick} />
              ))
            )}
          </div>
      </div>
      <div className="bookticket-bottom-list">
        <div>{typeof bookticketHall === 'object' ? bookticketHall.label : bookticketHall}</div>
        <div>{typeof bookticketDate === 'object' ? bookticketDate.label : bookticketDate}</div>
        <div>{typeof bookticketShowTime === 'object' ? bookticketShowTime.label : bookticketShowTime}</div>
        <div>{selectedSeats.length} X</div>
        <div>Rs {totalPrice}</div>
        <div className="bookticket-confirm" onClick={handleConfirm}>
          Confirm
        </div>
      </div>
      
    </div>
  );
}
