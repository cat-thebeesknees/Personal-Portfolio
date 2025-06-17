import "../Styles/Contact.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Resume from "./Resume";

const Reviews = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="review-con">
        <Resume />
      </div>
    </>
  );
};

export default Reviews;
