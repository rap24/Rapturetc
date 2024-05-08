import React from 'react';
import './GMap.css';

const GMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.806653653059!2d77.51443097507563!3d12.920144987390529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzEyLjUiTiA3N8KwMzEnMDEuMiJF!5e0!3m2!1sen!2ssa!4v1715106427821!5m2!1sen!2ssa"
        width="100%"
        height="450"
        allowFullScreen=""
        title="Google Map"
        style={{ border: '0' }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GMap;
