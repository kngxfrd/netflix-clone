import { IoMdSearch } from "react-icons/io";
import { AiOutlineGift } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar() {
  return (
    <div className="fixed w-full top-0 left-0 right-0 h-20 bg-[#141414] flex flex-row">
      <div>
        <img
          src="src/assets/Netflix-Logo-Streaming-Platform-PNG-removebg-preview.png"
          alt=""
          className="pl-6 w-50 h-22 pb-1"
        />
      </div>
      <div className="flex items-center text-[12px] gap-3 ml-5">
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
          <img src="src/assets/profileimg.png" alt="" className="size-7" />
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
