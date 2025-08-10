import KuljeetPanesarCV from "../documents/KuljeetPanesarCV.pdf";
import fdmLogo from "../images/fdmLogo.jpg";
import shellLogo from "../images/shellLogo.png";
import merciruaLogo from "../images/mercuriaLogo.png";
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
          Enthusiastic and highly driven Software Developer with 2 years&#39; experience in developing and maintaining
          scalable applications in the energy and commodities sectors. Academic background in mathematics with
          a deep understanding of algorithms and a proactive approach to problem-solving. Proficient in Java with
          an interest and hands-on experience in TypeScript and React. Passionate about self -learning to keep up
          to date on best practices and new technologies/frameworks. Thrive in high pressure environments and
          excel at collaborating across teams, understanding requirements and delivering high-quality solutions.
          </p>
        </div>
      </div>
      

      <div>
        <h1>Experience</h1>

        <div className="experienceSection">
          <div>
            <h2>Software Engineer</h2>
            <img className="mercuriaLogo" src={merciruaLogo} alt="Mercuria Logo" />
            <h3>Mercuria</h3>
            <h3>03/2024 &#45; Present</h3>
          </div>

          <p>
            Member of the Risk Technology team, maintaining and enhancing microservices used to evaluate and
            store PV and Risk for trading systems
          </p>

          <p>
            <ul>
              <li>
                Developed and maintained various risk data warehouse services built primarily in Java and Spring
                Boot, using REST APIs, gRPC, message-driven architecture (Kafka) and data pipelines to ensure
                reliable and scalable access of risk data across the front and middle office systems.
              </li>
              <li>
                Integrated a new system with gRPC into existing microservices, enabling real-time data streaming.
              </li>
              <li>
                Implemented authentication mechanisms in services to ensure secure access and data integrity.
              </li>
              <li>
                Collaborated with cross-functional teams in order to understand and deliver business requirements
                quickly and efficiently.
              </li>
              <li>
                Interacted with clients of design tools used at the company to request added functionality to improve
                authorization.
              </li>
              <li>
                Resolved high-priority production incidents with tight deadlines, minimising downtime for riskcritical systems.
              </li>
              <li>
                Managed deployments using Kubernetes, ensuring smooth rollout of services with no downtime.
              </li>
              <li>
                Demoed new features and enhancements across departments in the organisation, using feedback
                to improve current processes and implement beneficial features.
              </li>
              <li>
                Built a solid foundation on design principles and fundamentals of software engineering and
                continuously upskilling to ensure I adhere to best practices in my code.
              </li>
              <li>
                Proactively expanded business and technical knowledge, communicated across all departments in
                the company and engaged in internal mentorship to continuously improve technical skills.
              </li>
            </ul>
          </p>

          <h3>Projects</h3>
          <p>
            <ul>
              <li>
                Integrated a new flow to value new trades via gRPC that had not been modelled in our existing
                systems to get valuations and schedules from an in-house model created by the Strats.
              </li>
              <li>
                Created new ETL pipelines in an existing project using Spring Batch. The jobs run on a quartz
                scheduler to pick up market data from broker files from a variety of sources, read, process and
                write the data into position curves to be used by Middle Office and traders.
              </li>
            </ul>
          </p>

          <h3>Tech Stack</h3>
          <div className="techStack">
            <button>Java</button>
            <button>SpringBoot</button>
            <button>SQL</button>
            <button>React</button>
            <button>TypeScript</button>
            <button>Kafka</button>
            <button>Kubernetes</button>
            <button>Docker</button>
            <button>Denodo</button>
          </div>
        </div>

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
