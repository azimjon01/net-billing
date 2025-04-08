import { accordionData } from "../../../data/accordionData";
import { AccordionItem } from "./accordion-item/AccordionItem";

interface AccordionProps {
  open: boolean;
}

const Accordion = ({ open }: AccordionProps) => {
  return (
    <>
      {accordionData.map((section, index) => (
        <AccordionItem
          open={open}
          key={index}
          title={section.title}
          externalIcon={section.externalIcon}
          items={section.items}
        />
      ))}
    </>
  );
};

export default Accordion;
