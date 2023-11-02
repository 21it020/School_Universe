// Home.js
import React from 'react';
import Slider from './Slider'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import 'slick-carousel/slick/slick-theme.css';

function Home() {
      
  return (
    <>
    
      <Slider />

        <br/>
        <section className="home" id="home">
            <h2>What is School Universe?</h2>

             <li><b> School Universe is a dedicated online platform that serves as a centralized hub for accessing and exploring detailed information about various educational institutions. It is your ultimate resource for school-related information, offering comprehensive profiles, user-generated reviews, admission details, and educational resources.</b> </li>
              <li><b>Whether you're a parent seeking the best school for your child, a student looking to enroll in a specific institution, or an educator interested in gaining insights into different schools, School Universe is your trusted source for all things related to education. With an extensive database of schools, a user-friendly interface, and a community of education enthusiasts, School Universe simplifies the process of discovering the perfect educational fit for your needs.</b></li>
        </section>
        
    </>
  );
}

export default Home;
