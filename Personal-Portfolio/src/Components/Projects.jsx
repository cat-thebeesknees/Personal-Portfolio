import Header from "./Header";

import NavBar from "./NavBar";
import "../Styles/Projects.css";
import react from "../Images/react.png";
import mcj from "../Images/mcj.png";
import paint from "../Images/paint.png";
import list from "../Images/list.png";
import first from "../Images/first.png";
import Touch1 from "../Images/Touch1.jpg";
import Touch2 from "../Images/Touch2.jpg";
import Touch3 from "../Images/Touch3.jpg";
import Responsive1 from "../Images/Responsive1.jpg";
import Responsive2 from "../Images/Responsive2.jpg";
import Responsive3 from "../Images/Responsive3.jpg";
import Responsive5 from "../Images/Responsive5.jpg";

const Projects = () => {
  return (
    <>
      <Header />
      <NavBar />
      <h2 id="language-heading">Tech Stack</h2>
      <div className="projects-container">
        <ul id="language-icon">
          <li id="language-icon-item">
            <i className="devicon-babel-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-eslint-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-express-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-github-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-git-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-html5-plain-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-jasmine-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-javascript-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-jquery-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-linux-plain"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-markdown-original"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-nextjs-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-nodejs-plain"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-npm-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-oracle-original colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-postgresql-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-react-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-ssh-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-tailwindcss-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-ubuntu-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-vuejs-plain-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-visualstudio-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-vscode-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-webpack-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-threejs-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-css3-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-azure-plain-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-kibana-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-netlify-plain colored"></i>
          </li>
          {/* <li id="language-icon-item">
          <i className="devicon-php-plain colored"></i>
        </li>
        <li id="language-icon-item">
          <i className="devicon-powershell-plain"></i>
        </li> */}
        </ul>
      </div>

      <h2 id="language-heading">Work Experience - Responsive & Touch Work</h2>
      <div className="projects-container">
        <ul id="class-projects-icon">
          <li>
            <p className="project-labels">Container Sizes</p>
            <a href={Touch1} rel="noreferrer" target="_blank">
              <img src={Touch1} alt="Touch1" height="122px" width="150px" />
            </a>
          </li>
          <li>
            <p className="project-labels">Redesign</p>
            <a href={Touch2} rel="noreferrer" target="_blank">
              <img src={Touch2} alt="Touch2" height="122px" width="150px" />
            </a>
          </li>
          <li>
            <p className="project-labels">Semetry</p>
            <a href={Touch3} rel="noreferrer" target="_blank">
              <img src={Touch3} alt="Touch3" height="122px" width="150px" />
            </a>
          </li>
          <li>
            <p className="project-labels">Mobile Uniformity</p>
            <a href={Responsive1} rel="noreferrer" target="_blank">
              <img
                src={Responsive1}
                alt="Responsive1"
                height="122px"
                width="150px"
              />
            </a>
          </li>

          <li>
            <p className="project-labels">Mobile View</p>
            <a href={Responsive2} rel="noreferrer" target="_blank">
              <img
                src={Responsive2}
                alt="Responsive2"
                height="122px"
                width="150px"
              />
            </a>
          </li>

          <li>
            <p className="project-labels">Image Visibility</p>
            <a href={Responsive3} rel="noreferrer" target="_blank">
              <img
                src={Responsive3}
                alt="Responsive3"
                height="122px"
                width="150px"
              />
            </a>
          </li>

          <li>
            <p className="project-labels">Mobile Styling</p>
            <a href={Responsive5} rel="noreferrer" target="_blank">
              <img
                src={Responsive5}
                alt="Responsive5"
                height="122px"
                width="150px"
              />
            </a>
          </li>
        </ul>
      </div>

      <h2 id="language-heading">Class Projects</h2>
      <div className="projects-container">
        <ul id="class-projects-icon">
          <li>
            <p className="project-labels">React Router</p>
            <a
              href="https://cat-react-router.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={react} alt="react" />
            </a>
          </li>
          <li>
            <p className="project-labels">JS Functions</p>
            <a
              href="https://cats-strangers-things.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={mcj} alt="mcj" />
            </a>
          </li>
          <li>
            <p className="project-labels">Create Element</p>
            <a
              href="https://color-picker-cat.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={paint} alt="paint" />
            </a>
          </li>
          <li>
            <p className="project-labels">Local API</p>
            <a
              href="https://cat-contact-list.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <img src={list} alt="list" />
            </a>
          </li>

          <li>
            <p className="project-labels">First Project</p>
            <a
              href="https://puppy-pals-cat.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={first} alt="first" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
