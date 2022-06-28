import {
  HomeIcon,
  QuoteIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const LeftSidebarLinks = [
  { label: "Home", route: "/", icon: <HomeIcon width="28" height="28" /> },
  {
    label: "Discover",
    route: "/discover",
    icon: <MagnifyingGlassIcon width="28" height="28" />,
  },
  {
    label: "Profile",
    route: "/yusuvf",
    icon: <PersonIcon width="28" height="28" />,
  },
  {
    label: "About",
    route: "/about",
    icon: <QuoteIcon width="28" height="28" />,
  },
];

export default LeftSidebarLinks;
