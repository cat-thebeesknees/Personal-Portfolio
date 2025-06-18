import "../Styles/Socials.css";

const Socials = () => {
  return (
    <>
      <div id="socials-container">
        <ul className="socials">
          <li className="social">
            <i>
              <a
                href="https://www.linkedin.com/in/catherine-hilton-61105b224"
                target="_blank"
                rel="noreferrer"
                className="bi bi-linkedin"
              ></a>
            </i>
          </li>

          <li className="social">
            <i>
              <a
                href="https://github.com/cat-thebeesknees"
                target="_blank"
                rel="noreferrer"
                className="bi bi-github"
              ></a>
            </i>
          </li>
          <li className="social">
            <i>
              <a
                href="https://www.discordapp.com/users/JustcallmeCat#4877"
                target="_blank"
                rel="noreferrer"
                className="bi bi-discord"
              ></a>
            </i>
          </li>

          <li className="emailMe">
            <i>
              <a
                href="mailto:hilton.webservices.llc@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bi bi-envelope"
              ></a>
            </i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
