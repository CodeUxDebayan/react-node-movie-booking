import React, { useState } from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {motion} from 'framer-motion';
import "./styles/footer.css"
export function Footer(){
    const [selected, setSelected] = useState('Home');

    const handleclick = (item) => {
        setSelected('item');
    };
    return(
          <motion.div initial={{ opacity: 0.7}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }} className="footer">
           <div className="logoContainer">
            <div className="logoF">Cineplaza</div>
            <div className="address">123 ABC Street,<br/>
                                     Salt Lake City,<br/>
                                     Kolkata, West Bengal,<br/>
                                     India - 700091
                                     </div>

           </div>
           <div className="nav-container">
            <div style={{fontSize: '30px', fontWeight: 'bold'}} className={selected === 'HomeF' ? 'selected' : ''} onClick={() => handleclick('HomeF')}>Home</div>
            <div className={selected === 'Showtimes' ? 'selected' : ''} onClick={() => handleclick('Showtimes')}>Showtimes</div>
            <div className={selected === 'Theatres' ? 'selected' : ''} onClick={() => handleclick('Theatres')}>Theatres</div>
           </div>
           <div className="about-container">
            <div className="about">About Us</div>
            <div className="ab-out">About Cineplaza</div>
            <div className="privacy">Privacy Policy</div>
            <div className="terms">Terms & Conditions</div>
            </div>
            <div className="social-container">
                <div className="follow">Follow US</div>
            <div className="social-icon">
            <BsFacebook className='icoon'/>
            &nbsp; &nbsp;
            Facebook
            </div>
            <div className="social-icon">
            <BsInstagram className='icoon'/>
            &nbsp; &nbsp; Instagram
            </div>
            <div className="social-icon">
            <BsTwitter className='icoon'/>
            &nbsp; &nbsp;
            X
            </div>
            </div>
            <div className="contact-container">
                <div className="contact">Contact</div>
                <div className="email">Email : support@cineplaza.xyz</div>
                <div className="phone">Phone : 1234567890</div>
                <div className="website">Website : www.cineplaza.xyz/contact</div>
            </div>
            </motion.div>
    );
}