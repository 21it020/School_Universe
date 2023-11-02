
import React from 'react';

const headerStyle = {
  backgroundColor: '#007ACC',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold',
};

const searchBarStyle = {
  display: 'flex',
};

const searchInputStyle = {
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const searchButtonStyle = {
  backgroundColor: '#007ACC',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  marginLeft: '5px',
  cursor: 'pointer',
};

const contentStyle = {
  padding: '20px',
};

const footerStyle = {
  backgroundColor: '#007ACC',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const contactInfoStyle = {
  fontSize: '16px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'underline',
};

function info() {
  return (
    <>
       <div className="App">
      <header style={headerStyle}>
        <div style={logoStyle}>School Universe</div>
        <nav style={navStyle}>
          <ul>
            <li style={navItemStyle}><a href="/" style={navLinkStyle}>Home</a></li>
            <li style={navItemStyle}><a href="/about" style={navLinkStyle}>About Us</a></li>
            <li style={navItemStyle}><a href="/contact" style={navLinkStyle}>Contact Us</a></li>
          </ul>
        </nav>
        <div style={searchBarStyle}>
          <input type="text" placeholder="Search..." style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      </header>

      <section style={contentStyle} className="content">
        <h1>Welcome to School Universe</h1>
        <p>Some information about our website.</p>
        <p>Our team information.</p>
        <p>Education-related blogs or news.</p>
      </section>

      <footer style={footerStyle}>
        <div style={logoStyle}>School Universe</div>
        <div style={contactInfoStyle}>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: info@schooluniverse.com</p>
          <p>Address: 123 Main St, City, Country</p>
          <p>Location: <a href="#" style={linkStyle}>Google Maps Link</a></p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default info;
