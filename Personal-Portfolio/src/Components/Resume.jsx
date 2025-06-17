import "../Styles/Resume.css";
import TechResume from "../Images/TechResume.docx";
import ResumeImg from "../Images/ResumeImg.png";
import FullstackImg from "../Images/FullstackImg.png";
import Fullstack from "../Images/Fullstack.pdf";
import JobRef from "../Images/JobRef.docx";
import RecImg from "../Images/RecImg.png";

const Resume = () => {
  return (
    <>
      <div className="resume-container">
        <h2 id="resume-heading">Resume | References | Certificates</h2>
        <div className="creds-container">
          <ul id="resume-icon">
            <li>
              <p className="resume-labels">Resume</p>
              <a href={TechResume} rel="noreferrer" target="_blank">
                <img
                  src={ResumeImg}
                  alt="ResumeImg"
                  height="122px"
                  width="150px"
                />
              </a>
            </li>
            <li>
              <p className="resume-labels">Reference</p>
              <a href={JobRef} rel="noreferrer" target="_blank">
                <img src={RecImg} alt="RecImg" height="122px" width="150px" />
              </a>
            </li>
            <li>
              <p className="resume-labels">Certificate</p>
              <a href={Fullstack} rel="noreferrer" target="_blank">
                <img
                  src={FullstackImg}
                  alt="FullstackImg"
                  height="122px"
                  width="150px"
                />
              </a>
            </li>
          </ul>
        </div>

        <h2 id="resume-heading">Customer & Supervisor Comments</h2>
        <div className="comment-container">
          <ul id="reviews-icon">
            <li>
              <p className="review-item-one">
                &quot;Catherine is like a 20 watt lightbulb, she exudes
                positivity no matter what&#39;s going on in life. // Atleast in
                my small observations.&quot;
                <br />
                -Rob | Lead Developer
              </p>
            </li>
            <li>
              <p className="review-item-two">
                &quot;You are awesome!!! Thanks!&quot;
                <br />
                &quot;Thank you for all your assistance, as always.&quot;
                <br />
                -Edna | Program Services Specialist
              </p>
            </li>
            <li>
              <p className="review-item-three">
                &quot;Excellent, thanks so much as always.&quot;
                <br />
                -Mike | Training Specialist
              </p>
            </li>
            <li>
              <p className="review-item-four">
                &quot;You rock!&quot;
                <br />
                &quot;Thank you for all you do managing our website.&quot;
                <br />
                -Eleazar | Multi Media Support
              </p>
            </li>
            <li>
              <p className="review-item-five">
                &quot;Everything works so well -- we are really happy. Thanks
                again!&quot;
                <br />
                &quot;Awesome - thanks Catherine!!! It looks great!&quot;
                <br />
                -Tracy | Museum Curator
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
