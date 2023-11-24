import "./Contact.css";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";
import YouTube from "./images/youtube.png";
export function Contact() {
    return (
        <div className="contact-us">
        <div className="contact-us-top">
        <div className="contact-us-top-title">Contact Us</div>
        <div className="contact-us-top-text">At CINEPLAZA, we value your feedback, questions, and suggestions. Feel free to get in touch with us anytime, and our dedicated team is here to assist you.</div>
        </div>
        <div className="customer-support">
        <div className="customer-support-title">Customer Support</div>
        <div className="customer-support-text">
            <div>Email : 
                 <span>support@cineplaza.com</span></div>
            <div>Phone :<span>  +91 1234567890</span></div>
            <div>Operating Hours :<span> Mon-Sun, 9:00 AM - 10:00 PM</span></div>
        </div>   
        </div>
        <div className="partnership">
        <div className="partnership-title">Partnership</div>
        <div className="partnership-text">
         <div>Email : 
             <span>partnership@cineplaza.com</span></div>
        <div>Phone :  <span>+91 1234567890</span></div>
        </div>
        </div>
        <div className="contact-us-address">
           <div className="address-title">Address</div> 
       <div className="contact-address-text"> CINEPLAZA Headquarters<br/>
123 Movie Lover's Lane<br/>
Cinecity, CA 90001<br/>
United States    
</div>
        </div>
        <div className="contact-us-social-media">
        <div className="social-media-title">Connect With Us</div>
        <div className="social-media-text">
            <div>Follow us on Facebook  <a href="/"><img src={Facebook} alt="facebook"/></a></div>
            <div>Tweet Us<a href="/"><img src={Twitter} alt="twitter"/>  </a></div>
            <div>Check out our Instagram<a href="/"><img src={Instagram} alt="instagram"/>
             </a></div>
            <div>Subscribe to our YouTube channel  <a href="/"><img src={YouTube} alt="youtube"/></a></div>
        </div>
        </div>
        <div className="contact-us-bottom">
        We're eager to hear from you and make your movie experience even more magical. Don't hesitate to reach out for any assistance or to explore exciting partnership opportunities with CINEPLAZA. Your feedback and inquiries are essential to us!
        </div>
        </div>
    );
}