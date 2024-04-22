
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';import "./css.index.css";
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


import IF_0 from "../../assets/images/adhesives.jpg"
import IF_1 from "../../assets/images/paints.jpg"
import IF_2 from "../../assets/images/TexChem.jpg"
import IF_3 from "../../assets/images/epoxx.jpg"
import IF_4 from "../../assets/images/synthetic.jpg"
import IF_5 from "../../assets/images/laundry.jpg"
import IF_6 from "../../assets/images/enz.png"
function SwiperWel(){
    return(
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
        style={{margin:"auto", left:0, right:0}}
        >
    <SwiperSlide className='swiper_slide'>
     <img src={IF_0}  alt="" /> 
    <div>
        <p>ADHESIVES</p>
        
        Unlock limitless possibilities with our premium line of adhesives, engineered to bond seamlessly and withstand the toughest challenges. Elevate your projects with our reliable and versatile adhesive solutions.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_1} alt="" />
        <div>
        <p>BOYALAR</p>
        
        Elevate your construction projects with our premium building paints, engineered for durability, vibrant color, and lasting beauty. From facades to interiors, trust our expertise to bring your vision to life with every brushstroke.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_2}  alt="" />
        <div>
        <p>TEXTILE CHEMS</p>
        
        Elevate your textile creations with our innovative range of specialty chemicals, meticulously formulated to enhance performance, durability, and aesthetic appeal. Trust in our expertise to bring out the best in your fabrics.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_3}  alt="" />
        <div>
        <p>EPOXY</p>
        
        Unlock the power of durability and versatility with our premium epoxy resin, your ultimate solution for crafting, construction, and creative projects.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_4}  alt="" />
        <div>
        <p>SYNTHETIC DYES</p>
        
        Experience vibrant hues that last a lifetime with our cutting-edge synthetic dyes, transforming your creations into works of art with unmatched color brilliance.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_5}  alt="" />
        <div>
        <p>Laundry &amp; Cleaning Additives</p>
        
        Elevate your laundry game with our potent cleaning additives, designed to banish stains, eliminate odors, and leave your clothes fresh and vibrant wash after wash.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className='swiper_slide'>
         <img src={IF_6}  alt="" />
        <div>
        <p>ENZYMES</p>
        
        Discover the secret to pristine cleanliness with our enzyme-powered solution, tackling tough stains and odors with the natural efficiency of Mother Nature herself.
        <div className='button'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
    </div>
    </SwiperSlide>
    

  </Swiper>
  </div>
    );
}
export default SwiperWel