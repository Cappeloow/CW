import { techIcons } from "../../../assets/icons-export";
interface Props {
  techStack: string[];
}

const TechStackContainer: React.FC<Props> = ({ techStack }) => {
  return (
    <div className='techStack-container'>
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


