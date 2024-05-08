import React from 'react';
import './WhatisOcc.css'; // Import the external CSS file
import Consult from './Consult';

const WhatisOcc = () => {
  return (
    <>
      <div className='container pt-5'>
        <div className='row Container'>
          <div className='col-md-6 leftsidewhatocc'>
            {/* Add image in left side */}
            <h2 style={{fontWeight:'bold'}} className='whatisot'> Occupational Therapy</h2>
            <hr></hr>
            <blockquote className='pt-1'>
                Occupational Therapy is a diverse field that addresses the needs of individual across the life span,
                including both pediatric and adult populations. Here's a breakdown of occupational therapy for both
                groups:
            </blockquote>
            <blockquote>
                In both pediatric and adult settings, occupational therapist collaborate with clients, families, care
                givers and other healthcare. Proffesionals to develop individualized treatment plans that focus on 
                improving functional abilities and enhancing overall well-being.
            </blockquote>
          </div>
          <div className='col-md-6 rightsidewhatocc'>
          <h6 style={{fontWeight:'bold',color:'#3d878a'}} className='whatisot2' >Pediatric Occupational Therapy Services For :</h6>
            <ul style={{listStyle:'square'}}>
               <li>Developmental Delays</li>
               <li>Sensory Processing Disorders</li>
               <li>Autism Spectrum Disorder</li>
               <li>Down syndrome</li>
               <li>Cerebral Plasy</li>
               <li>Dysgraphia and handwriting remediation</li>
               <li>Learning Disabilities / Difficulties</li>
               <li>Emotion Regulation / Self Regulation</li>
               <li>Attention Deficient Hyper activity disorders</li>
               <li>Coordination disorders / Dyspraxia</li>
               <li>Fine motor / gross motor</li>
            </ul>
          </div>
        </div>
      </div>
        <Consult />

        <div className='container pt-3'>
        <div className='row Container'>
          <div className='col-md-6 leftsidewhatocc'>
            {/* Add image in left side */}
            <h6 style={{fontWeight:'bold',color:'#3d878a'}} className='whatisot2' >Adult Occupational Therapy Services For :</h6>
            <ul style={{listStyle:'square'}}>
               <li>Chronic conditions like multiple sclerosis</li>
               <li>Stroke</li>
               <li>TBI</li>
               <li>Meningitis</li>
               <li>Parkinson, Rheumatoid arthristis, dementia, Hand function, weakness</li>
               
            </ul>
          </div>
          <div className='col-md-6 rightsidewhatocc'>
                <img src='/octhree.jpg' 
                alt='Occupational Therapy - Rapture Therapy Centre' width={420}/>
          </div>
        </div>
      </div>
        <hr></hr>
      <div className='container pt-5'>
        <div className='row Container'>
          <div className='col-md-6 leftsidewhatocc'>
            {/* Add image in left side */}
            <h2 style={{fontWeight:'bold'}} className='whatisot'>Speech Language and Communication Therapy</h2>
            <hr></hr>
            <blockquote className='pt-1'>
                Speech Language and Communication Therapy (SLT) is a specialized field focused on diagnosing and treating communication and swallowing
                disorders in pediatric and adult population.
            </blockquote>
            <img src='/octwo.jpg' 
            alt='Speech Language and Communication Therapy - Rapture Therapy Centre' height={250}/>
          </div>
          <div className='col-md-6 rightsidewhatocc'>
          <h6 style={{fontWeight:'bold',color:'#3d878a'}} className='whatisot2' >Pediatric Speech Language & Communication Therapy Services For :</h6>
            <ul style={{listStyle:'square'}}>
            <li>Neuro developmental disorders including down syndrome and Autism spectrum</li>
               <li>Specific Language impairment</li>
               <li>Language difficulties</li>
               <li>Speech Sound disorders</li>
               <li>Feeding and Swallowing</li>
               <li>Cleftlip and palate</li>
               <li>Stuttering and cluttering</li>
               <li>Gestalt language processing</li>
               <li>Cerebral palsy</li>
               <li>Childhood apraxia of speech</li>
               <li>Complex communication needs / AAC</li>
               <li>Pragmatic Language Disorder</li>
               <li>Developmental delay</li>
               <li>Fluency Disorders</li>
               <li>Receptive / Expressive language Impairment</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default WhatisOcc;
