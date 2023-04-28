import React from 'react';
import "./Slide.scss"
import Slider from "react-slick";
import slideImg from "././../../../img/видео.svg"
import SliderIcon2 from "./../../../img/Arrow 2.svg"
import SliderIcon1 from "./../../../img/Arrow 1.svg"

const Slide = () => {

    const settings = {
        infinite: true,
        slidesToShow: 2.5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <img className="review" src={SliderIcon1} alt="arrow"/>,
        prevArrow: <img className="review" src={SliderIcon2} alt="arrow"/>,
    };

    return (
        <section id="slide">
            <div className="slide">
                <h1>Отзывы студентов</h1>
                <div className="slide--sliders">
                    <Slider {...settings}>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Slide;