import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaNoteSticky } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { GiBuyCard } from "react-icons/gi";
import { TiSocialAtCircular } from "react-icons/ti";


import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ onToggleComponent }) => {
  const menu = [
    { name: "Dashboard", link: "/", icon: BiSolidDashboard },
    { name: "Khatabook", link: "/", icon: CgDanger },
    { name: "Notes", link: "/", icon: FaNoteSticky },
    { name: "Analytics", link: "/", icon: IoAnalyticsSharp },
    { name: "Settings", link: "/", icon: IoSettings },
    { name: "DailyEntry", link: "/", icon: GiBuyCard },
    { name: "Social", link: "/", icon: TiSocialAtCircular },
  ];
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* for Desktop */}
      <div className="hidden md:block">
        <div
          className={`bg-colorgrey min-h-fit ${
            open ? "w-50" : "w-20"
          } duration-500 text-grey-100 px-4 py-4 rounded-xl shadow`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            {menu?.map((menu, i) => (
              <Link
                onClick={() => onToggleComponent(menu?.name)}
                to={menu?.link}
                key={i}
                className={`flex items-center text-md gap-3.5 font-medium p-2 hover:bg-colorskin rounded-sm`}
              >
                <div>{React.createElement(menu?.icon, { size: "30" })}</div>
                <h2
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* for mobile */}

      <div className="block md:hidden">
        <div className={`bg-colorgrey  duration-500 text-grey-100 px-4 py-4 rounded-xl shadow`}>
        <div
          className=""
         >
          <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={`flex flex-wrap ${open? "":"hidden" } justify-between transition-all`}>
            {menu?.map((menu, i) => (
              <Link
                onClick={() => onToggleComponent(menu?.name)}
                to={menu?.link}
                key={i}
                className={`flex items-center text-md gap-3.5 font-medium p-2 hover:bg-colorskin rounded-sm`}
              >
                <div>{React.createElement(menu?.icon, { size: "30" })}</div>
                <h2
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
