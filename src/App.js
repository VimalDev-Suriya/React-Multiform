import React from 'react';
import Multistepform from './Multistepform.js';
import JSONDATA from './FormData.json';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Multi Step Form</h1>
      
      <Multistepform formData={JSONDATA} />
    </div>
  );
}
