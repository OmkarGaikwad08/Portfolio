import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

function Resume() {
  window.open(
    "https://drive.google.com/file/d/1zuO4j0vVGUP95Iy9vj9EU1sHuUPNND_o/view?usp=sharing",
    "_blank"
  );
}
export default Resume;


export const HERO_CONTENT = `I am Computer Engineering graduate eager to leverage my programming expertise and technical skills in the Information Technology sector. My portfolio showcases my dedication to delivering high-quality solutions, effective communication, and teamwork. I stay updated with industry trends, positioning myself to drive innovation and contribute to an organization's success.`;

export const PROJECTS = [
  {
    title: "Dall-E Clone",
    image: project1,
    description:
      "An AI image generation application which can create AI generated images inspired by DALL-E, utilizing Cloudinary for streamlined image handling.",
    technologies: ["JS","OpenAI", "Vite", "React", "CSS", "MongoDB"],
  },
  {
    title: "AgroGenius",
    image: project2,
    description:
      "Intelligent Crop Recommendation system using weather data from Open Weather and soil fertility to assist farmers in selecting the best crops.",
    technologies: ["Python", "ML", "React", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
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
