import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SocialBar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
