import React from 'react';
import './whychoose.css';

const WhyChoose = () => {
  return (
    <div className='container-fluid'>
      <div className='dotted-overlay'></div>
      <div className='row'>
        <div className='Container'>
        <div className='col-md-6 leftside-whychoose'>
          <h2>WHY CHOOSE US ?</h2>
          <p>
            Our certified therapist will provide a comprehensive evaluation, tailor made
            treatment plans, and home programs for therapy techniques. We provide one on
            one treatment, continual support and guidance for family members and care givers.
            We will make recommendations for home and school when requested.
          </p>
        </div>
        </div>
        <div className='col-md-6 rightside-whychoose'>
            <img src='https://shodair.org/wp-content/uploads/2023/07/woman-doing-speech-therapy-with-little-blonde-boy-scaled.jpg'>
            </img>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
