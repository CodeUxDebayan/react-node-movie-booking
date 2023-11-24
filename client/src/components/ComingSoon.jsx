import "./styles/comingSoon.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <motion.div
    initial={{ opacity: 0.7, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
      <div
       className="comingSoon">
        <div className="coming">Coming soon</div>
        <div className="viewallComing">View All</div>
      </div>
      <div className="CardContainer">
        <div className="cardSoon">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonLLearnmore">Learn More</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        <div className="cardSoon">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonLLearnmore">Learn More</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        <div className="cardSoon">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonLLearnmore">Learn More</button>
            <div className="ratingIcon">
              <FaStar className="star" />
              <div>5.0</div>
            </div>
          </div>
        </div>
        <div className="cardSoon">
          <div className="img"></div>
          <div className="cardtitle">Spiderman : into the spider verse</div>
          <div className="year">2023 - Sci-Fi - 2h30m</div>
          <div className="rating">
            <button className="buttonLLearnmore">Learn More</button>
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
