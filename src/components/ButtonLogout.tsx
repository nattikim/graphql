"use client";

import Link from "next/link";
import { useLogout } from "@/lib/auth";

const ButtonLogout = () => {
  const { logout } = useLogout();

  return (
    <Link
      onClick={logout}
      href={"/login"}
      title={"Logout"}
      className={"hover:saturate-200"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-9 h-9 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    </Link>
  );
};

export default ButtonLogout;
