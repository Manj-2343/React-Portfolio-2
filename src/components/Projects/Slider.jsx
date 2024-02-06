import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg",
    disc: "Crafting a seamless online shopping experience with my MERN stack e-commerce project. Leveraging MongoDB, Express.js, React, and Node.js to ensure efficient product management and an engaging user interface.",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/617fffdcfa159082ea3ef6a3_t5Gb3iMLNTSQEl07jUIJNHT6qCUftSKhE5JzlQMiCjtiYqxu-QXbLjxErDAKkU-VunGzx-pOkOhdAv5o2hRPNO4KTmdXHALYvzJSUGGPFca0RckUNbINFpBrbUlNm-Y-cBpIt7AB.jpeg",
    disc: "Transforming real estate transactions with my MERN stack project. Utilizing MongoDB, Express.js, React, and Node.js to create a powerful platform for property listings, seamless transactions, and enhanced user experiences.",
  },
  {
    img: "https://i.ytimg.com/vi/ZfqnUm7w6ig/maxresdefault.jpg",
    disc: "Built a robust MERN stack contact manager for seamless CRUD operations. Utilizing MongoDB, Express.js, React, and Node.js to create, retrieve, update, and delete contacts with ease.",
  },
  {
    img: "https://www.techwriter.org/wp-content/uploads/2020/08/Best-Free-Movie-Streaming-Apps-For-Android-and-PC-1200x900-1.jpg",
    disc: "Immerse yourself in a cinematic experience with my React and Redux-powered movie app. Explore a vast collection of films, manage favorites, and enjoy seamless state management for a dynamic and responsive user interface.",
  },
  {
    img: "https://www.contentwriting101.com/wp-content/uploads/2020/09/Build-Your-Portfolio.png",
    disc: "Elevate your online presence with my React-based portfolio, seamlessly blending creativity and functionality. Designed with a user-friendly interface using [UI library name], it showcases my skills and projects in a visually appealing and engaging manner.",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
