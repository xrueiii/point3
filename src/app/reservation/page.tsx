import Selectors from "./_components/Selectors";
import Timetable from "./_components/Timetable";

export default async function ReservationPage() {
  return (
    <>
      <div className="bg-black min-h-screen w-screen text-xl overflow-scroll">
        <div className="bg-reservationpage h-80 w-screen text-xl flex items-center px-16">
          <h1 className="text-7xl text-yellow-500 font-medium animate-pulse-short delay-300">練團室預約</h1>
        </div>
        <div className="flex gap-12 px-16 py-4 w-full mt-4">
          <Selectors/>
        </div>
        <p className="text-5xl text-yellow-500 font-medium px-16 py-8">練團室 108</p>
        <Timetable/>    
      </div>
    </>
  )
}
