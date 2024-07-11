import Navbar from "./components/Navbar"; // navigation bar configs
import './App.css'
import BackgroundEffect from "./BackgroundEffect"; // for the spotlight effect for cursor hovering
import AboutMe from './components/AboutMe';
import Timeline from './components/Experience';
import FadeIn from "./components/FadeIn";
import ProjectTile from "./components/Project";
import Contact from "./components/Contact";

const experiences = [
  {
    position: 'software engineer intern',
    company: 'Amazon (One Medical)',
    link: 'https://www.onemedical.com/',
    description: 'currently on the Charting team.',
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
    description: 'implemented a rules-based classification model, resulting in 99% accuracy and improving CAT machine performances by 60%.',
    date: 'May 2023 - Aug 2023',
    skills: 'Python, Snowflake, PostgreSQL, Matplotlib'
  }
];

export const App = () => {
  return (
      <div>
        <BackgroundEffect/>
        <Navbar />
        <div className="mt-40">
          <FadeIn>
          <section id="intro" className="mt-40">
            <AboutMe />
            </section>
          </FadeIn>
          <FadeIn>
            <section id="experience" className="work_experience">
              <Timeline experiences={experiences} />
            </section>
          </FadeIn>

          <FadeIn>
          <section id="projects" className="mt-40 h-screen flex items-center justify-center">
            <ProjectTile />
          </section>
          </FadeIn>

          <FadeIn>
          <section id="contact" className="mt-40 items-center justify-center -mb-4">
            <Contact/>
            <footer class="text-center p-4 mt-20">
              made with tailwind css, 
              react js, and plain css.
              <br/>谢谢 xièxie for visiting.
            </footer>
          </section>
          </FadeIn>
        </div>      

      </div>
      )
    }

export default App;

