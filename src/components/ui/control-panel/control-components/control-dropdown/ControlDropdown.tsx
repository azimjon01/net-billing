import { ChevronIcon } from "../../../chevron-icon/ChevronIcon";
import {
  DropdownContainer,
  DropdownItem,
  ItemContainer,
} from "./ControlDropdown.styles";

interface ControlDropdownProps {
  open: boolean;
}

const ControlDropdown = ({ open }: ControlDropdownProps) => {
  return (
    <DropdownContainer>
      <ItemContainer open={open} to="/calendar/statistics">
        <ChevronIcon src="/assets/logos/sidebar/control-panel/document-icon.svg" />
        <DropdownItem open={open}>📊 Статистика</DropdownItem>
      </ItemContainer>
      <ItemContainer open={open} to="/calendar/documents">
        <ChevronIcon src="/assets/logos/sidebar/control-panel/document-icon.svg" />
        <DropdownItem open={open}>🧾 Документы</DropdownItem>
      </ItemContainer>
      <ItemContainer open={open} to="/calendar/users">
        <ChevronIcon src="/assets/logos/sidebar/control-panel/document-icon.svg" />
        <DropdownItem open={open}>👤 Пользователи</DropdownItem>
      </ItemContainer>
    </DropdownContainer>
  );
};

export default ControlDropdown;
