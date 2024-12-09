// src/components/ProjectCard.js
import  { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ role, title, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-80 flex-shrink-0 mx-2">
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4">
          <div className="text-blue-500 text-sm font-semibold mb-2">{role}</div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">
            {isExpanded ? description : `${description.slice(0, 15)}...`}
            {description.length > 15 && (
              <span
                onClick={toggleReadMore}
                className="text-blue-500 cursor-pointer ml-2"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
            )}
          </p>
        </div>
        <div className="p-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
