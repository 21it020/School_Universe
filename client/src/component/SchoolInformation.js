import React from 'react';
import './Schoolinfo.css';
import { Link } from 'react-router-dom'; 

function SchoolInformation() {
  
  return (
    <>
      <div className="container2">
        <h3>School Information</h3>
      </div>
      <section className="schoolinfo">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>School Name</th>
                <th>City</th>
                <th>State</th>
                <th>ZipCode</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Saraswati Vidhyalay</td>
                <td>Umreth</td>
                <td>Gujrat</td>
                <td>388220</td>
                <td>
                <Link to="/demo" style={{ color: 'red' }}>Click Here</Link>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Knowledge High School</td>
                <td>Nadiad</td>
                <td>Gujrat</td>
                <td>387001</td>
                <td>
                <Link to="/demo2" style={{ color: 'red' }}>Click Here</Link>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>The Galaxy School</td>
                <td>Rajkot</td>
                <td>Gujrat</td>
                <td>320008</td>
                <td>
                <Link to="/demo" style={{ color: 'red' }}>Click Here</Link>
                </td>
              </tr><tr>
                <td>4.</td>
                <td>Shree Saraswati School</td>
                <td>Surat</td>
                <td>Gujrat</td>
                <td>335009</td>
                <td>
                <Link to="/demo" style={{ color: 'red' }}>Click Here</Link>
                </td>
              </tr><tr>
                <td>5.</td>
                <td>Podar International School</td>
                <td>Vadodara</td>
                <td>Gujrat</td>
                <td>390019</td>
                <td>
                <Link to="/demo" style={{ color: 'red' }}>Click Here</Link>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </section>
      
    </>
  );
}

export default SchoolInformation;
