import Navbar from "./components/Navbar"; // navigation bar configs
import './App.css'
import BackgroundEffect from "./BackgroundEffect"; // for the spotlight effect for cursor hovering


export const App = () => {
  return (
      <div>
        <BackgroundEffect/>
        <Navbar />
        <div className="mt-40">
          <section id="about" className="about_me">
            <h1 className="flex justify-between items-center p-14">hi :],</h1>
            <p>
              i'm an undergraduate senior, double majoring in computer science and data science @ <a href="https://www.cs.purdue.edu/" target="_blank">Purdue University</a>.
              <br/>
              <br/>
              i have an insatiable curiousity for numbers and their stories. i enjoy turning ideas into feasible and impactful products.
              <br/>
              <br/>
              my hobbies involve mechanical keyboards, legos, and exercise.
            </p>
          </section>
          
          <section id="experience" className="work_experience">
            <h1>i'm currently working at <a href="https://www.amazon.com/" target="_blank">Amazon</a> on the <a href="https://www.onemedical.com/" target="_blank">
              One Medical</a> team as a SWE intern.
            </h1>
            <br/><br/>

            <h1>i've previously worked at:</h1>
            <ul style={{ listStyleType: 'disc', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '10px' }}><b><a href="https://www.tesla.com/" target="_blank">Tesla</a> ML Intern</b>: Developed CNNs 
                and neural networks to ensure the safety of residential audit workers, resulting in 95% accuracy.</li>
              <li style={{ marginBottom: '10px' }}><b><a href="https://www.caterpillar.com/" target="_blank">Caterpillar</a> DS Intern</b>:
                Implemented a rules-based classification model, resulting in 99% accuracy and improving machine performances by 60%.
              </li>
            </ul>
            
          </section>


          <section id="contact" className="min-h-screen">
            <h1>Projects</h1>
            <p>This is the Projects section.</p>
          </section>

        </div>

      </div>
      )
    }

export default App;

