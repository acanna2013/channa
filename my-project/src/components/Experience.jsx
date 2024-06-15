// create vertical bar to denote timeline
// map work experience to given variables

import './Experience.css'
const Experience = ({ experiences }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="timeline_bar" style={{ left: '32px' }}></div> 
        <ul className="list-none m-0 p-0">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-8">
              <div className="flex items-center mb-1">
                <div style={{ color: '#9AAB89'}}>
                  {index + 1}
                </div>
                <div className="ml-4">
                    <span className="text-sm text-gray-500">{experience.date}</span>
                  <h4 className="text-lg font-semibold" style={{ color: '#b38b6d' }}>{experience.position}</h4>
                  <h5 className="text-md font-medium" style={{ color: '#b38b6d' }}><a href={experience.link}>{experience.company}</a></h5>
                </div>
              </div>
              <div className="ml-7">
                <p className="text-gray-500">{experience.description}</p>
                <span className="text-sm text-gray-500">{experience.skills}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
