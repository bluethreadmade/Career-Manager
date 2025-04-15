import React from "react";
import { Accordion } from "radix-ui";
import ContactSection from "./Sections/ContactSection";

const AccordionWrap = () => (
  <Accordion.Root
    className="w-[300px] rounded-md bg-red-500 shadow-xl/30"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <ContactSection />
    {/* Add more items here if needed */}
  </Accordion.Root>
);

export default AccordionWrap;
