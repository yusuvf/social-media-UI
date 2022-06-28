import LeftSidebarButton from "./LeftSidebarButton";
import LeftSidebarLinks from "../config/leftSidebarLinks";
import { Link } from "react-router-dom";
import { Component1Icon } from "@radix-ui/react-icons";


const LeftSidebar = () => {
  return (
    <nav className="h-auto bg-slate-800 border-r-[1px] border-slate-600 w-[100px] hidden sm:block md:block md:w-[100px] lg:w-[600px]">
      <Link to={"./"}>
        <div className="flex justify-center items-center pt-12">
          <Component1Icon className="text-slate-50" width="48" height="48" />
          <span className="ml-[8px] text-slate-50 text-2xl font-extrabold hidden xs:hidden sm:hidden md:hidden lg:flex">
            Social Media UI
          </span>
        </div>
      </Link>

      <div className="flex justify-center">
        <ul className="flex flex-col justify-center pt-16 ">
          {LeftSidebarLinks.map((link, key) => (
            <li key={key} className="">
              <Link to={link.route}>
                <LeftSidebarButton icon={link.icon} label={link.label} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
