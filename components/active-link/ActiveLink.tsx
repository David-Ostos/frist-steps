"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface ActiveLinkProps {
  path: string;
  name: string;
  icon?: React.ReactNode;
}

export function ActiveLink({path, icon, name}: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`flex items-center gap-2 transition-all duration-300 ease-in-out ${
        pathname === path ? "px-2 text-green-500 border-green-500" : ""
      }`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
}
