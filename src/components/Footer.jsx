import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-culture.jpg",
  },
  //Second image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-youth-affairs-and-sports.jpg",
  },
  //Third image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/150-years-gandhiji-janma-jayanti.png",
  },

  //Fourth image url

  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/gujarat-state-portal.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/CEO_logo_12072022.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/fit_india_logo.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },

  //   extra

  
];
const Footer = () => {
    return (
      <div className="foot">
        <hr />
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            // showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <img src={imageUrl.url} alt="logo" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <hr />
        <div className="foot-info-contect">
          <div className="info">
            <p className="infotext">
              Copyright © 2024-25 All right reserved PANARAIT Services
            </p>
            <p className="infotext">
              Directorate Of Library, Government of Gujarat
            </p>
            <p className="infotext">Mainted and Oprated by PANARAIT</p>
          </div>
          <div className="contect">
            <p className="infotext">
              Directorate Of Library Gandhinagar <br/> Sector-17, opp. Town-Hall, <br />
               
              Gandhinagar-382010 <br />
              Contact:- 07923221107 <br />
              Email:- directorateoflibraries@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
};
export default Footer;
