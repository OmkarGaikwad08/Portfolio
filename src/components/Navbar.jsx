import logo from "../assets/omkar-logo2.png";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 bg-zinc-900 bg-opacity-85 shadow-lg">
      <div className="flex items-center ml-4 pl-9">
        <a href="#top">
          <img className="w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 mr-4 text-xl pr-8">
        <a
          href="https://www.linkedin.com/in/omkar-gaikwad-658a52205/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-500 hover:scale-110 transition duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/OmkarGaikwad08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-cyan-500 hover:scale-110 transition duration-300"
        >
          <FiGithub />
        </a>
        <a
          href="https://leetcode.com/u/omkarsgaikwad832/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="hover:text-cyan-500 hover:scale-110 transition duration-300"
        >
          <SiLeetcode />
        </a>
        <a
          href="mailto:omkarsgaikwad832@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-cyan-500 hover:scale-110 transition duration-300"
        >
          <AiOutlineMail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
