import styled from "@emotion/styled";

export const SidebarContainer = styled.div<{ open: boolean }>((props) => ({
  width: props.open ? 250 : 37,
  transition: "width 0.3s ease",
  backgroundColor: props.theme.colors.primary,
  padding: 4,
}));

export const SidebarHeader = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 8px",
});

export const SidebarLogoContainer = styled.div<{ open: boolean }>((props) => ({
  display: props.open ? "flex" : "none",
  justifyContent: "space-between",
  gap: 4,
  alignItems: "center",
  cursor: "pointer",
}));

export const SidebarToggleLogoContainer = styled.div({});

export const SidebarLogo = styled.img({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 20,
  height: 20,
  cursor: "pointer",
});

export const SidebarTitle = styled.h1({
  color: "#fff",
  fontSize: 14,
});

export const SidebarThemeIcon = styled.button<{ open: boolean }>((props) => ({
  display: props.open ? "flex" : "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: props.theme.colors.text,
  transition: "color 0.3s ease",
  "&:hover": {
    color: props.theme.colors.primary,
  },
}));
