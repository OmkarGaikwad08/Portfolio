import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

function Resume() {
  window.open(
    "https://drive.google.com/file/d/1ftQdkBSBjoNXUoNh0n6OkWHjem5m8eFW/view?usp=drive_link",
    "_blank"
  );
}
export default Resume;


export const HERO_CONTENT = `I am Computer Engineering graduate, eager to leverage my programming expertise and technical skills in the Information Technology sector. My portfolio showcases my dedication to delivering high-quality solutions, effective communication, and teamwork. I stay updated with industry trends, positioning myself to drive innovation and contribute to an organization's success.`;

export const PROJECTS = [
  {
    githubLink: "https://github.com/OmkarGaikwad08/Dall-E_Clone.git",
    title: "Dall-E Clone",
    image: project1,
    description:
    "An AI image generation application which can create AI generated images inspired by DALL-E, utilizing Cloudinary for streamlined image handling.",
    technologies: ["JS","OpenAI", "Vite", "React", "MongoDB"],
  },
  {
    githubLink: "https://github.com/OmkarGaikwad08/AgroGenius.git",
    title: "AgroGenius",
    image: project2,
    description:
    "Intelligent Crop Recommendation system using weather data from Open Weather and soil fertility to assist farmers in selecting the best crops.",
    technologies: ["Python", "ML", "React", "HTML", "CSS"],
  },
  {
    githubLink: "https://github.com/OmkarGaikwad08/Portfolio.git",
    title: "Portfolio Website",
    image: project3,
    description:
    "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    githubLink: "https://github.com/OmkarGaikwad08/IoT-tracking-Device.git",
    title: "IoT Tracking Device",
    image: project4,
    description:
      "A compact IoT device using Arduino and Seeed Studio components, enabling real-time location tracking and emergency SOS functionality via SMS.",
    technologies: ["Arduino IDE", "A9GPRS", "SEEED Studio"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9321935321",
  email: "omkarsgaikwad832@gmail.com",
};
