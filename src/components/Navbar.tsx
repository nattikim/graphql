"use client";

import ButtonLogout from "./ButtonLogout";
import gritlabLogo from "../../public/gritlab.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return (
    <nav className={"z-50 fixed flex w-full justify-between p-5 items-center"}>
      <div className={"px-2 py-1 rounded rounded-3xl backdrop-blur-sm"}>
        <Image
          src={gritlabLogo}
          alt="gritlab logo"
          className={"w-24 h-7 brightness-0 dark:brightness-100"}
        />
      </div>
      {!isLoginPage && <ButtonLogout />}
    </nav>
  );
};

export default Navbar;
