import BottomBar from "./_components/BottomBar";

export default async function Home() {
  return (
  <>
    <div className="bg-homepage h-screen w-screen text-xl flex justify-center items-center">
      <div className="bg-black bg-opacity-20 flex-col text-center px-16 py-8 animate-pulse-short delay-300">
        <h1 className="text-yellow-500 text-7xl font-bold font-serif">0.3 MUSIC CENTER</h1>
        <p className="text-white text-4xl font-serif mt-16">100台北市中正區忠孝西路一段7號1樓</p>
        <p className="text-white text-4xl font-serif">(02)2383 1780</p>
      </div>
    </div>
    <BottomBar/>
  </>
  )
}
