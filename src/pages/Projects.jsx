// import snakeGameImg from "../images/snakeGameImg.JPG";
import { Carousel } from "../components/Carousel";
import "../styles/Projects.css";

const Projects = () => {
  const itemsSpotify = [
    {
      title: "Landing Page",
      icon: require("../images/landingPage.JPG"),
    },
    {
      title: "Logged In Page",
      icon: require("../images/loggedIn.JPG"),
    },
    {
      title: "Example Search",
      icon: require("../images/edSearch.JPG"),
    },
    {
      title: "Artist Details",
      icon: require("../images/artistDetails.JPG"),
    },
  ];

  const itemsNotes = [
    {
      title: "Landing Page",
      icon: require("../images/noteLandingPage.JPG"),
    },
    {
      title: "Title Search",
      icon: require("../images/noteSearch.JPG"),
    },
    {
      title: "Tags Search",
      icon: require("../images/noteTagSearch.JPG"),
    },
    {
      title: "New Note",
      icon: require("../images/noteNew.JPG"),
    },
    {
      title: "Note View",
      icon: require("../images/noteView.JPG"),
    },
    {
      title: "Note Edit",
      icon: require("../images/noteEdit.JPG"),
    },
  ];

  const itemsQuiz = [
    {
      title: "Landing Page",
      icon: require("../images/quizLanding.JPG"),
    },
    {
      title: "Quiz Question",
      icon: require("../images/quizQ.JPG"),
    },
    {
      title: "Right Answer",
      icon: require("../images/quizRight.JPG"),
    },
    {
      title: "Wrong Answer",
      icon: require("../images/quizWrong.JPG"),
    },
    {
      title: "Quiz End",
      icon: require("../images/quizEnd.JPG"),
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>

      <p>
        Here are a couple of projects that I have created in the past few
        months. I have focused primarily on frontend technologies for these
        examples.
      </p>

      <div className="project-container">
        <div className="project">
          <h3>Spotify App</h3>
          <div className="project-text">
            <p>I created a Spotify App using their API.</p>
            <p>
              You need a Spotify account to log in for access to use the app.
            </p>
            <p>
              This app allows the user to search for artists available on
              Spotify. It will search through the Spotify database and retrieve
              the top 15 artists and display their names and pictures. To find
              more details about the artists, simply hover over their picture or
              name and their top 5 tracks and albums will be shown.
            </p>
            <p>Check out the website to try it out for yourself:</p>
            <p>
              <a
                href="https://kuljeetpanesar.github.io/spotify-app/"
                target="_blank"
                rel="noreferrer noopener"
                className="git-link"
              >
                https://kuljeetpanesar.github.io/spotify-app/
              </a>
            </p>
          </div>

          <div className="image-temp">
            <Carousel items={itemsSpotify} width="100%" />
          </div>
          <div className="projectTechStack">
            <button>React</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project">
          <div>
            <h3>Note App</h3>
            <div className="project-text">
              <p>
                I created a notes app using Vite, React, TypeScript and
                Bootstrap.
              </p>
              <p>
                The landing page allows the user to view all the notes that they
                have created. The user can also search for a note by its title
                and/or tags. There is an option to edit existing tags on this
                page. The user can also create new notes and add exisitng or new
                tags. Existing notes can be edited or deleted.
              </p>
              <p>All of the data is stored locally.</p>
              <p>
                <a
                  href="https://github.com/KuljeetPanesar/note-taking-app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Click here to view the repository on my GitHub
                </a>
              </p>
            </div>

            <div className="image-temp">
              <Carousel items={itemsNotes} width="100%" />
            </div>
          </div>
          <div className="projectTechStack">
            <button>React</button>
            <button>Vite</button>
            <button>TypeScript</button>
            <button>Bootstrap</button>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project">
          <h3>Quiz App</h3>
          <div className="project-text">
            <p>
              I created a multiple choice Trivia Quiz App using the Open Trivia
              DB API.
            </p>
            <p>
              This is a mobile friendly app that uses the api to fetch random
              trivia questions. The game begins when you press start. The
              question appears wtih the four options to select. The correct
              answers are highlighted in green, wrong in red. The score is kept
              as you select your answers along with the opportunity to see the
              correct answer before moving to the next question.
            </p>
            <p>
              Check out the app for a challenge! Can you get the high score of
              10?
            </p>
            <p>
              <a
                href="https://kuljeetpanesar.github.io/react-quiz/"
                target="_blank"
                rel="noreferrer noopener"
                className="git-link"
              >
                https://kuljeetpanesar.github.io/react-quiz/
              </a>
            </p>
          </div>

          <div className="image-temp">
            <Carousel items={itemsQuiz} width="100%" />
          </div>
          <div className="projectTechStack">
            <button>React</button>
            <button>HTML</button>
            <button>Styled Components</button>
            <button>TypeScript</button>
          </div>
        </div>
      </div>

      <p>
        Check out my{" "}
        <a
          href="https://github.com/KuljeetPanesar"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>{" "}
        for more of my projects!
      </p>
    </div>
  );
};

export default Projects;
