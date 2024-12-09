// src/components/Skills.js

import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-600" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
];

const Skills = () => {
    return (
        <div className="w-full p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                        <span className="text-5xl mb-2">{skill.icon}</span>
                        <span className="text-xl font-medium text-gray-700">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
