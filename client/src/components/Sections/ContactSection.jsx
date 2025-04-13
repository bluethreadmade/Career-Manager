/* DEPENDENCIES */
import * as React from 'react'
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../AccordianComponents'

// Display a 2 column list of contact datapoints
// with checkboxes or something to signify which should be displayed or not
// an edit button should open all the datapoints in edit mode
// in edit mode each datapoint should get a save icon, and a cancel icon and  get highligted if they've been changed

/* FUNCTIONS */
const ContactSection = () => (
  <AccordionItem value="item-1">
    <AccordionTrigger>Contact Information</AccordionTrigger>
    <AccordionContent>
      Here is how to reach me.
    </AccordionContent>
  </AccordionItem>
)

export default ContactSection
