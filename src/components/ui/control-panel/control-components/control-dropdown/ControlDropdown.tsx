import { DropdownContainer, DropdownItem } from "./ControlDropdown.styles";

const ControlDropdown = () => {
  return (
    <DropdownContainer>
      <DropdownItem>📊 Статистика</DropdownItem>
      <DropdownItem>🧾 Документы</DropdownItem>
      <DropdownItem>👤 Пользователи</DropdownItem>
    </DropdownContainer>
  );
};

export default ControlDropdown;
