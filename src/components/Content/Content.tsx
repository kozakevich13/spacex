import styled from 'styled-components';
import slide_1 from '../../img/slide1.png'
import slide_2 from '../../img/slide2.png'
import slide_3 from '../../img/slide3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SlideElement = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  z-index: 2;
`;


function Content() {

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    attows: false,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <>
     <Slider {...settings}>
      <div>
        <SlideElement src={slide_1} alt="Slide 1" />
      </div>
      <div>
        <SlideElement src={slide_2} alt="Slide 2" />
      </div>
      <div>
        <SlideElement src={slide_3} alt="Slide 3" />
      </div>
    </Slider>
    </>
  );
}

export default Content;
