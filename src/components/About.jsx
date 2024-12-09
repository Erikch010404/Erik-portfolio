import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/erik-christian-64a041228/", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com//Erik010404", label: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-center lg:items-start">
              <img
                src="public\Erik12.jpg"
                alt="Profile"
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg mb-8 hover:scale-105 transition-transform duration-300"
              />
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hello! I am Erik Christian, a passionate software developer creating innovative web solutions. I specialize in front-end development using modern technologies like React.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My journey in tech began when I discovered my love for creating user-friendly interfaces that make a real impact. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;
