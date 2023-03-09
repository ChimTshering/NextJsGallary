"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  
  const paths = usePathname();
  const isActive = (url: string) => {
    if(url === paths) { return "font-bold underline decoration-white"} else return "";
  };

  return (
    <div className="absolute top-0 text-white w-screen px-5 py-5 bg-gradient-to-t from-gray-800 to-black bg-opacity-50">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">
            <Link href="/">My Collections</Link>
          </h1>
        </div>
        <div className="flex gap-x-5">
          <Link
            href="/places"
            className={`leading-relaxed ${paths && isActive("/places")}`}
          >
            Places
          </Link>
          <Link href="#">People</Link>
          <Link href="#">Culture</Link>
        </div>
      </div>
    </div>
  );
};
