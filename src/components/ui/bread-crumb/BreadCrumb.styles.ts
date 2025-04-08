import styled from "@emotion/styled";

export const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 3,
});

export const Crumb = styled.span({
  color: "#AEB3CB",
  fontWeight: 400,
  fontSize: 14,

  "&::after": {
    content: '"/"',
    color: "#777",
  },

  "&:last-of-type::after": {
    content: '""',
  },
});

export const Internal = styled.span((props) => ({
  color: props.theme.colors.tertiary,
  fontWeight: 400,
  fontSize: 14,
  "&::after": {
    content: '"/"',
    color: "#777",
  },

  "&:last-of-type::after": {
    content: '""',
  },
}));
