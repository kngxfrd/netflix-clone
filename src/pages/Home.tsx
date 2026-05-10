import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Moviecard from "../components/Moviecard";

function Home() {
  return (
    <div className="text-white bg-black w-screen h-screen overflow-x-hidden pb-32">
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="pl-6 text-left">
        <p>Comedy</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <Moviecard category="comedy" />
      </div>
      <div className="pl-6 text-left ">
        <p>Horror</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <Moviecard category="horror" />
      </div>
      <div className="pl-6 text-left ">
        <p>Action</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <Moviecard category="drama" />
      </div>
      <div className="pl-6 text-left ">
        <p>Drama</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <Moviecard category="comedy" />
      </div>
      <div className="text-[#808080] flex justify-left items-center pl-6 pt-10 ml-20">
        <div className="flex flex-row gap-4">
          <FaFacebookSquare size={22} />
          <FaInstagram size={22} />
          <FaTwitter size={22} />
          <FaYoutube size={22} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
