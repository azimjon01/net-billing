import { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarLogo,
  SidebarLogoContainer,
  SidebarThemeIcon,
  SidebarTitle,
  SidebarToggleLogoContainer,
} from "./Sidebar.styles";
import ThemedIcon from "../../theme/ThemedIcon";
import ControlPanel from "../../ui/control-panel";
import Accordion from "../../ui/accordion/Accordion";

type SidebarProps = {
  toggleTheme: () => void;
};

const Sidebar = ({ toggleTheme }: SidebarProps) => {
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);

  const isSidebarOpen = hovered || locked;

  const handleToggle = () => {
    setLocked((prev) => !prev);
  };

  return (
    <>
      <SidebarContainer
        open={isSidebarOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(!locked ? false : true)}
      >
        <SidebarHeader>
          <SidebarLogoContainer open={isSidebarOpen}>
            <SidebarLogo src="/assets/logos/sidebar/sidebar-header/logo.svg" />
            <SidebarTitle>HET BILLING</SidebarTitle>
          </SidebarLogoContainer>
          <ThemedIcon
            light={
              <SidebarThemeIcon open={isSidebarOpen} onClick={toggleTheme}>
                🌘
              </SidebarThemeIcon>
            }
            dark={
              <SidebarThemeIcon open={isSidebarOpen} onClick={toggleTheme}>
                🌕
              </SidebarThemeIcon>
            }
          />
          <SidebarToggleLogoContainer>
            <SidebarLogo
              src="/assets/logos/sidebar/sidebar-header/toggle-icon.svg"
              onClick={() => {
                handleToggle();
                setHovered(false);
              }}
            />
          </SidebarToggleLogoContainer>
        </SidebarHeader>
        <ControlPanel open={isSidebarOpen} />
        <Accordion open={isSidebarOpen} />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
