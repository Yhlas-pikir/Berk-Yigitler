
import adhs from "../../assets/images/adhesives.jpg";
import "../Adhesives/css.index.css";

function Clean(){
    return(
        <>
        <p style={{textAlign:"center", fontSize:40,marginTop:20,fontWeight:"bold"}}>Laundry &amp; Cleaning Additives</p>
        <div className="product_wrapper">
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
            <div className="product_image"><img src={adhs} width={"100%"} alt="" /></div>
        </div>  
        </>
    );
}


export default Clean