import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscArrowBoth } from "react-icons/vsc"
import "swiper/css"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"
import project5 from "../images/project5.png"
import project6 from "../images/project6.png"
import project7 from "../images/project7.png"
import project8 from "../images/project8.png"
import "../css/Projects.css"

export const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <div className="p-text-con">
        <p className="p-text1">recent projects</p>
        <p className="p-text2">portfolio</p>

        <div className="p-info">
          <p className="p-text3">( Hold & Drag the projects to see more! </p>
          <div className="p-animated-arrow">
            <VscArrowBoth />
          </div>
          <p className="p-closing-braces">)</p>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/deep_learning_chatbot" target="blank" className="swiper-link"><img src={project1} alt="" /></a>
            <p className="swiper-text">Tower-defense-game</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/arky-mc-tool" target="blank" className="swiper-link"><img src={project2} alt="" /></a>
            <p className="swiper-text">Arky-mc-tool</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/clicks-counter-python" target="blank" className="swiper-link"><img src={project3} alt="" /></a>
            <p className="swiper-text">clicks-counter-python</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/deep_learning_chatbot" target="blank" className="swiper-link"><img src={project4} alt="" /></a>
            <p className="swiper-text">deep_learning_chatbot</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/chatbot-dataset-creator" target="blank" className="swiper-link"><img src={project5} alt="" /></a>
            <p className="swiper-text">chatbot-dataset-creator</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/todo-list-app" target="blank" className="swiper-link"><img src={project6} alt="" /></a>
            <p className="swiper-text">todo-list-app</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/email-spammer/" target="blank" className="swiper-link"><img src={project7} alt="" /></a>
            <p className="swiper-text">email-spammer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-con">
            <a href="https://github.com/luisKisters/logging-bot-with-discord-notification" target="blank" className="swiper-link"><img src={project8} alt="" /></a>
            <p className="swiper-text">logging-bot-with-discord-notification</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
