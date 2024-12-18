import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { GrHomeRounded } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { IoMdBrowsers } from "react-icons/io";

import { PiBellSimple } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black  h-screen overflow-hidden">
      <header className=" z-20 bg-black fixed top-0 w-full text-white h-[10%] grid grid-cols-12">
        <div className="col-span-4 flex p-1 gap-3">
          <BsChevronLeft style={{ width: "28px", height: "28px" }} />
          <BsChevronRight style={{ width: "28px", height: "28px" }} />
        </div>
        <div className="col-span-4 pt-1  flex gap-2">
          <div
            className="  w-[50px] h-[50px]  rounded-full p-2  flex items-center justify-center "
            style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
          >
            <GrHomeRounded
              style={{
                width: "28px",
                height: "20px",
                display: "relative",
                color: "white",
              }}
            />
          </div>
          <div
            className=" rounded-full w-[5000px] h-[50px] flex items-center px-2 gap-2 relative"
            style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
          >
            <LuSearch style={{ width: "28px", height: "28px" }} />
            <p>What do you want to play?</p>
            <div className="absolute top-3 right-3 border-l border-white pl-2 ">
              <IoMdBrowsers style={{ width: "28px", height: "28px" }} />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex justify-end gap-3 items-center pr-3">
          <PiBellSimple style={{ width: "25px", height: "25px" }} />
          <TbUsersGroup style={{ width: "25px", height: "25px" }} />
          <div className=" bg-pink-400 w-[40px] h-[40px] rounded-full flex justify-center items-center ">
            <p>A</p>
          </div>
        </div>
      </header>
      <div className=" relative grid grid-cols-12  top-[10%] h-[80%]  ">
        <Sidebar />
        <div className=" col-span-9 ">
          <div className="">{children}</div>
        </div>
      </div>
      <div className=" fixed bottom-0 w-full text-white h-[10%]">
        <Footer />
      </div>
    </div>
  );
}
