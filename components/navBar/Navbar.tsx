import Link from "next/link";
import {Roboto} from "next/font/google";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components/index";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const navItems = [
  {path: "/", name: "home", icon: <HomeIcon />},
  {path: "/about", name: "about"},
  {path: "/contact", name: "contact"},
  {path: "/pricing", name: "pricing"},
];
/* 
const links = {
  about: "/about",
  contact: "/contact",
  pricing: "/pricing",
};
 */

/*
<li>
  {" "}
  <Link href="/" className="flex gap-1 items-center ">
    {" "}
    <HomeIcon /> 
    <span>Home</span>
  </Link>
</li>

<div className="flex gap-4">
  {Object.entries(links).map(([key, value]) => (
    <li key={key}>
      <Link href={value}>{key}</Link>
    </li>
  ))}
    </div> */

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white bg-opacity-30 p-2 px-4 m-2 rounded sticky top-0 z-10">
      <ul
        className={`flex justify-between gap-4 capitalize  font-semibold ${roboto.className}`}
      >
        {/* Elemento Home a la izquierda */}
        <li>
          <Link href={navItems[0].path} className={`flex items-center gap-2 `}>
            {navItems[0].icon}
            {navItems[0].name}
          </Link>
        </li>

        {/* Resto de elementos a la derecha */}
        <div className="flex gap-4">
          {navItems.slice(1).map((navItem) => (
            <li key={navItem.path}>
              <ActiveLink {...navItem} />
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
