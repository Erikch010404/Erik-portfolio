
import Certificationcard from './Certificationcard';

const certificationsData = [
  {
    field: "Software Engineering",
    organization: "NPTEL",
    description: "",
    imageUrl: "https://img.freepik.com/premium-vector/word-cloud-background-concept-software-engineering-computer-programming-system-cloud-technology-development-application-management-vector-illustration_616200-4829.jpg",
    pdf: "./public/Software Engineering (1).pdf"
  },
  {
    field: "Data Anyaliytics  with Python",
    organization: "NPTEL",
    description: "",
    imageUrl: "https://datarundown.com/wp-content/uploads/2023/05/Model-Data-Analytics.jpg",
    pdf: "./public/Data Analytics with Python.pdf"
  },
  // Add more certifications as needed
];

const Certification = () => {
  return (
    <section id="certifications" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="flex overflow-x-auto hide-scrollbar space-x-4 p-2">
        {certificationsData.map((cert, index) => (
          <Certificationcard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certification;
