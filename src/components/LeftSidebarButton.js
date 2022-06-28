const LeftSidebarButton = ({ icon, label }) => {
  return (
    <button className="flex text-xl font-semibold text-slate-50 justify-center items-center md:p-4 sm:p-4 lg:p-2 border-stone-500 p-2 rounded hover:bg-slate-600">
      {icon}
      <span className="px-2 pt-[12px] pb-[12px] hidden xs:hidden sm:hidden md:hidden lg:flex">
        {label}
      </span>
    </button>
  );
};

export default LeftSidebarButton;
