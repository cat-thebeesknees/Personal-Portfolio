import "../Styles/About.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Me";

const About = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="about-container">
        <div className="quote-container">
          <p className="personal-quote">
            &ldquo;When we seek to discover the best in others, we somehow bring
            out the best in ourselves.&rdquo;
            <br />
            -William Arthur Ward
          </p>
        </div>
        <div className="photo-container">
          <Profile />
        </div>

        <div className="about-con">
          <p className="about-paragraph">
            I&apos;ve genuinely enjoyed every job I&apos;ve had, but nothing
            compares to the love I have for working with code. My absolute
            favorite part is fixing problematic code, I have learned the most
            during times when I am stuck and need to dive deep into research to
            figure out a solution. I do not have a ton of experience yet, but
            I’m a fast learner and can learn anything put in front of me. I’m
            adaptable, reliable, and easy to work with.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
