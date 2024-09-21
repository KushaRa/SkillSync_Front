import React from 'react';
import './Hero.css';
import NavBar from '../NavBar/Lognavbar';
import { Link } from 'react-router-dom';


export const Hero = () => {
    return (
          <div className="hero-left">
            <div className='lnavbar-container'>
            <NavBar/>
            </div>
            <h1>Simplify Your Internship Search with InternX.</h1>
            <p>InternX revolutionizes the internship search process in the dynamic IT industry.
                Discover your perfect internship effortlessly, while IT companies find top talent seamlessly.
                Join InternX today and unlock boundless opportunities.</p>
            <div className='heroLoginbtn'>
              <Link to="/selectuser"><button type="button">Sign up</button></Link>
            </div>
    </div>
  );
};
