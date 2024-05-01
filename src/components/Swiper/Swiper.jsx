import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./css.index.css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import config from "../../config.json";
import locales from "../../locales.json";

import { useEffect, useState } from "react";
function SwiperWel({ currentLanguage }) {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}/category`, {
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
        // pagination={{ clickable: true }}
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
              src={`${config.serverIP}/${d.image}`}
              alt=""
            />
            <div>
              <p>{d && d.name[currentLanguage]}</p>
              {d && d.description[currentLanguage]}
                <Link className="button" to={`/products/${d.id}`} style={{ color: "#fff" }}>
                  {locales[currentLanguage||'tm']['Learn More']||'Learn More'}
                   &#x25B6;
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SwiperWel;
