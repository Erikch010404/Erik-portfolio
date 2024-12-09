

const educationData = [
  {
    level: "10th Grade",
    school: "Ambe Vidhyalaya",
    year: "2019",
    details: "Completed with a focus on science and mathematics. Achieved a 82% aggregate."
  },
  {
    level: "12th Grade",
    school: "Parth Institute",
    year: "2021",
    details: "Completed with a focus on science stream. Achieved a 76% aggregate."
  },
  {
    level: "College",
    school: "Parul University",
    year: "Expected Graduation 2025",
    details: "Graduated with a Bachelor's degree in Computer Science. Specialized in front-end development and web technologies.Achieved 7.4 CGPA"
  }
];

const Education = () => {
  return (
    <section id="education" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">{edu.level}</h3>
            <p className="text-xl text-gray-600">{edu.school}</p>
            <p className="text-gray-500">{edu.year}</p>
            <p className="text-gray-700 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
