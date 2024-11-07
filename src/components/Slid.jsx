import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://historyofvadodara.in/wp-content/uploads/Central-Library.jpg",
    caption: "Baroda Central Library",
  },
  {
    url: "http://rrrlf.nic.in/NML/Images/ML/SCLGandhinagarGujarat/2.jpeg",
    caption: "Gandhinagar Central Library",
  },
  
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="slide">
            <img
              className="slidimage"
              style={{ width: "100%" }}
              src={fadeImage.url}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;