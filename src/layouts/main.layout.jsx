import { Outlet } from "react-router-dom";
import Navigation from "@/components/ui/Navigation";

function MainLayout() {
  return (
    <>
      <Navigation/>
      <Outlet />
    </>
  );
}

export default MainLayout;
