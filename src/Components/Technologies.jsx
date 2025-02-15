import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 py-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-3 border-neutral-800 p-3">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </div>               
        <div className="rounded-2xl border-3 border-neutral-800 p-3">
          <FaNodeJs className="text-4xl text-green-400" />
        </div>
        <div className="rounded-2xl border-3 border-neutral-800 p-3">
          <TbBrandNextjs className="text-4xl " />
        </div> 
        <div className="rounded-2xl border-3 border-neutral-800 p-3">
          <SiMongodb className="text-4xl text-green-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
