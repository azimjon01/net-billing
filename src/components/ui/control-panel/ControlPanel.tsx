import { FC } from "react";
import {
  Chevron,
  Icon,
  IconLeft,
  PanelContainer,
  PanelHeader,
  RegisterButton,
  RegisterIcon,
  RegisterText,
  Title,
} from "./ControlPanel.styles";
import { useToggle } from "../../../hooks/useToggle";
import ControlDropdown from "./control-components/control-dropdown/ControlDropdown";
import RegisterDocument from "./control-components/register-document/RegisterDocument";

const ControlPanel: FC = () => {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false);
  const [modalOpen, toggleModal] = useToggle(false);
  return (
    <>
      <PanelContainer>
        <PanelHeader onClick={toggleDropdownOpen}>
          <IconLeft>
            <Icon src="/assets/logos/sidebar/control-panel/computer-icon.svg" />
            <Title>Контроль</Title>
          </IconLeft>
          <Chevron src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg" />
        </PanelHeader>

        {dropdownOpen && <ControlDropdown />}

        <RegisterButton onClick={toggleModal}>
          <RegisterIcon src="/assets/logos/sidebar/control-panel/plus-icon.svg" />
          <RegisterText>Регистрация документа</RegisterText>
        </RegisterButton>

        <RegisterDocument open={modalOpen} onClose={toggleModal} />
      </PanelContainer>
    </>
  );
};

export default ControlPanel;
