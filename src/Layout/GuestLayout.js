import { Outlet } from "react-router-dom";
import TheNavbar from "../Navbar";
import Footer from "../Footer";

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <TheNavbar />
      <main className="flex-grow px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
