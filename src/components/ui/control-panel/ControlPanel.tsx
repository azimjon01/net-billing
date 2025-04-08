import { FC } from "react";
import {
  Icon,
  IconLeft,
  IconTop,
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
import { ChevronIcon } from "../chevron-icon/ChevronIcon";

const ControlPanel: FC = () => {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false);
  const [modalOpen, toggleModal] = useToggle(false);
  return (
    <>
      <PanelContainer>
        <PanelHeader>
          <IconLeft onClick={toggleDropdownOpen}>
            <IconTop>
              <Icon src="/assets/logos/sidebar/control-panel/computer-icon.svg" />
              <Title>Контроль</Title>
            </IconTop>
            {dropdownOpen ? (
              <ChevronIcon
                src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
                rotate={180}
              />
            ) : (
              <ChevronIcon
                src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
                rotate={0}
              />
            )}
          </IconLeft>
          {dropdownOpen && <ControlDropdown />}
        </PanelHeader>

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
