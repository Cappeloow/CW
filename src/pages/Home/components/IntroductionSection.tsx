import { useState } from 'react';
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import casperbild from '../../../../images/profilbild-casper-svartvit.jpg';
import { motion, } from 'framer-motion';
import { leftIconContainerMovement, rightIconContainerMovement } from '../../../animations/element';
import TextWriter from '../../../animations/components/TextWriter';
import { GrApps } from 'react-icons/gr';

interface IExpertise  {
  title: string;
  description: string;
}

const expertiseList:IExpertise[] = [
  {
    title: "Web Development",
    description: "Creating responsive and dynamic websites tailored to your needs."
  }, 
  {
    title: "Songwriting",
    description: "Crafting original lyrics and melodies for various genres."
  }, 
  {
    title: "Photography",
    description: "Capturing stunning visuals that tell a story."
  }, 
  {
    title: "Design & Animation",
    description: "Designing eye-catching visuals and engaging animations."
  }, 
  {
    title: "App Development",
    description: "Building robust and scalable applications to streamline your operations and enhance productivity."
  }
];

const IntroductionSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<IExpertise>(expertiseList[0]);
  const [isProjectActivated, setIsProjectActivated] = useState(false);
  const handleExpertiseClick = (expertise:string) => {
    
    switch (expertise) {
      case "web":
        setSelectedExpertise(expertiseList[0])
        break;
      case "song":
        setSelectedExpertise(expertiseList[1])
        break;
      case "photo":
        setSelectedExpertise(expertiseList[2])
        break;  
      case "design":
        setSelectedExpertise(expertiseList[3])
        break;
      case "system":
        setSelectedExpertise(expertiseList[4])
        break;         
      default:
        setSelectedExpertise(expertiseList[0])
        break;
    }
  };

  function goToProjects() {
    setIsProjectActivated(true);

    // wait 2 seconds;
    setTimeout(() => {
      window.location.href = "/projects";
    }, 1500);
  }

  return (
    <section className='introduction-section'>
          <aside className='left-icon-aside'>
          <motion.div 
                variants={leftIconContainerMovement} 
                initial="init" 
                animate="anim"  
              >
            <div className='left-icon-container'>
              <button style={{visibility: "hidden"}}  className={!isProjectActivated ? 'icon-btn' : 'icon-btn-move'} onClick={() => handleExpertiseClick("song")}>
                <IoMusicalNotes/>
              </button>
              <button className={!isProjectActivated ? 'icon-btn' : 'icon-btn-move'} onClick={() => handleExpertiseClick("web")}>
                <IoCodeSlash />
              </button>
              <button style={{visibility: "hidden"}} className={!isProjectActivated ? 'icon-btn' : 'icon-btn-move'} onClick={() => handleExpertiseClick("photo")}>
                <MdAddAPhoto />
              </button>
            </div>
            </motion.div>
          </aside>
          <section className='article-container'>
            <article>
              <div className='img-section'>
                <div className='img-container'>
                  <img src={casperbild} alt=""/>
                </div>
              </div>
              <div className='text-section'>
                <div className='text-container'>
                  <h2>{selectedExpertise.title}</h2>
                  <br />
                  <TextWriter content={selectedExpertise.description} />
                  <br />
                  <button onClick={() => goToProjects()}><FaCirclePlay/></button>
                </div>
              </div>
            </article>
            <div className='shadow-pool'></div>
          </section>
          <aside className='right-icon-aside'>
            <motion.div 
                  variants={rightIconContainerMovement} 
                  initial="init" 
                  animate="anim"  
                >
              <div className='right-icon-container'>
                <button className={!isProjectActivated ? 'icon-btn' : 'icon-btn-move'} onClick={() => handleExpertiseClick("design")}>
                  <MdDesignServices />
                </button>
                <button className={!isProjectActivated ? 'icon-btn' : 'icon-btn-move'} onClick={() => handleExpertiseClick("system")}>
                  <GrApps/>
                </button>
              </div>
            </motion.div>
          </aside>
        </section>
  )
}

export default IntroductionSection
