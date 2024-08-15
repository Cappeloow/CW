import jarekon from '../../images/web_project_jarekon.png'
import busker from '../../images/busker.png';
import shutdown from '../../images/web_shutdown.png';
import pizzeria from '../../images/deli-pizzeria.png';
import mystory from '../../images/web_mydiary.png';
import consid from '../../images/consid_converge.png';
import portfolio from '../../images/cw_figma.png';
import frihetsateljen from '../../images/design_frihetsateljen.png';

export const projectList = [
  {
    "categoryName":"Web Development",
    "projects":[
      {
        "name":"Jarekon.se",
        "img": jarekon,
        "description": "A fully functional website created for a client in the car repair industry, aimed at boosting their online presence. I handled the entire process, from designing and developing the site to capturing photos and crafting content.",
        "url":"www:https//jarekon.se",
        "techStack":[ 
          "wp",
          "figma"
        ]
      },
      {
        "name":"Busker",
        "img": busker,
        "description":"Busker is a full-stack social media platform designed for artists. It allows artists to showcase their profile, share links, and manage their availability through a calendar system. The artists can also buy their own QR-Code based Items from the store. Which can benefit them when they're playing live somewhere on a bar, festival or simply on the street. This simplifiy the connection between the audience and artists and the audience can really get to know the artist in no time.",
        "url":"https://github.com/Cappeloow/Busker",
        "techStack":[ 
          "next.js",
          "sass",
          "html",
          "node",
          "typescript",
          "sql"
        ]
      },
      {
        "name":"Shutdown",
        "img": shutdown,
        "description": "Fullstack E-commerce platform specializing in selling caps. This project emphasizes seamless Stripe integration for secure payment processing.",
        "url":"https://github.com/Cappeloow/E-commerce---Shutdown",
        "techStack":[ 
          "react",
          "css",
          "html",
          "figma",
          "node.js"
        ]
      },
      {
        "name":"Pizzeria",
        "img": pizzeria,
        "description":"This website was created to provide an excellent user experience for customers.",
        "techStack":[ 
          "react",
          "css",
          "html",
          "figma"
        ]
      },
      {
        "name":"My Diary",
        "img": mystory,
        "description":"A full-stack web application designed to mimic a simple social media platform where users can interact with friends.",
        "techStack":[ 
          "javascript",
          "css",
          "html",
          "node",
          "figma"
        ]
      }
    ]
  },
  {
    "categoryName":"Design",
    "projects":[
      {
        "name":"Yoga Studio",
        "img": frihetsateljen,
        "description":"A figma scetch that was designed for the purpose of creating a yoga website.",
        "techStack":[ 
          "figma"
        ]
      },
      {
        "name": "Portfolio Figma Sketch",
        "img": portfolio,
        "description": "Design sketch for my personal portfolio website, created using Figma to plan the layout, user experience, and visual elements before development.",
        "techStack": [
          "figma"
        ]
      }
    ]
  },
  {
    "categoryName":"App Development",
    "projects":[
      {
        "name":"Consid Converge",
        "img": consid,
        "description": "Developed a mobile application for Consid's sales team to streamline their daily activities. The app features a search algorithm that helps sales representatives find consultants who match job requests. Additionally, I implemented a Tinder-like swipe functionality for creating matches, enhancing the user experience and making the app intuitive and engaging.",
        "techStack":[ 
          "reactNative",
          "react",
          "html",
          "css",
          "figma",
          "node",
          "typescript",
          "sql"
        ]
      }
    ]
  }
]