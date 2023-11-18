import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="object-cover rounded-[50%]"
          src={"/noavatar.png"}
          width={50}
          height={50}
          alt="image"
        />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-[color:var(--textSoft)]">
            Adminstrator
          </span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((category, index) => (
          <li key={index}>
            <span className="text-[color:var(--textSoft)] font-bold text-[13px] mx-0 my-2.5">
              {category.title}
            </span>
            {category.list.map((item, index) => (
              <MenuLink key={index} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
