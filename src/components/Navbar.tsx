import { Link } from "react-router-dom";
import Logo from "./Logo";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="pt-[24px]">
      <div className="bg-[#05252C66] flex justify-between items-center max-w-[1200px] w-full mx-auto border border-[#197686] py-3 px-4 rounded-[24px]">
        <Logo />
        <div className="sm:block hidden">
          <ul className="font-jejuRegular flex items-center gap-[10px] p-[10px] text-[18px]">
            <li className="text-white">
              <Link className="p-[10px]" to="/">
                Events
              </Link>
            </li>
            <li className="text-gray">
              <Link className="p-[10px]" to="/">
                My Tickets
              </Link>
            </li>
            <li className="text-gray">
              <Link className="p-[10px]" to="/">
                About Project
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-[#0A0C11] flex items-center gap-[8px] rounded-[12px] font-jejuRegular uppercase bg-white py-3 sm:py-4 px-4 px-[24px]">
            My Tickets
            <ArrowLongRightIcon className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
