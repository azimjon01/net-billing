import styled from "@emotion/styled";

export const HeaderContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  background: props.theme.colors.primary,
}));

export const HeaderIconsContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
});

export const HeaderIconWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const HeaderIcon = styled.img({
  width: 30,
  height: 30,
  borderRadius: 7,
});

export const HeaderDownIcon = styled.img({
  width: 16,
  height: 16,
});
