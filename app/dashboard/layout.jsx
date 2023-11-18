import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-[1] bg-[color:var(--bgSoft)] min-h-screen p-5">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
