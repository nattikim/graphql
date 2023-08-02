import ButtonLogout from "./ButtonLogout";
import gritlabLogo from "../../public/gritlab.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={"z-50 fixed flex w-full justify-between p-5 items-center"}>
      <Image
        src={gritlabLogo}
        alt="gritlab logo"
        className={"w-24 h-7 brightness-50 dark:brightness-75"}
      />
      <ButtonLogout />
    </nav>
  );
};

export default Navbar;
