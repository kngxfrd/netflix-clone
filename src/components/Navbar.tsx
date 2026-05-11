import { IoMdSearch } from "react-icons/io";
import { AiOutlineGift } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar() {
  return (
    <div className="fixed w-full top-0 left-0 right-0 h-20 bg-black flex flex-row">
      <div>
        <img
          src="src/assets/Netflix-Logo-Streaming-Platform-PNG-removebg-preview.png"
          alt=""
          className="pl-6 w-50 h-22 pb-1"
        />
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="flex items-center gap-4">
        <IoMdSearch size={24} />
        <AiOutlineGift size={24} />
        <FaBell size={24} />
        <IoMdArrowDropdown size={24} />
      </div>
    </div>
  );
}

export default Navbar;
