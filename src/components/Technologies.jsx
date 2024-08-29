import {
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  FaJava,
  FaHtml5,
  FaWordpress,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <FaJava className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <FaPython className="text-7xl text-sky-800" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <RiJavascriptFill className="text-7xl text-amber-300" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <FaWordpress className="text-7xl text-slate-50" />
        </motion.div>
        <motion.div
          className="rounded-3xl border-4 border-neutral-800 p-4"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <RiReactjsLine className="text-7xl text-cyan-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
