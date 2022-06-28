import {
  HomeIcon,
  PersonIcon,
  MagnifyingGlassIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";

import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-slate-800 flex justify-between text-sm text-slate-100 uppercase font-mono xs:flex sm:hidden md:hiden lg:hidden xl:hidden border-t-[1px] border-slate-400">
      <Link
        to={"./"}
        className="w-full flex justify-center py-4 px-3 text-center hover:bg-slate-700 hover:text-slate-100 transition duration-300"
      >
        <HomeIcon width={24} height={24} />
      </Link>
      <Link
        to={"./discover"}
        className="w-full flex justify-center py-4 px-3 text-center hover:bg-slate-700 hover:text-slate-100"
      >
        <MagnifyingGlassIcon width={24} height={24} />
      </Link>
      <Link
        to={"./yusuvf"}
        className="w-full flex justify-center py-4 px-3 text-center hover:bg-slate-700 hover:text-slate-100"
      >
        <PersonIcon width={24} height={24} />
      </Link>
      <Link
        to={"./about"}
        className="w-full flex justify-center py-4 px-3 text-center hover:bg-slate-700 hover:text-slate-100"
      >
        <QuoteIcon width={24} height={24} />
      </Link>
    </nav>
  );
};

export default BottomNavigation;
