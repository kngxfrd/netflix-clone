import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Banner() {
  return (
    //img src={} alt=""/
    <div className="bg-[url('src/assets/bannerimg.png')] bg-cover bg-center relative w-full h-150 pt-12 mt-16">
      <div className="w-100 flex mt-50 pl-6 flex-col ">
        <div className="text-center">
          <h1 className="text-[80px] font-bold">YANIMA</h1>
          <h1 className="text-[50px] font-semibold -mt-12">KAL</h1>
        </div>
        <p>
          Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
          dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir
          kızla karşılaşır ve hayatı değişir.
        </p>
        <div className="flex gap-2 pt-6">
          <button className="flex items-center justify-center bg-white text-black w-30 h-8 gap-2">
            <FaPlay size={12} />
            Watch
          </button>
          <button className="flex flex-row items-center justify-center bg-white/20 text-white w-35 h-8 gap-1 text-[12px]">
            <IoIosInformationCircleOutline size={18} />
            <p>More</p>
            <p>Information</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
