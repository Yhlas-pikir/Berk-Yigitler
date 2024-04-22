
import  Navbar  from "./components/Navbar/Navbar";
import call from "./assets/images//call.png"
import whatsapp from "./assets/images/whatsapp.png"
import Adhesives from "./components_products/Adhesives/Adhesives";
import Paints from "./components_products/Paints/Paints";
import TextileChem from "./components_products/TextileChem/TextileChem";
import Epoxy from "./components_products/Epoxy/Epoxy";
import SynDyes from "./components_products/SynDyes/SynDyes";
import Clean from "./components_products/Clean/Clean";
import Enzyme from "./components_products/Enzyme/Enzyme";
import Aboutus from "./components/Aboutus/Aboutus";
import All from "./components_products/All/All";
function ProductPage() {
  return (
    <div>
        <Navbar/>
        <All/> 
        <Aboutus/>
        <a href="tel:+99361471919"><div className="fixedcall" style={{backgroundColor:"white",height:50, width:50, position:"fixed", bottom: 30, left:10, borderRadius:"50%",display:"flex", alignItems:'center',justifyContent:'center',border:"1px solid black",zIndex:999}}>
          <img src={call} width={24} height={24} alt="" />
        </div>
        </a>
        <a href="https://wa.me/99361471919">
          <img style={{height:65, width:65, position:"fixed", bottom: 24, right:10,zIndex:999}} src={whatsapp} alt="" />
        
        </a>
    </div>
  );
}

export default ProductPage;
