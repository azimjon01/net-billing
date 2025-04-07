import { useState } from "react";
import { ChevronIcon } from "../../chevron-icon/ChevronIcon";
import {
  AccordionHeader,
  AccordionTitle,
  AcoordionContainer,
  AcordionName,
  ItemList,
  StyledLink,
} from "./AccordionItem.styles";

interface Props {
  title: string;
  externalIcon: string;
  items: { label: string; path: string; internalIcon: string }[];
}

export const AccordionItem = ({ title, externalIcon, items }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AcoordionContainer>
        <AccordionHeader onClick={() => setOpen(!open)}>
          <AcordionName>
            <ChevronIcon src={externalIcon} width={14} height={14} />
            <AccordionTitle>{title}</AccordionTitle>
          </AcordionName>
          {open ? (
            <ChevronIcon
              rotate={0}
              src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
            />
          ) : (
            <ChevronIcon
              display="none"
              rotate={180}
              src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
            />
          )}
        </AccordionHeader>

        {open && (
          <ItemList>
            {items.map((item, i) => (
              <StyledLink key={i} to={item.path}>
                <ChevronIcon src={item.internalIcon} width={14} height={14} />
                {item.label}
              </StyledLink>
            ))}
          </ItemList>
        )}
      </AcoordionContainer>
    </>
  );
};
