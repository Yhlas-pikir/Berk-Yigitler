

import "./css.index.css";
import back_glue from '../../assets/images/glue.webp'
import back_paint from '../../assets/images/paints.jpg'
import back_syndyes from '../../assets/images/synDyes.jpg'
import back_epoxy from '../../assets/images/epoxy.jpg'
import back_enz from '../../assets/images/enzyme.webp'
import back_soft from '../../assets/images/softeners.jpg'
import back_chem from '../../assets/images/chemicals.jpg'
import back_clean from '../../assets/images/clean.jpg'
import { Link } from "react-router-dom";
function Markets(){
    function rotate(id){
    if (window.screen.width < 768) {
        console.log("smaller")
        document.getElementById(id).classList.toggle("rotated");
    }
    else console.log("larger")
}
    return(
        <div className="markets_wrapper">
            <div className="cell1"> 
                <div className="cell1_txt">
                    <p style={{color: "#009A4E",lineHeight:0.8,marginBottom:0,fontSize:"37px"}}>OUR MARKETS</p>
                    <div className="divider1"></div>
                    <p style={{color:"#fff"}}>At Berk Ýigitler we cater to a diverse range of industries and sectors worldwide. From household and personal care products to industrial manufacturing and water treatment, our innovative chemical solutions are tailored to meet the unique needs of each market we serve. With a commitment to quality, sustainability, and customer satisfaction, we continuously strive to deliver cutting-edge products and services that drive success for our clients across the globe.</p>
                </div>
            </div>


            <div className="cell2 flip-card" onClick={() => rotate("1")}>
                <div className="flip-card-inner original" id= '1'>
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}  src={back_glue} alt="" />
                    <div >GLUES</div>
                </div>
                <div className="flip-card-back">
                <h3 > GLUES</h3>
				<p>Strene Acrylic, Printing Binder, Cellophane Glue, Carpet Glue, Carpet Latex, Skeleton Glue, and more!</p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div>
                </div>
                </div>
            </div>


            <div className="cell3 flip-card" onClick={() => rotate("2")}>
                <div className="flip-card-inner" id="2">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img height={"100%"}   src={back_paint} alt="" />
                    <div >PAINTS</div>
                </div>
                <div className="flip-card-back">
                <h3 > PAINTS</h3>
				<p>Ceiling paint, Interior Acrylic Primer, Interior Silicone, Exterior Acrylic Paint, Satin Paint, Fasarit and more! </p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell4 flip-card" onClick={() => rotate("3")}>
                <div className="flip-card-inner" id="3">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}   src={back_syndyes} alt="" />
                    <div >SYNTHETIC DYES</div>
                </div>
                <div className="flip-card-back">
                <h3 > SYNTHETIC DYES</h3>
				<p>Synthetic Luxs Anti-rust, Synthetic Enamel Oil Paint, Glass Polish
											Varnish, Synthetic Enamel Primer, and more! </p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell5 flip-card" onClick={() => rotate("4")}>
                <div className="flip-card-inner" id="4">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}   src={back_epoxy} alt="" />
                    <div >EPOXY</div>
                </div>
                <div className="flip-card-back">
                <h3 > EPOXY</h3>
				<p>Epoxy Primer, Epoxy Topcoat, and Epoxy Glossy</p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell6 flip-card" onClick={() => rotate("5")}>
                <div className="flip-card-inner" id="5">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}   src={back_enz} alt="" />
                    <div >ENZYMES</div>
                </div>
                <div className="flip-card-back">
                <h3 >ENZYMES</h3>
				<p>Peroxide Enzyme, Optical Enzyme, Sizing Enzyme, Stone Enzyme, Neutral Enzyme, and more! </p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell7 flip-card" onClick={() => rotate("6")}>
                <div className="flip-card-inner" id="6">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img height={"100%"}   src={back_soft} alt="" />
                    <div >SOFTENERS</div>
                </div>
                <div className="flip-card-back">
                <h3 > SOFTENERS</h3>
				<p>Anionic Softeners, Cationic Softeners, Anionic Softeners,Cationic Softeners, and more!</p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell8 flip-card" onClick={() => rotate("7")}> 
            <div className="flip-card-inner" id="7">
            <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}   src={back_chem} alt="" />
                    <div >CHEMICALS</div>
                </div>
                <div className="flip-card-back">
                <h3 > Chemicals</h3>
				<p>Buffer Acid, Dispersant,  Scalding Complex, Boiler Chemicals and more! </p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>


            <div className="cell9 flip-card" onClick={() => rotate("8")}>
                <div className="flip-card-inner" id="8">
                <div className="flip-card-front" style={{  overflow:"hidden",  }}>
                    <img width={"100%"}   src={back_clean} alt="" />
                    <div >Laundry &amp; Cleaning <br /> Additives</div>
                </div>
                <div className="flip-card-back">
                <h3 > Laundry &amp; Cleaning </h3>
				<p>Reactive Washing Soap, Ion Trap, Hydrophilic Silicone, Wetting agent, Water Purification, and more! </p>
                <div className='buttons'><Link to={"/products"} style={{color: "#fff"}} >  Learn More &#x25B6;</Link> </div></div>
                </div>
                </div>
        </div>  
    );
}


export default Markets