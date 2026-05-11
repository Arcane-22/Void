import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = () => {
  return (
<div className="layout">
  <NavBar />
  <div className="layout-body">
    <DashboardSidebar />
    <main className="layout-main">
      <Outlet />
    </main>
  </div>
  <Footer />
</div>
  );
};

export default DashboardLayout;