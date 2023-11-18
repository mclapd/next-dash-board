"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[color:var(--bgSoft)] flex items-center justify-between p-5 rounded-[10px]">
      <div className="text-[color:var(--textSoft)] font-bold capitalize">
        {pathName.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-[10px]">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-[color:var(--text)] border-none"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
