import { useState } from "react";
import { ChevronIcon } from "../../chevron-icon/ChevronIcon";
import {
  AccordionHeader,
  AccordionTitle,
  AcoordionContainer,
  ItemList,
  StyledLink,
} from "./AccordionItem.styles";

interface Props {
  title: string;
  items: { label: string; path: string }[];
}

export const AccordionItem = ({ title, items }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AcoordionContainer>
        <AccordionHeader onClick={() => setOpen(!open)}>
          <AccordionTitle>{title}</AccordionTitle>
          {open ? (
            <ChevronIcon
              rotate={180}
              src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
            />
          ) : (
            <ChevronIcon
              rotate={0}
              src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
            />
          )}
        </AccordionHeader>

        {open && (
          <ItemList>
            {items.map((item, i) => (
              <StyledLink key={i} to={item.path}>
                {item.label}
              </StyledLink>
            ))}
          </ItemList>
        )}
      </AcoordionContainer>
    </>
  );
};
