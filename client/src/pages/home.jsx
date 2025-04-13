/* DEPENDENCIES */
import React from 'react';
import AccordionDemo from '../components/Accordian';
import ContactSection from '../components/sections/ContactSection';

/* HOMEPAGE */
function Home(){

  return (
    <div id="homepage" >
        <h1>
          Welcome to Tailor
        </h1>
        <AccordionDemo></AccordionDemo>
        <ContactSection></ContactSection>
    </div>
  )
}

/* EXPORT */
export default Home
