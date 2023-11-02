import React from 'react';
import Slider from './Demos2/Slider'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import team01 from "../component/assets/kp.jpg"
import team02 from "../component/assets/kp2.webp" // requires a loader

import "./Demo.css";

import 'slick-carousel/slick/slick-theme.css';
const teamMembers = [
    {
        imgUrl: team01,
        name: 'Principal',
        position: 'Name:Dr.Parth Shah',
        contact : 'Contact:+91 7046301682'
    },

    {
        imgUrl: team02,
        name: 'Vice Principal',
        position: 'Name:Aayush Shah',
        contact : 'Contact:+91 7045016832'
    },

   
]
function Demo2() {
      
  return (
    <>
    <section className="container2">
    <div className="container2">
        <h3>Knowledge High School</h3>
      </div>
    </section>
    
      <Slider />

       

        <section className="home" id="home">
        <h3>Information</h3>

             <li><b>Name : Knowledge High School</b> </li>
             <li><b>Address : Near Vrindavan Mandir opposite of Bank</b> </li>
             <li><b>City : Nadiad</b> </li>
             <li><b>Distict : Kheda,387001</b> </li>
             <li><b>State : Gujarat</b> </li>
             <li><b>Medium : Gujarati</b> </li>
             <li><b>Contact-Number : +917046301682</b> </li>
             <li><b>Class : 11th-12th (Science)</b> </li>
                      </section>
                            <section className="home" id="home">
                <h3>Class Information</h3>

                    
                    <li><b>Welcome to our school, where we offer comprehensive 11th and 12th-grade science programs. Our institution is committed to providing a nurturing and dynamic learning environment that empowers students to excel academically and personally. Our science department is equipped with state-of-the-art laboratories, expert faculty, and a wide range of scientific disciplines.</b></li>
                      <li><b> We offer a diverse curriculum, extensive research opportunities, and a focus on building a strong foundation in science education. Our dedicated staff and cutting-edge facilities prepare students for future academic and career success. Explore our website for more details about our science programs and the exciting educational journey that awaits</b> </li>
                    
                    <li><b>Fees : 70,000</b> </li>  
                    <div className="image-container">
          <img
            className="department-image" // Add a CSS class name
            src="k1.webp" // Replace with the actual path to your primary department image
            alt="Primary Department Image 1"
          />
          <img
            className="department-image"
            src="k2.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="k3.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 3"
          />
        </div>    
                            </section>
                            <section className="home" id="home">
                <h3>Our Result:</h3>

                    
                    <div className="image-container">
          <img
            className="department-image" // Add a CSS class name
            src="k-1.jpg" // Replace with the actual path to your primary department image
            alt="Secondary Department Image 1"
          />
          <img
            className="department-image"
            src="k-2.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="k-4.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 3"
          />
        </div>               
                            </section>
                            <h2>School Administartor:</h2>
                            <section className='our__team'> 
                                    
            <div className='container'>
                
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                    <p className='description'>{item.contact}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>  
        <section className="events">
        <h2>Events:</h2>
        <div className="image-container">
            
          <img
            className="department-image" // Add a CSS class name
            src="ev.jpg" // Replace with the actual path to your primary department image
            alt="Secondary Department Image 1"
          />
          <img
            className="department-image"
            src="ev2.jpeg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="ev3.jpeg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 3"
          />
          <img
            className="department-image"
            src="e4.jpeg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 3"
          />
        </div>               
            </section>   
                        
            
        
    </>
  );
}

export default Demo2;