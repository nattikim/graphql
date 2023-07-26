import ButtonLogout from "./ButtonLogout";

const Navbar = () => {
  return (
    <nav className={"fixed flex w-full justify-end p-5"}>
      <ButtonLogout />
    </nav>
  );
};

export default Navbar;
