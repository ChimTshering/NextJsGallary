import Image from "next/image";
import Link from "next/link";
import dochula from "../../assets/places/dochula.jpeg";
import taktsang from "../../assets/places/taktsang.jpeg";
export default function Places() {
  return (
    <div className=" absolute top-0 left-0 h-full w-screen bg-black/75">
      <div className="mt-16 my-0 custom-bg-image h-full flex">
        <div className="w-4/12 h-full px-5 py-8">
          <div className="bg-white/30 w-full h-full rounded-lg border-solid border-2 border-white flex flex-col">
            <Link href="#dochula">Dochula</Link>
            <Link href="#taktshang">Taktsang</Link>
          </div>
        </div>
        <div className="w-full px-8 py-8">
          <div className="bg-white/50 w-full h-full rounded-xl border-solid border-2 border-white overflow-y-auto overflow-x-hidden px-6 py-6">
            <Image src={dochula} alt="Dochula" width={800} height={300} className=' py-5 justify-center flex'/>
            <Image src={taktsang} alt="Taktsang" />
            sdfgfsd
          </div>
        </div>
      </div>
    </div>
  );
}
