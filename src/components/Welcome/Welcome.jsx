
import welImg from "../../assets/images/intro.jpg";
import css from "../Welcome/css.index.css";

function Welcome(){
    return(
        <div className="welcome_wrapper">
            <div className="welcome_image"><img src={welImg} width={"98%"} alt="" /></div>
            <div className="welcome_text">
                <p className="welcomTo">WELCOME TO</p>
                <p className="berkyigitler">BERK</p> <p className="berkyigitler"> ÝIGITLER</p>
                <div className="dividerW"></div>
                <p className="des_txt">Welcome to Berk Ýigitler, your gateway to innovative chemical solutions. Explore our expertise, tailored formulations, and sustainable practices. Let's embark on a journey of transformation together.</p>
            </div>
        </div>  
    );
}


export default Welcome