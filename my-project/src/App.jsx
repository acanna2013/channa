import Navbar from "./components/Navbar"; // navigation bar configs
import './App.css'
import BackgroundEffect from "./BackgroundEffect"; // for the spotlight effect for cursor hovering
import AboutMe from './components/AboutMe';
import Timeline from './components/Experience';
// import { useEffect, useState } from 'react'; // for fade in effect
import { BrowserRouter as Router, Link } from 'react-router-dom'; // route between diff pages
import FadeIn from "./components/FadeIn";


// // add fade in effect, change state of isVisible
// const FadeInComponent = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className={`transition-opacity duration-100 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
//       {children}
//     </div>
//   );
// };

const experiences = [
  {
    position: 'software engineer intern',
    company: 'Amazon (One Medical)',
    link: 'https://www.onemedical.com/',
    description: 'currently on the Charting team',
    date: 'Jun 2024 - Present',
    skills: 'Ruby, Ruby on Rails, Typescript, Amazon AWS'
  },
  {
    position: 'machine learning intern',
    company: 'Tesla',
    link: 'https://www.tesla.com/',
    description: 'developed CNNs and neural networks to ensure the safety of residential audit workers, resulting in 95% accuracy.',
    date: 'Jan 2024 - May 2024',
    skills: 'Python, Keras, Tensorflow, scikit-learn, Docker, Amazon AWS, MySQL'
  },
  {
    position: 'data science intern',
    company: 'Caterpillar',
    link: 'https://www.caterpillar.com/',
    description: 'implemented a rules-based classification model, resulting in 99% accuracy and improving CAT machine performances by 60%',
    date: 'May 2023 - Aug 2023',
    skills: 'Python, Snowflake, PostgreSQL, Matplotlib'
  }
  // Add more experiences as needed
];

export const App = () => {
  return (
      <div>
        <BackgroundEffect/>
        <Navbar />
        <div className="mt-40">
          <FadeIn>
            <AboutMe />
          </FadeIn>

          <FadeIn>
          <section id="experience" className="work_experience">
            <Timeline experiences={experiences} />
          </section>
          </FadeIn>

          <FadeIn>
          <section id="projects" className="min-h-screen">
            <h1>Projects</h1>
            <p>This is the Projects section.</p>
          </section>
          </FadeIn>

          <FadeIn>
          <section id="contact" className="min-h-screen">
            <h1>contact</h1>
            <p>This is the contact section.</p>
          </section>
          </FadeIn>

          <FadeIn>
          <section id="resume" className="min-h-screen">
            <h1>resume</h1>
            <p>This is the resume section.</p>
          </section>
          </FadeIn>

        </div>
        

      </div>
      )
    }

export default App;

