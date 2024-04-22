import Emailus from "./components/Emailus/Emailus";
import MapPart from "./components/MapPart/MapPart";
import Markets from "./components/Markets/Markets";
import  Navbar  from "./components/Navbar/Navbar";
import SwiperWel from "./components/Swiper/Swiper";
import Welcome from "./components/Welcome/Welcome";
import call from "./assets/images//call.png"
import whatsapp from "./assets/images/whatsapp.png"
import Aboutus from "./components/Aboutus/Aboutus";
function Homepage() {
  return (
    <div>
        <Navbar/>
        <SwiperWel/>
        <Welcome/>
        <Markets/>
        <Emailus/>
        <MapPart />
        <a href="tel:+99361471919"><div className="fixedcall" style={{backgroundColor:"white",height:50, width:50, position:"fixed", bottom: 30, left:10, borderRadius:"50%",display:"flex", alignItems:'center',justifyContent:'center',border:"1px solid black",zIndex:999}}>
          <img src={call} width={24} height={24} alt="" />
        </div>
        </a>
        <a href="https://wa.me/99365644141">
          <img style={{height:65, width:65, position:"fixed", bottom: 24, right:10,zIndex:999}} src={whatsapp} alt="" />
        
        </a>
        <Aboutus />
    </div>
  );
}

export default Homepage;
