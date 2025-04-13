import React from "react";
import { Accordion } from "radix-ui";
import ContactSection from "./Sections/ContactSection";

const AccordionWrap = () => (
  <Accordion.Root
    className="w-[300px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <ContactSection />
    {/* Add more items here if needed */}
  </Accordion.Root>
);

export default AccordionWrap;
