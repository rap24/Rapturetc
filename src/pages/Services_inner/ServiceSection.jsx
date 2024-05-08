import React from 'react';
import './ServiceSection.css';

const ServiceSection = () => {


  return (
    <section className="pt-5 py-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 text-center" style={{ color: '#3d878a', fontWeight: 'bold' }}>-  Our Services  -</h2>
            <p className="text-secondary mb-2 text-center">We provide best service in speech & language therapy sector.</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="card-container container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <div className="card">
              <img src="/serviceimg1.webp" 
              className="card-img-top" alt="Occupational Therapy with Sensory Integration - Rapture Therapy Centre" />
              <div className="card-body">
                <h6 className="card-title text-center">Occupational Therapy with Sensory Integration</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="/serviceimg2.jpg" 
              className="card-img-top" alt="Rapture Therapy Centre - Best Speech Therapy Centre in Banglore , Kerala" />
              <div className="card-body">
                <h6 className="card-title text-center">Speech Language & Communication Therapy</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="serviceimg3.jpg" 
              className="card-img-top" alt="Group Therapy , Speech Therapy - Rapture Therapy Centre - Best Speech Therapy" />
              <div className="card-body">
                <h6 className="card-title text-center">Interaction / Group Therapy</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="serviceimg4.jpg" 
              className="card-img-top" alt="Rapture Therapy Centre - Virtual / Online Therapy" />
              <div className="card-body">
                <h6 className="card-title text-center">Virtual / Online Therapy</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
