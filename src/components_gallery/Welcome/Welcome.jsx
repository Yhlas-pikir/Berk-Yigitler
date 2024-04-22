import React from 'react'
import adhs from "../../assets/images/adhesives.jpg"
import paints from "../../assets/images/paints.jpg"
import texchem from "../../assets/images/TexChem.jpg"
import "./css.index.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';import "./css.index.css";
import 'swiper/css/pagination';
function Welcome() {
  return (
    <>
    <div className='welcome_wrapper_desk'>
        <h1>Welcome to our Gallery</h1>

        <div className='section_wrapper'>
            <div><img src={adhs} alt="" /></div>
            <div><img src={paints} alt="" /></div>
            <div><img src={texchem} alt="" /></div>
        </div>

        <h2>Chemical Marvels</h2>
        <div className='section_wrapper'>
            <div><img src={adhs} alt="" /></div>
            <div><img src={paints} alt="" /></div>
            <div><img src={texchem} alt="" /></div>
        </div>
        
        <h2>Everyday Moments</h2>
        <div className='section_wrapper'>
            <div><img src={adhs} alt="" /></div>
            <div><img src={paints} alt="" /></div>
            <div><img src={texchem} alt="" /></div>
        </div>

        <h2>Delivering to our clients</h2>
        <div className='section_wrapper'>
            <div><img src={adhs} alt="" /></div>
            <div><img src={paints} alt="" /></div>
            <div><img src={texchem} alt="" /></div>
        </div>

        <h2>Safety First</h2>
        <div className='section_wrapper'>
            <div><img src={adhs} alt="" /></div>
            <div><img src={paints} alt="" /></div>
            <div><img src={texchem} alt="" /></div>
        </div>
    </div>

    <div className='welcome_wrapper_mobile'>
        <h1>Welcome to our Gallery</h1>
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
        style={{margin:"auto", left:0, right:0}}
        > 
            <SwiperSlide className="section_slide"><img src={adhs} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={paints} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={texchem} alt="" /></SwiperSlide>
        </Swiper>
     
        <h2>Chemical Marvels</h2>
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
        style={{margin:"auto", left:0, right:0}}
        > 
            <SwiperSlide className="section_slide"><img src={adhs} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={paints} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={texchem} alt="" /></SwiperSlide>
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
        style={{margin:"auto", left:0, right:0}}
        > 
            <SwiperSlide className="section_slide"><img src={adhs} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={paints} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={texchem} alt="" /></SwiperSlide>
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
        style={{margin:"auto", left:0, right:0}}
        > 
            <SwiperSlide className="section_slide"><img src={adhs} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={paints} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={texchem} alt="" /></SwiperSlide>
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
        style={{margin:"auto", left:0, right:0}}
        > 
            <SwiperSlide className="section_slide"><img src={adhs} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={paints} alt="" /></SwiperSlide>
            <SwiperSlide className="section_slide"><img src={texchem} alt="" /></SwiperSlide>
        </Swiper>
    </div>
    </>
  )
}

export default Welcome