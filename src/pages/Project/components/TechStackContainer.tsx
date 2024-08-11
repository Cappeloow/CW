import React from 'react';
import { RiNextjsFill } from "react-icons/ri"; // Import the necessary icons here
import { FaReact,FaSass,FaHtml5,FaCss3,FaJava  } from "react-icons/fa";
import { SiDotnet,SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { LiaNode } from "react-icons/lia";
interface Props {
  techStack: string[];
}


const techIcons: { [key: string]: JSX.Element } = {
  'next.js': <RiNextjsFill />,
  'react': <FaReact/>,
  'reactNative': <TbBrandReactNative/>,
  'sass': <FaSass/>,
  "html": <FaHtml5 />,
  "css":<FaCss3/>,
  "java": <FaJava/>,
  "dotnet":<SiDotnet/>,
  "typescript": <SiTypescript/>,
  "node": <LiaNode/>,
};

const TechStackContainer: React.FC<Props> = ({ techStack }) => {
  return (
    <div className='techStack-container'>
      <p>Techstack</p>
      <ul>
        {techStack.map((tech, idx) => (
          <li key={idx}>
            {techIcons[tech] && <span>{techIcons[tech]}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackContainer;


