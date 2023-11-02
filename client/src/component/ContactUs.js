
import React from 'react';

function ContactUs() {
  return (
    <div>
      <header>
      </header>
      <main>
      <h2>Contact Us</h2>
        <section className="contact">
          <div className="contact-details">
            
            <p>
              Phone Number: +91 1234567809<br />
              Email: contact@schooluniverse.com
            </p>
          </div>
          <br></br>
          </section>
          <h2>Address</h2>
          <section className = "address">
          <div className="address-our">

            <p>
            139, CHARUSAT Campus, Highway, Off, Nadiad - Petlad Rd, Changa, Gujarat 388421
            </p>
          </div>
          <br></br>
        </section>
        <section className="location">
          <h2>Our Location</h2>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-71.123456!3d42.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE2JzU4LjYiTiA3McKwMTYnMDguMyJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
