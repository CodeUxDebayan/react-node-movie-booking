import {BsChatQuoteFill} from 'react-icons/bs';
import "./AboutUs.css";

export function AboutUs() {
   
    return (
        <div className="aboutUs">
            <div className="about-banner">
                <div className="about-bg">
                    <div className="title-about" >Cineplaza</div>
            </div>
        
        </div>
        <div className="about-content">
        <div className="about-title">
        About Us
        </div>
        <div className="about-oth-text">
        Contact
        </div>    
        </div>
        <div className="about-welcome-container">
        <div className="welcome-about">
        Welcome To CINEPLAZA
        </div>
        <div className="about-welcome-text">
        Your one-stop destination for an unparalleled cinematic experience! We are more than just a movie booking website. We are your gateway to the world of entertainment.  At CINEPLAZA, we are passionate about connecting you with the magic of the silver screen, making your movie-going experience extraordinary.
        </div>
        </div>
        <div className="about-welcome-bg">
        </div>
        <div className="about-our-mission">
            <div className="about-mission-title">
            Our Mission
            </div>
            <div className="about-mission-text">
            CINEPLAZA is more than just a movie booking website; we're a platform built on the foundation of our shared love for cinema. Our mission is to connect you with the power of storytelling, to create moments of awe, laughter, and emotion in your life. We believe in the transformative power of film and are dedicated to providing you with the ultimate cinematic journey.
            </div>
        </div>
        <div className="about-our-mission-bg">
        </div>
        <div className="about-our-story">
            <div className="about-story-title">Our Story</div>
            <div className="about-story-text">CINEPLAZA was founded with a vision to revolutionize the way you enjoy movies. With a team of dedicated film enthusiasts, tech wizards, and customer service aficionados, we set out to create a platform that seamlessly blends the art of filmmaking with the convenience of modern technology. Our journey began as a small startup with a big dream: to empower movie lovers to discover, book, and experience films in a way that suits their unique preferences.</div>
        </div>
        <div className="about-our-story-bg"></div>
        <div className="about-end-small-text">Join us at CINEPLAZA, where every movie night becomes an unforgettable adventure. Your love for cinema is our driving force, and we are committed to making each visit to the theater a memorable experience.
</div>
<div className="about-end-big-text">Lights, camera, action - your cinematic journey begins here at CINEPLAZA!
</div>
<div className="about-joinus">
<div className="about-joinus-text">Let's Fill The Screens<br/> 
with Magic, <span>Together!</span></div>
<div className="about-joinus-btn"> Get In Touch <BsChatQuoteFill className='button-icon-about-get'/> </div>
</div>
        </div>
    )
}