import { RiNextjsFill } from "react-icons/ri"; 
import { FaReact,FaSass,FaHtml5,FaCss3,FaJava, FaWordpress  } from "react-icons/fa";
import { SiDotnet,SiTypescript,SiGoogleanalytics } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { LiaNode } from "react-icons/lia";
import { BsFiletypeSql } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';

export const techIcons: { [key: string]: JSX.Element } = {
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
  "wp":<FaWordpress/>,
  "sql":<BsFiletypeSql/>,
  "mongodb":<DiMongodb/>,
  "figma":<FiFigma/>,
  "ga4":<SiGoogleanalytics/>
};