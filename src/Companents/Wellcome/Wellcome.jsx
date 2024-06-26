import React from 'react';
import { Link } from 'react-router-dom';


export default function Wellcome() {
  return (
    <>
      <div className='welcome-container text-center'>
        <h1 className='display-1 welcome-title'>Meet your TV concierge.</h1>
        <p className='welcome-text'>
          Need something to watch? We’re on it. Noxe
          free movies & TV with your favorite streaming services, so there’s always more to discover
        </p>
        <button className='btn btn-primary' >Start Streaming</button>
      </div>
    </>
  );
}
