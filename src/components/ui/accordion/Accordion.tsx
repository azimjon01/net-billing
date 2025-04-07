import { accordionData } from "../../../data/accordionData";
import { AccordionItem } from "./accordion-item/AccordionItem";

const Accordion = () => {
  return (
    <>
      {accordionData.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </>
  );
};

export default Accordion;
