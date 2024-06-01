"use client";

import useReservation from "@/hooks/useReservation";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ReservationDialogprops = {
  open: boolean;
  onClose: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  date: string[];
  room: string;
  reservation: string[];
};
export default function ReservationDialog({
  open,
  onClose,
  setValue,
  date,
  room,
  reservation,
}: ReservationDialogprops) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { postReservation } = useReservation();
  const router = useRouter();
  const roomInfo = room.split(",");
  const reservationInfo:string[] = [];
  for (let i = 0; i < reservation.length; i++) {
    const temp = reservation[i].split(",");
    const span = parseInt(temp[0]);
    const day = parseInt(temp[1]);
    reservationInfo.push(date[day]+"|"+`${10+span}:00~${11+span}:00`);
  }

  reservationInfo.sort();

  const handleReservaion = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name === "") {
      alert("請輸入預約人姓名！");
      return;
    }
    if (phone === "") {
      alert("請輸入預約人電話！");
      return;
    }
    if (email === "") {
      alert("請輸入預約人信箱！");
      return;
    }

    try {
      for (let i = 0; i < reservationInfo.length; i++) {
        const detail = reservationInfo[i].split("|");
        const detailSpan = parseInt(detail[1].substring(0,2)) - 10;
        await postReservation(roomInfo[0], detail[0], detailSpan, email, name, phone);
      }

      setValue(false);
      alert("預約成功！請前往信箱確認預約細節！");
      onClose();
      router.push("/reservation");
      
    }catch(e) {
      alert("預約失敗請重試");
      console.log(e);
    }
    


  }
  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center text-xl mt-4 font-semibold">
        預約確認
      </DialogTitle>
      <DialogContent>
        <div className="flex-col space-y-8 px-16 py-4 font-normal">
          <p className="text-xl">預約練團室： {roomInfo[1]}</p>
          <p className="text-xl">預約日期|時段：</p>
          {reservationInfo.map((content) => (<p className="text-lg text-center w-full">{content}</p>))}
          <div className="w-full flex border-black border-2 text-black rounded-md items-center pl-2">
            <PersonIcon />
            <input
              type="text"
              className="w-full rounded-md text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full flex pl-2 border-black border-2 text-black placeholder-gray-30 rounded-md items-center">
            <PhoneIcon />
            <input
              type="text"
              className="w-full rounded-md overflow-scroll text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人電話"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full flex pl-2 border-black border-2 text-black placeholder-gray-30 rounded-md items-center">
            <EmailIcon />
            <input
              type="text"
              className="w-full rounded-md overflow-scroll text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="w-full h-full flex justify-center">
          <div className="flex gap-4 py-12">
            <button
              className="w-full px-12 py-4 rounded-md font-medium text-white bg-gray-300 hover:bg-gray-500"
              onClick={onClose}
            >
              取消
            </button>
            <button className="w-full py-4 px-12 rounded-md font-medium text-black bg-[#FFE900] hover:bg-yellow-400" onClick={(e) => handleReservaion(e)}>
              確認
            </button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
