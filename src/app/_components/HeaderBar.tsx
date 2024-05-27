"use client";
import { publicEnv } from "@/lib/env/public";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderBar() {
  const route = useRouter();
  const [clicked, setClicked] = useState(1);
  const handleClickHomePage = () => {
    setClicked(1);
    route.push(`${publicEnv.NEXT_PUBLIC_BASE_URL}`);
  };
  const handleClickIntroductionPage = () => {
    setClicked(2);
    route.push(`/introduction`);
  };

  const handleClickReservationPage = () => {
    setClicked(3);
    route.push(`/reservation`);
  };

  const handleClickContactPage = () => {
    setClicked(4);
    route.push(`/contact`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md w-2/3 flex justify-center items-center fixed top-8 z-50 rounded-full">
        <div className="w-2/3 h-14 flex justify-between items-center py-4 font-semibold">
          <button
            className={cn(
              "transition-all duration-300 ease-in-out py-3 px-4 rounded-xl",
              clicked === 1
                ? "bg-[#FFE900] text-black"
                : "text-gray-700 hover:bg-gray-200"
            )}
            onClick={handleClickHomePage}
          >
            <h1 className="lg:text-lg text-sm">首頁</h1>
          </button>
          <button
            className={cn(
              "transition-all duration-300 ease-in-out py-3 px-4 rounded-md",
              clicked === 2
                ? "bg-[#FFE900] text-black"
                : "text-gray-700 hover:bg-gray-200"
            )}
            onClick={handleClickIntroductionPage}
          >
            <h1 className="lg:text-lg text-sm">練團室介紹</h1>
          </button>
          <button
            className={cn(
              "transition-all duration-300 ease-in-out py-3 px-4 rounded-md",
              clicked === 3
                ? "bg-[#FFE900] text-black"
                : "text-gray-700 hover:bg-gray-200"
            )}
            onClick={handleClickReservationPage}
          >
            <h1 className="lg:text-lg text-sm">練團室預約</h1>
          </button>
          <button
            className={cn(
              "transition-all duration-300 ease-in-out py-3 px-4 rounded-md",
              clicked === 4
                ? "bg-[#FFE900] text-black"
                : "text-gray-700 hover:bg-gray-200"
            )}
            onClick={handleClickContactPage}
          >
            <h1 className="lg:text-lg text-sm">聯絡我們</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
