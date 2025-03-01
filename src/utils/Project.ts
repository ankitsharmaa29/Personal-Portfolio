import Capture from "@/assets/capture.png"
import projectOne from "@/assets/projectOne.png";
import tubeMate from "@/assets/tubeMate.png";


export interface Project {
  id: number;
  image: any;
  name: string;
  url: string;
  technology: string[];
}

const projectData: Project[] = [
  {
    id: 1,
    image: Capture,
    name: "Shopping Website",
    url: "https://github.com/ankitsharmaa29",
    technology: ["React.JS", "Tailwind", "Express.JS" , "MongoDb" , "Node.JS" , "Javascript" , "ReduxToolkit"],
  },
  {
    id: 2,
    image: projectOne,
    name: "Search Engine",
    url: "https://googleclonelite.netlify.app",
    technology: ["React.JS", "Tailwind", "Google api"],
  },
  {
    id: 3,
    image: tubeMate,
    name: "Tube mate",
    url: "https://tubematee.netlify.app",
    technology: ["React.JS", "Tailwind", "Youtube api"],
  },
];

export default projectData;
