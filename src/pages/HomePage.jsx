import "../styles/Hero.css";
import codingHero from "../images/codingHero.jpg";

const HomePage = () => {
  return (
    <div className="heroContainer">
      <img
        className="codingHero"
        src={codingHero}
        alt="Coding background hero"
      />

      <div className="heroText">
        <div class="overlay"></div>

        <div class="text">
          <div class="wrapper">
            <div id="W" class="letter">
              W
            </div>
          </div>
          <div class="wrapper">
            <div id="E" class="letter">
              E
            </div>
          </div>
          <div class="wrapper">
            <div id="L" class="letter">
              L
            </div>
          </div>
          <div class="wrapper">
            <div id="C" class="letter">
              C
            </div>
          </div>
          <div class="wrapper">
            <div id="O" class="letter">
              O
            </div>
          </div>
          <div class="wrapper">
            <div id="M" class="letter">
              M
            </div>
          </div>
          <div class="wrapper">
            <div id="E" class="letter">
              E
            </div>
          </div>
        </div>
        <h2 className="effect">To my software development portfolio</h2>
      </div>
    </div>
  );
};

export default HomePage;
