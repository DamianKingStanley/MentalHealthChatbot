import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonies.css";
import student1 from "../../assest/student1.jpg";
import student2 from "../../assest/student2.jpg";
import student3 from "../../assest/student3.jpg";

const testimonies = [
  {
    name: "Stephanie Nwoke",
    testimony:
      "This chatbot has really helped me manage my stress. I feel more in control of my emotions.",
    image: student1,
  },
  {
    name: "Rejoice Ada",
    testimony:
      "The tips and strategies provided are practical and easy to follow. Highly recommended!",
    image: student2,
  },
  {
    name: "Anosike Wendy",
    testimony:
      "I love the mindfulness exercises. They have been a game-changer for my mental health.",
    image: student3,
  },
];

const Testimonies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimoniesSection">
      <h2>Student Testimonies</h2>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div key={index} className="testimony">
            <img src={testimony.image} alt={`${testimony.name}`} />
            <p className="testimonyText">"{testimony.testimony}"</p>
            <p className="testimonyName">- {testimony.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonies;
