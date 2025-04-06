import BreadCrumb from "../../ui/bread-crumb";
import {
  HeaderContainer,
  HeaderDownIcon,
  HeaderIcon,
  HeaderIconsContainer,
  HeaderIconWrapper,
} from "./Header.styles";

const Header = () => {
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
            <HeaderDownIcon src="/assets/logos/header/arrow-down-icon.svg" />
          </HeaderIconWrapper>
        </HeaderIconsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
