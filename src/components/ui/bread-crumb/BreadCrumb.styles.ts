import styled from "@emotion/styled";

export const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Crumb = styled.span({
  color: "#fff",
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
