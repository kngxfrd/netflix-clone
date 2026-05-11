import { IoMdSearch } from "react-icons/io";
import { AiOutlineGift } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import netflixLogo from "../assets/netflixlogo.png";
import profileImg from "../assets/profileimg.png";
function Navbar() {
  return (
    <div className="fixed w-full relative top-0 left-0 right-0 h-20 bg-[#141414] flex flex-row">
      <div className="flex items-cente">
        <img
          src={netflixLogo}
          alt=""
          className="w-24 md:w-32 h-auto object-contain"
        />
      </div>
      <div className="flex items-center text-[12px] gap-3 ml-5 ">
        <button>Homepage</button>
        <button>Series</button>
        <button>Movies</button>
        <button className="flex gap-1 ">
          <p>New</p> <p>and</p> <p>Popular</p>
        </button>
      </div>
      <div className="flex items-center ml-auto mr-6">
        <div className="flex items-center gap-3 ">
          <button className="flex itmes-center gap-1">
            <IoMdSearch size={20} />
            search
          </button>

          <AiOutlineGift size={20} />
          <FaBell size={20} />
          <img src={profileImg} alt="" className="size-7" />
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
