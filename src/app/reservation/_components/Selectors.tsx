"use client";

import { useState } from "react";
import Timetable from "./Timetable";
import useReservation from "@/hooks/useReservation";
import ReservationDialog from "./ReservationDialog";

type selectorProps = {
  rooms: {
    roomName: string;
    roomId: string;
}[]
}

export default function Selectors({ rooms }: selectorProps) {
  const today = new Date();
  const [room, setRoom] = useState<string>();
  const [date, setDate] = useState<string>();
  const [timetableDate, setTimeTableDate] = useState<string[]>();
  const [timetableRoom, setTimeTableRoom] = useState<string>();
  const [availableTable, setAvailableTable] = useState<boolean[][]>([]);
  const [reservation, setReservation] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const { getAvailableSpan } = useReservation();
  const handleSetDate = (e: string) => {
    const chosenDate = new Date(e);
    if (chosenDate <= today) {
      alert("預約日期不得早於今天！")
      return;
    }
    else {
      setDate(e);
      setIsSend(false);
    }
  }
  const handleSearch = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!room) {
      alert("請先選擇練團室！")
      return;
    }

    if (!date) {
      alert("請先選擇日期！")
      return;
    }

    const dateSeries:string[] = [];
    const avail:boolean[][] = [];

  
    for (let i = 0; i < 5; i++){
      const chosenDate = new Date(date);
      var nextDate = new Date(chosenDate);
      nextDate.setDate(chosenDate.getDate() + i)
      const nextDateStr = nextDate.toISOString().substring(0,10);
      dateSeries.push(nextDateStr);

      const availableSpan = await getAvailableSpan(room.split(",")[0], nextDateStr);
      avail.push(availableSpan);
    }

    setIsSend(true);
    setReservation([]);
    setAvailableTable(avail);
    setTimeTableDate(dateSeries);
    setTimeTableRoom(room);
  }

  const handleReservation = () => {
    if (!isSend) {
      alert("請先送出查詢");
      return;
    }
    if (!timetableDate || !timetableRoom || !availableTable) {
      alert("請先查詢練團室及日期！")
      return;
    }
    if (reservation.length === 0) {
      alert("請至少選擇一個預約時段！");
      return;
    }
    if (reservation.length > 4) {
      alert("一次最多請選擇4個預約時段!");
      return;
    }

    setDialogOpen(true);
  }
  


  return (
    <>
    <div className="flex justify-center items-center">
      <div className="lg:flex flex-col lg:space-y-0 space-y-4 px-4 lg:px-8 py-4 mt-4 justify-between w-3/5">
        <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
          <select
            onChange={(e) => {setRoom(e.target.value); setIsSend(false)}}
            className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
          >
            <option value="">請選擇欲預約的練團室</option>
            {rooms.map((room) => [
              <option value={room.roomId+","+room.roomName} key={room.roomId}>{room.roomName}</option>
            ])}
          </select>

          <input
            className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
            type="date"
            value={date}
            onChange={(e) => handleSetDate(e.target.value)}
          />

          <button className="bg-white px-8 py-3 rounded-md font-medium hover:bg-gray-300 text-black lg:text-lg text-sm focus:outline-none transition-all duration-300" onClick={(e) => handleSearch(e)}>
            送出查詢
          </button>
          <button
            className="border-[#FFE900] hover:bg-[#FFE900] hover:bg-opacity-20 border-2 px-8 py-3 rounded-md text-[#FFE900] lg:text-lg text-sm focus:outline-none transition-all duration-300"
            onClick={handleReservation}
          >
            確認預約
          </button>
          <ReservationDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            setValue={setIsSend}
            date={timetableDate ?? []}
            room={timetableRoom ?? ""}
            reservation={reservation}
          />
        </div>
      </div>
    </div>
    {timetableDate && timetableRoom && isSend && <>
      <div className="py-10 px-16 w-full flex items-center justify-center">
        <p className="text-xs lg:text-lg w-2/3 bg-white rounded-full text-white bg-opacity-20 text-center px-2 py-1">
          ⬇️ 請點擊下方時間表選擇預約時段 ⬇️
        </p>
      </div>
      <Timetable date={timetableDate} room={timetableRoom} availableTable={availableTable} setValue={setReservation} value={reservation}/>
    </>}
    </>
  );
}
