"use client"

import { useState } from "react"

export default function AvailableButton() {
    const [chosen, setChosen] = useState<boolean>(false);

    return (
        <>
        {chosen ? (
            <button className="px-4 py-4 rounded-md w-full text-white text-center bg-red-400 hover:bg-red-800" onClick={() => setChosen(false)}>Chosen</button>
            ) : (<button className="px-4 py-4 rounded-md w-full text-white text-center bg-column3 hover:bg-green-800" onClick={() => setChosen(true)}>Available</button>)}
        </>   
    );
}