"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2.5 mx-0 my-[5px] p-5 rounded-[10px] hover:bg-[#2e374a] ${
        pathName === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
