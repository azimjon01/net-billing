import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HomeContainer = styled.div((props) => ({
  height: "100%",
  background: props.theme.colors.background,
  display: "grid",
  placeItems: "center",
}));

const Button = styled(Link)((props) => ({
  padding: "50px",
  display: "grid",
  placeItems: "center",
  background: props.theme.colors.secondary,
  color: props.theme.colors.text,
  borderRadius: props.theme.borderRadius,
}));

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Button to="/calendar">Tabble</Button>
      </HomeContainer>
    </>
  );
};

export default Home;
