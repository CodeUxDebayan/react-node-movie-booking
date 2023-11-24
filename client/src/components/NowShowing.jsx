import "./styles/nowShowing.css";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
import React, { useState } from "react";
import { motion } from "framer-motion";
Modal.setAppElement("#root");

export function NowShowing() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

  

 
  return (
    <motion.div
    initial={{ opacity: 0.7, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
      <div className="nowShowing">
        <div className="showing">Now Showing</div>
        <div className="viewallShow">View All</div>
      </div>
      <div className="CardContainer">
        <div className="cardShowing">
          <div className="img" onClick={openModal} onMouseLeave={closeModal}>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="card-for-show" style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" }}}>
  <div className="modalCard">
  <div className="modalcontainer">
    <div className="modalimage"></div>
    <div className="modalTitle-container">
      <div className="modalTitle">Spiderman: Into the Spider Verse</div>
      <div className="modalYear">2023 - SciFi - 2h30m</div>
      <div className="modalDescription">
        Teen Miles Morales becomes the Spider-Man of his universe and must join
        with five spider-powered individuals from other dimensions to stop a
        threat for all realities.
      </div>
      <div >
        <button className="modalTicketbutton">Get Ticket</button>
      </div>
    </div>
    <div className="cross" onMouseEnter={closeModal}>CLOSE</div>
  </div>
</div>
            </Modal>
          </div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonShowing">Get Ticket</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        
        
        <div className="cardShowing">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonShowing">Get Ticket</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        <div className="cardShowing">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonShowing">Get Ticket</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        <div className="cardShowing">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonShowing">Get Ticket</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}
