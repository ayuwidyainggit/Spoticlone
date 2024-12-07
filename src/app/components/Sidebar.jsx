"use client";

import useSWR from "swr";

import React from "react";
import { IoLibrarySharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";

import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";

import { HiMiniMusicalNote } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Sidebar = () => {
  const { data, error, isLoading } = useSWR("/api/related-artist", fetcher);

  console.log("first", data?.artists);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching related artists.</p>;
  return (
    <div
      className=" col-span-3  text-white p-4 mt-2 h-screen overflow-y-scroll "
      style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
    >
      <div className="relative  flex items-center gap-2">
        <IoLibrarySharp
          style={{ width: "25px", height: "25px", color: "gray" }}
        />
        <p className=" font-semibold text-gray-400">Your Library</p>
        <div className="absolute right-2 gap-2  flex items-center">
          <FaPlus style={{ width: "20px", height: "20px", color: "gray" }} />
          <GrLinkNext
            style={{ width: "20px", height: "20px", color: "gray" }}
          />
        </div>
      </div>
      <div className=" flex gap-2 mt-4">
        <div
          className=" px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(64, 64, 64, 1)" }}
        >
          <p className="">Playlist</p>
        </div>
        <div
          className=" px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(64, 64, 64, 1)" }}
        >
          <p className="">Artist</p>
        </div>
      </div>
      <div className=" mt-4 flex justify-between">
        <LuSearch style={{ color: "gray" }} />
        <div className=" flex gap-2 items-center">
          <p className="font-thin text-sm text-gray-400">Creator</p>
          <TfiMenuAlt style={{ color: "gray" }} />
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="bg-gradient-to-br from-[#3d07ed] to-[#bebff7] w-[50px] h-[50px] flex justify-center items-center rounded-md">
          <Image alt="like" src="/heart.png" width={20} height={20} />
        </div>
        <div className="ml-4">
          <p>Liked Song</p>
          <div className=" flex gap-2   ">
            <BsPinAngleFill style={{ color: "green" }} />
            <p className=" text-sm font-thin text-gray-400">
              Playlist <span>.</span> <span>186 songs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex">
        <div
          className=" w-[50px] h-[50px] flex justify-center items-center rounded-md "
          style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
        >
          <HiMiniMusicalNote />
        </div>
        <div className="ml-4 flex items-center">
          <p className=" text-sm font-thin text-gray-400">Playlist</p>
        </div>
      </div>

      {/* list  */}
      <div className=" ">
        {data?.artists.map((data, index) => (
          <div key={index} className=" mt-4 flex gap-4">
            <Image
              alt="artist"
              src={data.images[0]?.url || "/default-image.webp"}
              width={50}
              height={50}
              style={{ borderRadius: "100%" }}
            />
            <div className="">
              <p className=" font-medium">{data.name}</p>
              <p className=" font-thin text-sm text-gray-400">Artist</p>
            </div>
          </div>
        ))}
      </div>
      {/* end list */}
    </div>
  );
};

export default Sidebar;
