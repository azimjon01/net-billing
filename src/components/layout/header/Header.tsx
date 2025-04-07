import { useToggle } from "../../../hooks/useToggle";
import BreadCrumb from "../../ui/bread-crumb";
import { ChevronIcon } from "../../ui/chevron-icon/ChevronIcon";
import {
  ChevronContainer,
  CloseButton,
  HeaderContainer,
  HeaderIcon,
  HeaderIconsContainer,
  HeaderIconWrapper,
  ModalContent,
  ModalOverlay,
} from "./Header.styles";

const Header = () => {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      <HeaderContainer>
        <BreadCrumb />
        <HeaderIconsContainer>
          <HeaderIcon src="/assets/logos/header/question-icon.svg" />
          <HeaderIcon src="/assets/logos/header/bell-icon.svg" />
          <HeaderIcon src="/assets/logos/header/internet-icon.svg" />
          <HeaderIconWrapper>
            <HeaderIcon src="/assets/logos/header/avatar-icon.svg" />
            <ChevronContainer onClick={toggleOpen}>
              {open ? (
                <ChevronIcon
                  rotate={0}
                  src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
                />
              ) : (
                <ChevronIcon
                  rotate={180}
                  src="/assets/logos/sidebar/control-panel/chevron-down-icon.svg"
                />
              )}
            </ChevronContainer>
          </HeaderIconWrapper>
        </HeaderIconsContainer>
        {open && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Foydalanuvchi Ma'lumotlari</h2>
            <p>
              <strong>Ism:</strong> Azimjon
            </p>
            <p>
              <strong>Email:</strong> Azimjon@gmail.com
            </p>
            <p>
              <strong>Telefon:</strong> 370293850732
            </p>
          </ModalContent>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
