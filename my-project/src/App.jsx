import Navbar from "./components/Navbar"; // navigation bar configs
import './App.css'
import BackgroundEffect from "./BackgroundEffect"; // for the spotlight effect for cursor hovering
import AboutMe from './components/AboutMe';
import Timeline from './components/Experience';
import FadeIn from "./components/FadeIn";
import ProjectTile from "./components/Project";

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


const projects = [
  {
    title: 'Lumière Shorts',
    description: 'A curated short film streaming service on web and mobile',
    image: 'path-to-image1.jpg',
    tags: ['AWS', 'NextJS', 'Scikit-learn', 'Firebase']
  },
  {
    title: 'Deep Neural Network',
    description: 'Implementation and visualization of model fitting and learning',
    image: 'path-to-image2.jpg',
    tags: ['Python', 'NumPy', 'SymPy', 'Matplotlib']
  },
  {
    title: 'Gradient Descent',
    description: 'Implementation and visualization of machine learning algorithm',
    image: 'path-to-image3.jpg',
    tags: ['Python', 'NumPy', 'SymPy', 'Matplotlib']
  },
  {
    title: 'Terrain Generator',
    description: 'Terrain Generation using the Perlin Noise algorithm',
    image: 'path-to-image4.jpg',
    tags: ['Python', 'NumPy', 'Matplotlib']
  }
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
            {projects.map((project, index) => (
              <ProjectTile
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
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

