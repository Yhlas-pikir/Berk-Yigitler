import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./css.index.css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import config from "../../config.json";

import { useEffect, useState } from "react";
function SwiperWel({ currentLanguage }) {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category`, {
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
    <div className="swiper_wrapper">
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
        className="swiper-container"
        style={{ margin: "auto", left: 0, right: 0 }}
      >
        {data.map((d, i) => (
          <SwiperSlide key={i} className="swiper_slide">
            <img
              src={`${config.serverIP}:${config.serverPort}/${d.image}`}
              alt=""
            />
            <div>
              <p>{d.name[currentLanguage]}</p>
              {d.description[currentLanguage]}
              <div className="button">
                <Link to={`/products/${d.id}`} style={{ color: "#fff" }}>
                  Learn More &#x25B6;
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperWel;
