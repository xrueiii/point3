"use client"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function Selectors() {
    const [drumroom, setDrumroom] = useState("");
    return (
        <>
            <select onChange={e => setDrumroom(e.target.value)} className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white w-1/6">
                <option value={0}>請選擇欲預約的練團室</option>
                <option value={1}>鼓房 108</option>
                <option value={2}>鼓房 111</option>
                <option value={3}>鼓房 115</option>
            </select>
            
            <input className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white w-1/6" type="date"/>
            <button className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-700">送出查詢</button>
        </>
    );
}