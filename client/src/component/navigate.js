import React from 'react';
import { Link } from "react-router-dom";
function navigate(){
return (
    <>
        <nav className='nav'>
          <li><Link to='/studInfo'>Info</Link></li>
        </nav>
    </>
  );
}
export default navigate;