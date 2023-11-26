import KuljeetPanesarCV from "../documents/KuljeetPanesarCV.pdf";
import fdmLogo from "../images/fdmLogo.jpg";
import shellLogo from "../images/shellLogo.png";
import "../styles/AboutMe.css";

const WorkExperience = () => {
  return (
    <div>
      <div>
        <div>
          <h1>About Me</h1>
        </div>

        <div className="aboutMe">
          <p>
            Throughout my life I had always excelled at mathematics, it forever
            being one of my main interests. The versatility of the subject
            encouraged me to attend Aberystwyth University, from which I
            graduated with an upper second-class degree. My introduction into
            the world of data programming began in university consisting of
            learning basic Python and R skills for mathematical analysis in
            fields such as finite element analysis. This ultimately sparked my
            interest to pursue my newfound passion to become a software
            developer.
          </p>
          <p>
            The start of my tech journey began by me learning some HTML, CSS and JavaScript basics
            before joining FDM where I received a certification in Software
            Development. The training provided was primarily in Java, touching on additional
            frontend technologies such as React.
           
          </p>
          <p>
            I have an analytical and logical approach to solving problems with
            an innovative mind for solutions due to my mathematical background.
            By using critical thinking, I can formulate unique solutions whilst
            evaluating benefits and drawbacks of each aspect. I have has worked
            with a broad range of technologies and I am consistently challenging myself to widen the scope of my skills by learning more or delving into new projects. 
          </p>
        </div>
      </div>

      <div>
        <h1>Experience</h1>
        <div className="experienceSection">
          <div>
            <h2>Software Development Consultant</h2>
            <img className="fdmLogo" src={fdmLogo} alt="FDM Logo" />
            <h3>FDM Group</h3>
            <h3>04/2023 &#45; Present</h3>
          </div>

          <p>
            Completed 14 weeks of training to obtain my Software Development
            certification. Successfully secured a placement at Shell prior to
            starting training.
          </p>

          <p>
            <ul>
              <li>
                Attention to detail: Participated in code reviews with peers to
                help debug my own and others&#39; work. Additionally using my
                analytical capabilities to refactor code to be more concise and
                readable.
              </li>
              <li>
                Creativity: Produced unique designs and concepts in the frontend
                for projects throughout training whilst ensuring full
                functionality.
              </li>
              <li>
                Communication: Improved verbal and written communication in
                terms of programming to explain code to a range of experience
                levels.
              </li>
              <li>
                Organisation and Time Management: Adhering to strict weekly
                deadlines for assessments whilst ensuring quality of work and
                understanding new concepts fully.
              </li>
              <li>
                Problem Solving: Used a logical approach to solve new problems
                with the aid of all available resources.
              </li>
            </ul>
          </p>

          <h3>Tech Stack</h3>
          <div className="techStack">
            <button>Java</button>
            <button>OOD</button>
            <button>SQL</button>
            <button>UNIX</button>
            <button>Data Access & Web API</button>
            <button>WebApps</button>
            <button>JavaScript</button>
            <button>SpringBoot & MicroServices</button>
            <button>React</button>
            <button>APM</button>

            <div>
              <p>
                Check out the Barbie themed E-Commerce site created during the
                final week of training:
                <a
                  href="https://github.com/rtasalem/barbie-ecommerce-website"
                  target="blank"
                >
                  <button className="buttonLink">Final Project</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="experienceSection">
          <div>
            <h2>Software Developer</h2>
            <img className="shellLogo" src={shellLogo} alt="Shell Logo" />
            <h3>Shell</h3>
            <h3>08/2023 &#45; 11/2023</h3>
          </div>

          <p>
            Received exposure to a wide range of programming languages and
            methodologies.
          </p>

          <p>
            <ul>
              <li>
                Active Listening: Engaged in conversations with highly
                experienced members of the leadership team to understand steps
                to take to progress efficiently through my own career.
              </li>
              <li>
                Innovation: Conceptualised a potential new system to optimise
                project allocation to benched employees improving cost and time
                efficiency.
              </li>
              <li>
                Problem Solving: Observed gaps in the operational systems and
                proposed new ideas that could be beneficial for managers going
                forward.
              </li>
              <li>
                Upskilling: Engaged in LinkedIn Learning and developed fully
                functioning projects using new programming languages to grasp
                new concepts at a higher level.
              </li>
            </ul>
          </p>

          <h3>Tech Stack</h3>
          <div className="techStack">
            <button>React</button>
            <button>Node.js</button>
            <button>JavaScript</button>
            <button>TypeScript</button>
            <button>Microsoft PowerApps</button>
            <button>Docker</button>
            <button>Cypress</button>
            <button>GraphQL</button>
          </div>
        </div>
      </div>

      <p>
        For more information about me:
        <a
          href={KuljeetPanesarCV}
          download="Kuljeet Panesar CV"
          target="_blank"
        >
          <button className="buttonLink">Download my CV</button>
        </a>
      </p>
    </div>
  );
};

export default WorkExperience;
