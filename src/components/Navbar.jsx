import { PlinthLogo } from "../assets/svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow-lg text-white flex items-center justify-between h-[5rem] px-8 z-50">
      <div className="flex items-center ">
        <img
          src={PlinthLogo}
          alt="Plinth Logo"
          className="h-[4.5rem] w-auto"
        />
      </div>
      <div className="flex space-x-6 pr-[1rem] text-lg">
        <div className="cursor-pointer hover:text-slate-300 transition duration-200 pr-[1rem] left-[2rem]">Register</div>
        <div className="cursor-pointer hover:text-slate-300 transition duration-200">Sponsor</div>
      </div>
    </div>
  );
};

export default Navbar;
