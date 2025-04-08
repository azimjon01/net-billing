import { DropdownContainer, DropdownItem } from "./ControlDropdown.styles";

const ControlDropdown = () => {
  return (
    <DropdownContainer>
      <DropdownItem to="/calendar/statistics">📊 Статистика</DropdownItem>
      <DropdownItem to="/calendar/documents">🧾 Документы</DropdownItem>
      <DropdownItem to="/calendar/users">👤 Пользователи</DropdownItem>
    </DropdownContainer>
  );
};

export default ControlDropdown;
