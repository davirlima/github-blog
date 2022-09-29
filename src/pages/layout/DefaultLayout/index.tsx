import { Header } from "../../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContent } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </>
  );
}
