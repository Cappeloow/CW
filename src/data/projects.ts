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
        "description":"Busker is a full-stack social media platform tailored for artists. It’s designed to make performing in public spaces—whether on the street, in a pub, or at a festival—more convenient, regardless of an artist's level of recognition.",
        "features":"Busker allows artists to create and showcase their profiles, share links, and manage their schedules using an integrated calendar system. Additionally, artists can purchase QR code-based items from the platform’s store, which they can use during live performances to connect easily with their audience. This feature streamlines the interaction between artists and their fans, enabling the audience to learn more about the artists quickly and effortlessly.",
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
        "name":"Pizza Website",
        "img": pizzeria,
        "description":"This website reflects my passion for pizza, and it's fully prepared to take orders if I decide to turn this passion into a business.",
        "features": "The website features dynamic menus and an order list to keep track of what customers want to order over the phone. Users can easily add as many products as they like to their cart. This idea came to me when I was placing a large order and had to shout to my friends to find out what they wanted. Now, the process is simplified—no more missed items or yelling across the room. Everything is neatly organized and ready to go!",
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
        "description": "Developed a mobile application for Consid's sales team to streamline their daily activities. The app enhances the user experience with intuitive and engaging features.",
        "features":"The application includes a search algorithm that helps sales representatives find consultants who match job requests. Additionally, it features a Tinder-like swipe functionality for creating matches, making the process more interactive and user-friendly. As an admin, you are able to create consultant profiles both on the web and within the mobile application.",
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