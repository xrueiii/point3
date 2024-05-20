"use client"
import { publicEnv } from "@/lib/env/public";
import { useRouter } from "next/navigation";

export default function HeaderBar() {
    const route = useRouter();
    const handleClickHomePage = () => {
        route.push(`${publicEnv.NEXT_PUBLIC_BASE_URL}`);
    }

    return (
        <div className="bg-red-950 px-8 py-10 w-screen text-white justify-between flex">
            <button onClick={handleClickHomePage}>
                <h1 className="text-2xl">
                    0.3 音樂教室
                </h1>
            </button>

            <button className="text-xl rounded-md border p-2">
                Login 登入
            </button>
        </div>
    );
}