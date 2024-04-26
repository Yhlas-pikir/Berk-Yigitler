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
      {data.map((d, index) => (
          <div key={index}>
            <h1>{d.name}</h1>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              speed={600}
              spaceBetween={40}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="section_slider"
              style={{ margin: "auto", left: 0, right: 0 }}
            >
              {d.galleries.map((value, index) => (
                <SwiperSlide key={index} className="section_slide">
                  <img
                  style={{aspectRatio:"16/9"}}
                    src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      <div className="welcome_wrapper_mobile">
        {data.map((d, index) => (
          <div key={index}>
            <h1>{d.name}</h1>
            <Swiper
              modules={[ Autoplay]}
              slidesPerView={1}
              speed={600}
              spaceBetween={40}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="section_slider"
            >
              {d.galleries.map((value, index) => (
                <SwiperSlide key={index} className="section_slide">
                  <img
                    src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </>
  );
}

export default Welcome;
