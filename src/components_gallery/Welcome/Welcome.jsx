import React, { useEffect, useState } from "react";
import adhs from "../../assets/images/adhesives.jpg";
import paints from "../../assets/images/paints.jpg";
import texchem from "../../assets/images/TexChem.jpg";
import "./css.index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./css.index.css";
import "swiper/css/pagination";
import config from "../../config.json";

function Welcome() {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/gallery`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="welcome_wrapper_desk">
        {data.map((d) => (
          <>
            <h1>{d.name}</h1>
            <div className="section_wrapper">
              {d.galleries.map((value) => (
                <div>
                  <img
                    alt=""
                    src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                  />
                </div>
              ))}
            </div>
          </>
        ))}
        {/* 
        <h2>Chemical Marvels</h2>
        <div className="section_wrapper">
          <div>
            <img src={adhs} alt="" />
          </div>
          <div>
            <img src={paints} alt="" />
          </div>
          <div>
            <img src={texchem} alt="" />
          </div>
        </div>

        <h2>Everyday Moments</h2>
        <div className="section_wrapper">
          <div>
            <img src={adhs} alt="" />
          </div>
          <div>
            <img src={paints} alt="" />
          </div>
          <div>
            <img src={texchem} alt="" />
          </div>
        </div>

        <h2>Delivering to our clients</h2>
        <div className="section_wrapper">
          <div>
            <img src={adhs} alt="" />
          </div>
          <div>
            <img src={paints} alt="" />
          </div>
          <div>
            <img src={texchem} alt="" />
          </div>
        </div>

        <h2>Safety First</h2>
        <div className="section_wrapper">
          <div>
            <img src={adhs} alt="" />
          </div>
          <div>
            <img src={paints} alt="" />
          </div>
          <div>
            <img src={texchem} alt="" />
          </div>
        </div> */}
      </div>

      <div className="welcome_wrapper_mobile">
        {data.map((d) => (
          <>
            <h1>{d.name}</h1>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              speed={600}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="section_slider"
              style={{ margin: "auto", left: 0, right: 0 }}
            >
              {d.galleries.map((value) => (
                <SwiperSlide className="section_slide">
                  <img
                    src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ))}

        {/* <h2>Chemical Marvels</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={600}
          spaceBetween={30}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          loop={true}
          className="section_slider"
          style={{ margin: "auto", left: 0, right: 0 }}
        >
          <SwiperSlide className="section_slide">
            <img src={adhs} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={paints} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={texchem} alt="" />
          </SwiperSlide>
        </Swiper>

        <h2>Everyday Moments</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={600}
          spaceBetween={30}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          loop={true}
          className="section_slider"
          style={{ margin: "auto", left: 0, right: 0 }}
        >
          <SwiperSlide className="section_slide">
            <img src={adhs} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={paints} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={texchem} alt="" />
          </SwiperSlide>
        </Swiper>

        <h2>Delivering to our clients</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={600}
          spaceBetween={30}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          loop={true}
          className="section_slider"
          style={{ margin: "auto", left: 0, right: 0 }}
        >
          <SwiperSlide className="section_slide">
            <img src={adhs} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={paints} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={texchem} alt="" />
          </SwiperSlide>
        </Swiper>

        <h2>Safety First</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={600}
          spaceBetween={30}
          autoplay={{
            delay: 2700,
            disableOnInteraction: false,
          }}
          loop={true}
          className="section_slider"
          style={{ margin: "auto", left: 0, right: 0 }}
        >
          <SwiperSlide className="section_slide">
            <img src={adhs} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={paints} alt="" />
          </SwiperSlide>
          <SwiperSlide className="section_slide">
            <img src={texchem} alt="" />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
}

export default Welcome;
