import Resume, { HERO_CONTENT } from "../constants";
import profilePic from "../assets/OmkarProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-24 overflow-hidden">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="sm:pl-5 pt-4 flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-light tracking-tight lg:mt-20 lg:text-7xl text-slate-300"
            >
              Omkar Gaikwad
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-red-500 via-purple-300 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-normal text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(1)}
              initial="hidden"
              animate="visible"
              type="button"
              className="py-4 px-6 mb-5 bg-slate-200 text-blue-700 hover:bg-blue-700 hover:text-slate-200 w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              onClick={Resume}
            >
              Resume
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2  scale-75">
          <div className="flex justify-center">
            <motion.img
              className="rounded-3xl shadow-slate-900"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Omkar Gaikwad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
