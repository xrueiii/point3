import AvailableButton from "./AvailableButton";

export default function Timetable() {
    return (
        <div className="w-full flex gap-4 px-16 py-8">
            <div className="flex-cols w-1/6 space-y-4">
                <div className="px-4 py-4 rounded-md w-full">10:00 ~ 11:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">10:00 ~ 11:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">11:00 ~ 12:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">12:00 ~ 13:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">13:00 ~ 14:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">14:00 ~ 15:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">15:00 ~ 16:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">16:00 ~ 17:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">17:00 ~ 18:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">18:00 ~ 19:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">19:00 ~ 20:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">20:00 ~ 21:00</div>
                <div className="px-4 py-4 rounded-md w-full text-white text-center border-white border-2">21:00 ~ 22:00</div>  
            </div>
            <div className="flex-cols w-1/6 space-y-4">
                <div className="px-4 py-4 rounded-md bg-column2 w-full text-white text-center">2024/5/22</div>
                <AvailableButton/>
            </div>
            <div className="flex-cols gap-2 w-1/6">
                <div className="px-4 py-4 rounded-md  bg-column1 w-full text-white text-center">2024/5/23</div>
            </div>
            <div className="flex-cols gap-2 w-1/6">
                <div className="px-4 py-4 rounded-md bg-column1  w-full text-white text-center">2024/5/24</div>
            </div>
            <div className="flex-cols gap-2 w-1/6">
                <div className="px-4 py-4 rounded-md bg-column1  w-full text-white text-center">2024/5/25</div>
            </div>
            <div className="flex-cols gap-2 w-1/6">
                <div className="px-4 py-4 rounded-md bg-column1  w-full text-white text-center">2024/5/26</div>
            </div>
        </div>     
    );
}