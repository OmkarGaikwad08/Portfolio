import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="text-center tracking-wider">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
