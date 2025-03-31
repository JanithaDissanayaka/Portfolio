import about from "../assets/assets/About.jpg";
import {ABOUT_TEXT} from "../constants/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-u border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl" >About
            <span className="text-neutral-500"> Me</span> </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <motion.img
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}

                      className="rounded-2xl" src={about} alt="about"/>
                    </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                      <motion.p 
                      whileInView={{opacity:1,x:0}}
                      initial={{opacity:0,x:100}}
                      transition={{duration:1}}
                      className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                    </div>
                    </div>

            </div>
        
    </div>
    
  )
}

export default About