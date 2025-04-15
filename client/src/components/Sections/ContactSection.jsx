/* DEPENDENCIES */
import * as React from 'react'
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../AccordianComponents'
import CheckBox from '../CheckBox'

// Display a 2 column list of contact datapoints
// with checkboxes or something to signify which should be displayed or not
// an edit button should open all the datapoints in edit mode
// in edit mode each datapoint should get a save icon, and a cancel icon and  get highligted if they've been changed

/* FUNCTIONS */
const ContactSection = () => (
  <AccordionItem value="item-1">
    <AccordionTrigger>Contact Information</AccordionTrigger>
    <AccordionContent>
      <CheckBox label="Show Email" />
      <CheckBox label="Show Phone Number" />
      <CheckBox label="Show LinkedIn" />
      <CheckBox label="Show Address" />    
    </AccordionContent>
  </AccordionItem>
)

export default ContactSection
