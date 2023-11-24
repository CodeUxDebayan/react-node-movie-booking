import {MdOutlineNoAccounts} from "react-icons/md";
import {HiTicket} from "react-icons/hi2";
import {RiSettings3Fill} from "react-icons/ri";
import {BiSolidDiscount} from "react-icons/bi";
import {FaHandsHelping } from "react-icons/fa";
import {IoFastFoodSharp} from "react-icons/io5";
import {MdOutlineLocalShipping} from "react-icons/md";
import {FaTent} from "react-icons/fa6";
import "./styles/account.css";

export const Account = ({closeModal}) => {
    function Modal(){
         closeModal();
    }
    
    return (
        <div className="account">
        <div className="account-top">
        <div className="account-top-title">Account</div>
        <div onClick={Modal}  className="nested-top-icon-account">
        <MdOutlineNoAccounts className="nested-top-icon-account-icon" style={{fill: "#ff0000"}}/>
        <div>Close</div>
        </div>   
        </div>
        <div className="account-options">
        <div className="your-orders">
        <HiTicket className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Your Orders</div>
        <div className="your-orders-subtitle">View all your bookings</div>
        </div>    
        </div>
        <div className="your-orders">
        <RiSettings3Fill className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Account <span>and settings</span></div>
        <div className="your-orders-subtitle">Edit profile,Location,Payments</div>
        </div>    
        </div>  
        <div className="your-orders">
        <BiSolidDiscount className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Offers, rewards</div>
        <div className="your-orders-subtitle">& more</div>
        </div>    
        </div> 
        <div className="your-orders">
        <FaHandsHelping className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Help and Support</div>
        <div className="your-orders-subtitle">Do you need any assistance?</div>
        </div>    
        </div>
        <div className="your-orders">
        <IoFastFoodSharp className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Food and Beverages</div>
        <div className="your-orders-subtitle">Fill your guts while entertainment!</div>
        </div>    
        </div>
        <div className="your-orders">
        <MdOutlineLocalShipping className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Gift Crads</div>
        <div className="your-orders-subtitle">Gift or Accept cards</div>
        </div>    
        </div>
        <div className="your-orders">
        <FaTent className="your-orders-icon" style={{fill: "#ff0000"}}/>
        <div className="your-orders-text"><div className="your-orders-title">Join Us</div>
        <div className="your-orders-subtitle">Got a Hall to list? Join us now</div>
        </div>    
        </div>
        </div>
        <div className="accounts-bottom">
        CINEPLAZA
        <div className="line-accounts"></div>    
        </div>
        </div>
    )
}