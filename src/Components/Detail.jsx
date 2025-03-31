import { About_me } from "../constants";
import pic from "../assets/assets/Profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Detail = () => {
  return (
    <div className="border-b pb-4 lg:mb-35 border-neutral-900">
      <div className="flex flex-wrap">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible" // 👈 Triggers when in view
              viewport={{ once: true }} // Ensures it only runs once
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-4xl"
            >
              Janitha Malshan
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              NSBM Undergraduate
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {About_me}
            </motion.p>

          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} // Runs only once when in view
              transition={{ duration: 1, delay: 1.5 }}
              src={pic}
              alt="Profile"
              width="400px"
              height="400px"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detail;
