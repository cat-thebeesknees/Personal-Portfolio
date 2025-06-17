// Tell webpack this JS file uses this image
import Me from "../Images/me.jpg";
import Flowers from "../Images/flowers.jpg";
import yellow from "../Images/yellow.jpg";
import Dog from "../Images/dog.jpg";
import Kids from "../Images/kids.jpg";
import Ember from "../Images/ember.jpg";
// Import result is the URL of your image
import "../Styles/Me.css";

console.log(Me);

function Profile() {
  return (
    <>
      <div className="gallery">
        <span style={{ "--i": 1 }}>
          <img id="me-img" src={Me} alt="Me" />
        </span>
        <span style={{ "--i": 2 }}>
          <img id="dog-img" src={Dog} alt="Dog" />
        </span>
        <span style={{ "--i": 3 }}>
          <img id="kids-img" src={Kids} alt="Kids" />
        </span>
        <span style={{ "--i": 4 }}>
          <img id="flowers-img" src={Flowers} alt="Flowers" />
        </span>
        <span style={{ "--i": 5 }}>
          <img id="ember-img" src={Ember} alt="Ember" />
        </span>
        <span style={{ "--i": 6 }}>
          <img id="yellow-img" src={yellow} alt="yellow" />
        </span>
        <span style={{ "--i": 7 }}>
          <img id="me-img" src={Me} alt="Me" />
        </span>
        <span style={{ "--i": 8 }}>
          <img id="kids-img" src={Kids} alt="Kids" />
        </span>
      </div>
    </>
  );
}

export default Profile;
