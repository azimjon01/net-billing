import Header from "../header";
import Sidebar from "../sidebar/Sidebar";
import { LayoutWrapper, MainContent } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";

const Layout = ({ children, toggleTheme }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <Sidebar toggleTheme={toggleTheme} />
        <MainContent>
          <Header />
          {children}
        </MainContent>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
