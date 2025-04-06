import { useLocation } from "react-router-dom";
import { breadCrumbMap } from "./BreadCrumbMap";
import { Crumb, Wrapper } from "./BreadCrumb.styles";

export const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const crumbs = pathnames.map((_, index) => {
    const path = "/" + pathnames.slice(0, index + 1).join("/");
    const label = breadCrumbMap[path];

    return label ? <Crumb key={path}> {label}</Crumb> : null;
  });

  return <Wrapper>{[<Crumb key="/">Главная</Crumb>, ...crumbs]}</Wrapper>;
};

export default BreadCrumb;
