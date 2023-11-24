import "./styles/ad.css";
import { motion } from "framer-motion";
export function Advertisement() {
    return (
      <motion.div
      initial={ {opacity: 0.7, y: 50}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: .5}} className="advertisementBg">
        <div className="advertisement-container">
          <motion.div initial={ {opacity: 0.7, x: -50}}
      whileInView={{ opacity: 1, x: 0}}
      transition={{ duration: .5}} className="advertisement">
            <div className="advertisementtxt">
              Buy One Large Popcorn + One Pepsi
            </div>
            <button className="Advertisementbutton">Up to 20% off</button>
          </motion.div>
        </div>
    </motion.div>
)} 