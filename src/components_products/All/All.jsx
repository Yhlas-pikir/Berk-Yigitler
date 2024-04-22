
import adhs from "../../assets/images/adhesives.jpg";
import logo2 from "../../assets/images/logo2.png"
import "./css.index.css";
import React, { useRef } from 'react';
function All(){ 
    
    const adhvs = useRef(null);
    const paints = useRef(null);
    const texChem = useRef(null);
    const epox = useRef(null);
    const syndye = useRef(null);
    const laund = useRef(null);
    const enzyme = useRef(null);
    

    const scrollToDivAD = () => adhvs.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivPA = () => paints.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivTX = () => texChem.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivEP = () => epox.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivSD = () => syndye.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivLC = () => laund.current.scrollIntoView({ behavior: 'smooth' });
    const scrollToDivEN = () => enzyme.current.scrollIntoView({ behavior: 'smooth' });
    return(
        <>
        <div ref={adhvs} style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:20,padding:10,backgroundColor: "#f8f8f8"}}>
        <div className="all_wrapper">
           <div onClick={scrollToDivAD} >ADHESIVES</div>
           <div onClick={scrollToDivPA} >BOYALAR</div>
           <div onClick={scrollToDivTX} >TEXTILE CHEMICALS</div>
           <div onClick={scrollToDivEP} >EPOXY</div>
           <div onClick={scrollToDivSD} >SYNTHETIC DYES</div>
           <div onClick={scrollToDivLC} >Laundry & Cleaning Additives</div>
           <div onClick={scrollToDivEN} >ENZYMES</div>
            
        </div>  
        </div>
        <> {/* adhesives  */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>ADHESIVES</p>
        <div className="product_wrapper">
            <div className="product_image"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={paints}>with parquet holder</div>
            <div >Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
        </div>  
        </>
        <>  {/* paints  */} 
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>BOYALAR</p>
        
        <div className="product_wrapper">
            <div className="product_image" id="for-mobile"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={texChem}>with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
            <div className="product_image" id="for-desk"><img src={paints} width={"100%"} alt="" /></div>
        </div>  
        </>
        <> {/* textile chems  */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>TEXTILE CHEMICALS</p>
        <div  className="product_wrapper">
            <div className="product_image"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={epox} >with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
        </div>  
        </>
        <>  {/* epoxy */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>EPOXY</p>
        <div className="product_wrapper">
            <div className="product_image" id="for-mobile"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={syndye}>with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
            <div className="product_image" id="for-desk"><img src={adhs} width={"100%"} alt="" /></div>
        </div>  
        </>
        <>  {/* synthetic dyes */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>SYNTHETIC DYES</p>
        <div className="product_wrapper">
            <div className="product_image"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={laund}>with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
        </div>  
        </>
        <>{/* clean  */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>Laundry &amp; Cleaning Additives</p>
        <div className="product_wrapper">
            <div className="product_image" id="for-mobile"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div ref={enzyme}>with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
            <div className="product_image" id="for-desk"><img src={adhs} width={"100%"} alt="" /></div>
        </div>  
        </>
        <> {/* Enzyme */}
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>ENZYMES</p>
        <div className="product_wrapper">
            <div className="product_image"><img src={adhs} width={"100%"} alt="" /></div>
           <div className="product_about">
            <div>Strene Acrylic(hard)</div>
            <div>Strene Acrylic(medium)</div>
            <div>Strene Acrylic(soft)</div>
            <div>Printing Binder (Vamli)</div>
            <div>Printing Binder (Stren)</div>
            <div>Cellophane Glue (automatic)</div>
            <div>Cellophane Glue (regular)</div>
            <div>Carpet Glue (Homopolymer)</div>
            <div>Carpet Glue (Copolymer)</div>
            <div>Carpet Latex</div>
            <div>Skeleton Glue</div>
            <div>Solid Glue</div>
            <div>with parquet holder</div>
            <div>Coil Glue</div>
            <div>Ear Glue</div>
            <div>Pva Glue</div>
            
                </div>
        </div>  
        </>
        <div className="about_mobile">
                <img src={logo2}height={"60px"} alt="" />
                <p style={{color:"gray", width:"85%",textAlign:"center",marginTop:14}}>Empowering industries worldwide, Berk Ýigitler pioneers innovative chemical solutions. With a commitment to excellence, we drive progress and sustainability. Join us in shaping a brighter future through chemistry.</p>
                <div className="divider"></div>
                <p style={{color:"coral"}}>GMAIL</p>
                <p style={{color:"gray", width:"85%",textAlign:"center"}}>emailofcompany@gmail.com</p>
                <p style={{color:"#216FB4", marginTop:"20px"}}>PHONE</p>
                <a href="tel:+99361471919"> <p style={{color:"gray", width:"85%",textAlign:"center"}}>+99361471919</p></a>
                <p style={{color:"#E93E3A", marginTop:"20px"}}>ADRESS</p>
                <p style={{color:"gray", width:"85%",textAlign:"center", marginBottom:"10px"}}>Akhal, Gokdepe Region, Block 11/6</p>
            </div>
        </>
    );
}


export default All