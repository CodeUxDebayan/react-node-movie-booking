import React from 'react';
import {NavBar} from '../components/NavBar.jsx';
import {Footer} from '../components/Footer.jsx';
import { motion, useScroll, useSpring } from "framer-motion";
import "./Main.css";
import { Outlet } from 'react-router-dom';

export const Main = ({ children }) => {
  const { scrollYProgress } = useScroll();
  localStorage.removeItem('token', '123456789');
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
    return (
        <div>
            <NavBar/>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Outlet/>
            <Footer/>
        </div>
    );
}