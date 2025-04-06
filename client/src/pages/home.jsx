/* DEPENDENCIES */
import React from 'react';
import AccordionDemo from '../components/Accordian';

/* HOMEPAGE */
function Home(){

  // If videos are loaded, show videos
  return (
    <div id="homepage" >
        <h1>
          Welcome to Tailor
        </h1>
        <AccordionDemo></AccordionDemo>
    </div>
  )
}

/* EXPORT */
export default Home
