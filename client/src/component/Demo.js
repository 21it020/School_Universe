import React from 'react';
import Slider from './Demos/Slider'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import team01 from "../component/assets/p.jpg"
import team02 from "../component/assets/vp.jpg" // requires a loader

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
function Demo() {
      
  return (
    <>
    <section className="container2">
    <div className="container2">
        <h3>Shree Saraswati Vidhyalay</h3>
      </div>
    </section>
    
      <Slider />

       

        <section className="home" id="home">
        <h3>Information</h3>

             <li><b>Name : Shree Sarasvati Vidhyalay</b> </li>
             <li><b>Address : Near Vrindavan Mandir opposite of Bank</b> </li>
             <li><b>City : Umreth</b> </li>
             <li><b>Distict : Anand,388220</b> </li>
             <li><b>State : Gujarat</b> </li>
             <li><b>Medium : Gujarati</b> </li>
             <li><b>Contact-Number : +917046301682</b> </li>
             <li><b>Class : 1 to 10</b> </li>
                      </section>
                            <section className="home" id="home">
                <h3>Primary Department(Class 1-8) Information</h3>

                    
                    <li><b>Welcome to Saraswati Vidyalay school, where young minds grow and thrive. At our institution, we offer a well-rounded education from classes 1 to 8, fostering academic excellence, character development, and creativity.</b> </li>
                        <li><b>Our dedicated staff, state-of-the-art facilities, and vibrant student life provide a nurturing environment for young learners. We're committed to creating a dynamic learning experience that prepares students for a bright future. Explore our website for more information about our curriculum, facilities, and the exciting journey that awaits your child</b> </li>
                    <li><b>Fees : 4000-7000</b> </li>  
                    <div className="image-container">
          <img
            className="department-image" // Add a CSS class name
            src="1.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 1"
          />
          <img
            className="department-image"
            src="2.jpg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="3.webp" // Replace with the actual path to your primary department image
            alt="Primary Department Image 3"
          />
        </div>    
                            </section>
                            <section className="home" id="home">
                <h3>Seconday Department(Class 9-10) Information</h3>

                    
                    <li><b>School offering a nurturing and dynamic learning environment for students in classes 9 and 10. At our institution, we are dedicated to providing a comprehensive education that empowers students to excel academically and personally. Our state-of-the-art facilities, including modern classrooms, well-equipped laboratories, expansive libraries, and sports amenities, create an ideal backdrop for holistic development. </b> </li>
                        <li><b>We offer a diverse range of subjects, expert teaching, and a focus on character building, ensuring that students are well-prepared for their academic journey. Explore our website to learn more about our curriculum, facilities, and the vibrant educational experience we provide for your child's growth and success </b> </li>
                    <li><b>Fees : 10,000(class-9) & 13,000(class-10)</b> </li>    
                    <div className="image-container">
          <img
            className="department-image" // Add a CSS class name
            src="1-1.jpeg" // Replace with the actual path to your primary department image
            alt="Secondary Department Image 1"
          />
          <img
            className="department-image"
            src="2.2.webp" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="3.3.webp" // Replace with the actual path to your primary department image
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
            src="e.jpg" // Replace with the actual path to your primary department image
            alt="Secondary Department Image 1"
          />
          <img
            className="department-image"
            src="e2.jpeg" // Replace with the actual path to your primary department image
            alt="Primary Department Image 2"
          />
          <img
            className="department-image"
            src="e3.jpeg" // Replace with the actual path to your primary department image
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

export default Demo;