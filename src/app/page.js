import Image from 'next/image'
import background from "../../public/assate/Team.webp";
import cat from "../../public/assate/cat.jpg";


export default function Home() {
  return (
    <>
      <div className="w-[100%] h-[500px] bg-gradient-to-r from-indigo-500 from-10% via-red-500 via-50% to-emerald-500 to-90% ...">
        <Image
          src={cat}
          alt="background image"
          className="w-[100%] h-[500px] opacity-60 object-cover "></Image>
        <Image
          src={cat}
          alt="background image"
          className="w-[100%] h-[500px] object-cover "></Image>
      </div>

      <div className="card container  grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-[50px] ">
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
      </div>
    </>
  );
}
