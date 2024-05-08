import React from 'react';
import './Specialized.css'; // Import the external CSS file

const Specialized = () => {
  return (
    <div className="container-specialized">
     <div className='containersp333 Container'>
     <div className="row">
        <div className="col leftside-specialized">
          <h3>Our speech therapists are experienced and skilled in following programs:</h3>
          <br></br>
          <ul>
            <li>Oral-motor Therapy</li>
            <p style={{fontSize:'12px'}}>(To improve Oral phase of feeding)</p>
            <li>Talk-Tools level 1</li>
          </ul>
        </div>
        <div className="col rightside-specialized">
          <img src="specialized.jpg" 
          alt="Rapture Therapy Center - oral motor therapy" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default Specialized;
