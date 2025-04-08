import { useState } from "react";
import { ChevronIcon } from "../../chevron-icon/ChevronIcon";
import {
  AccordionHeader,
  AccordionTitle,
  AcoordionContainer,
  AcordionName,
  ContainerScroll,
  ItemList,
  StyledLink,
} from "./AccordionItem.styles";

interface Props {
  title: string;
  externalIcon: string;
  items: { label: string; path: string; internalIcon: string }[];
  open: boolean;
}

export const AccordionItem = ({ title, externalIcon, items, open }: Props) => {
  const [iopen, setOpen] = useState(false);
  return (
    <ContainerScroll>
      <AcoordionContainer>
        <AccordionHeader onClick={() => setOpen(!iopen)}>
          <AcordionName open={open}>
            <ChevronIcon src={externalIcon} width={18} height={18} />
            <AccordionTitle open={open}>{title}</AccordionTitle>
          </AcordionName>
          {iopen ? (
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

        {iopen && (
          <ItemList>
            {items.map((item, i) => (
              <StyledLink key={i} to={item.path}>
                <ChevronIcon src={item.internalIcon} width={18} height={18} />
                <AccordionTitle open={open}>{item.label}</AccordionTitle>
              </StyledLink>
            ))}
          </ItemList>
        )}
      </AcoordionContainer>
    </ContainerScroll>
  );
};
