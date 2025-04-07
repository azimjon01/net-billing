import { DropdownContainer, DropdownItem } from "./ControlDropdown.styles";

const ControlDropdown = () => {
  return (
    <DropdownContainer>
      <DropdownItem>📊 Statistikalar</DropdownItem>
      <DropdownItem>🧾 Hujjatlar</DropdownItem>
      <DropdownItem>👤 Foydalanuvchilar</DropdownItem>
    </DropdownContainer>
  );
};

export default ControlDropdown;
