
import ProjectCard from './ProjectCard';

const projects = [
  {
    role: "DESIGNER",
    title: "CHATAPP",
    description: "",
    imageUrl: "./public/chatAPP.png"
  },
  {
    role: "DESIGNER",
    title: "1SHOT",
    description: "",
    imageUrl: "./public/1shot -LMS.jpg"
  },
  
    
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="flex overflow-x-auto hide-scrollbar space-x-4 p-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
