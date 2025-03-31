import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVarient=(duration)=>({
  initial:{y:-10},
  animate:{y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType: "reverse"      
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 py-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div 
      
      
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVarient(2.5)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-3 border-neutral-800 p-3">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </motion.div>               
        <motion.div 
        variants={iconVarient(3)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-3 border-neutral-800 p-3">
          <FaNodeJs className="text-4xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVarient(3.5)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-3 border-neutral-800 p-3">
          <TbBrandNextjs className="text-4xl " />
        </motion.div> 
        <motion.div 
        variants={iconVarient(4)} 
        initial="initial"
        animate="animate"
        className="rounded-2xl border-3 border-neutral-800 p-3">
          <SiMongodb className="text-4xl text-green-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
