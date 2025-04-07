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

type SidebarProps = {
  toggleTheme: () => void;
};

const Sidebar = ({ toggleTheme }: SidebarProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SidebarContainer open={open}>
        <SidebarHeader>
          <SidebarLogoContainer open={open}>
            <SidebarLogo src="/assets/logos/sidebar/sidebar-header/logo.svg" />
            <SidebarTitle>HET BILLING</SidebarTitle>
          </SidebarLogoContainer>
          <ThemedIcon
            light={
              <SidebarThemeIcon open={open} onClick={toggleTheme}>
                🌘
              </SidebarThemeIcon>
            }
            dark={
              <SidebarThemeIcon open={open} onClick={toggleTheme}>
                🌕
              </SidebarThemeIcon>
            }
          />
          <SidebarToggleLogoContainer>
            <SidebarLogo
              src="/assets/logos/sidebar/sidebar-header/toggle-icon.svg"
              onClick={() => setOpen(!open)}
            />
          </SidebarToggleLogoContainer>
        </SidebarHeader>
        <ControlPanel />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
