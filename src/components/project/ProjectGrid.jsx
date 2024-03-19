import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import LandRover from "../../../public/LandRover.jpg"
import project1 from "../../../public/project1.jpg"
import project2 from "../../../public/project2.jpg"

export default function ProjectGrid(){
    const projects = [
        {
          id: 1,
          title: 'E-commerce Website',
          description: 'A fully functional e-commerce website with a sleek design and seamless user experience.',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
          image: LandRover,
          githubLink: 'https://github.com/example/project1',
          liveLink: 'https://example.com/project1',
        },
        {
          id: 2,
          title: 'Portfolio Website',
          description: 'A stunning portfolio website showcasing the work and skills of a talented artist.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          image: project1,
          githubLink: 'https://github.com/example/project2',
          liveLink: 'https://example.com/project2',
        },
        {
          id: 3,
          title: 'Task Management App',
          description: 'An intuitive task management application to help users stay organized and productive.',
          technologies: ['Vue.js', 'Firebase'],
          image: project2,
          githubLink: 'https://github.com/example/project3',
          liveLink: 'https://example.com/project3',
        },
        // Add more projects as needed
      ];
    return(
        <>
          <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-[#ffcf40] text-[#255036] px-2 py-1 rounded-md text-sm font-medium mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#255036] hover:text-[#ffcf40] transition duration-300">
                      <FaGithub className="text-2xl" />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#255036] hover:text-[#ffcf40] transition duration-300">
                      <FaExternalLinkAlt className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}