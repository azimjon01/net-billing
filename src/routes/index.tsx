import { Global } from "@emotion/react";
import GlobalStyles from "../styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/layout";
import Table from "../pages/table";

const ROUTES_CONFIG = [
  {
    path: "/calendar/events",
    element: <Table />,
  },
];

type AppRoutesProps = {
  toggleTheme: () => void;
};

const AppRoutes = ({ toggleTheme }: AppRoutesProps) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<Layout toggleTheme={toggleTheme}>{element}</Layout>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
