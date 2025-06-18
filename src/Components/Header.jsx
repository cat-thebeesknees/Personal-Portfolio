import logo from "../Images/logo.png"; // Tell webpack this JS file uses this image
import "../Styles/Header.css";
import Socials from "./Socials";
console.log(logo);

function Header() {
  // Import result is the URL of your image
  return (
    <>
    <div className="header-container">
     <img id="logo-img" src={logo} alt="Logo" />
     <Socials />
     </div>
     </>
  );
    }

export default Header;
