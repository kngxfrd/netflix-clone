import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Moviecard from "../components/Moviecard";

function Home() {
  return (
    <div className="text-white bg-[#141414] w-screen h-screen overflow-x-hidden md:pb-32">
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="pl-6 text-left">
        <p>Comedy</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-2">
        <Moviecard category="comedy" />
      </div>
      <div className="pl-6 text-left pt-4 ">
        <p>Horror</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-2">
        <Moviecard category="horror" />
      </div>
      <div className="pl-6 text-left pt-4">
        <p>Action</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-2">
        <Moviecard category="drama" />
      </div>
      <div className="pl-6 text-left pt-4 ">
        <p>Drama</p>
      </div>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden pt-2">
        <Moviecard category="comedy" />
      </div>
      <div className="text-[#808080] flex flex-col items-left pl-24 pt-10 gap-4 pr-24 ">
        <div className="flex flex-row gap-4">
          <FaFacebookSquare size={22} />
          <FaInstagram size={22} />
          <FaTwitter size={22} />
          <FaYoutube size={22} />
        </div>
        <div className="flex flex-row justify-between text-sm">
          <div>
            <p>Voiceover and Subtitling</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Voiceover and Subtitling</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Voiceover and Subtitling</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Voiceover and Subtitling</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <button className="border w-35 h-9"></button>
        </div>
        <div className="">
          <p className="text-[10px]">
            © 1997-2021 Netflix, Inc. i-062d573a0ee099242
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
