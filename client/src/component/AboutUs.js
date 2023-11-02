
import React from 'react';
import Team from './Team';

function AboutUs() {
  return (
    <div>
      <header>
      </header>
      <main>
      <h2>About Us</h2>
        <section className="about">
          
          <div className ="aboutus"> 
            <li><b> School Universe is a dedicated online platform that serves as a centralized hub for accessing and exploring detailed information about various educational institutions. It is your ultimate resource for school-related information, offering comprehensive profiles, user-generated reviews, admission details, and educational resources.</b> </li>
              <li><b>Whether you're a parent seeking the best school for your child, a student looking to enroll in a specific institution, or an educator interested in gaining insights into different schools, School Universe is your trusted source for all things related to education. With an extensive database of schools, a user-friendly interface, and a community of education enthusiasts, School Universe simplifies the process of discovering the perfect educational fit for your needs.</b></li>
       </div>
       
           </section>
        {/* <section className="team">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="aayush.jpg" alt="Team Member 1" />
            <h3>Aayush Parmar</h3>
            <p>ABC</p>
            <p>Education: XYZ</p>
            <p>Contact: aayush.parmar@schooluniverse.com</p>
          </div>
          <div className="team-member">
            <img src="saral.jpg" alt="Team Member 2" />
            <h3>Saral Chauhan</h3>
            <p>ABC</p>
            <p>Education: XYZ</p>
            <p>Contact: saral.chauhan@schooluniverse.com</p>
          </div>
        </section> */}
          
            <h2>Our Team:</h2>
        <Team />
      </main>
    </div>
  );
}

export default AboutUs;
